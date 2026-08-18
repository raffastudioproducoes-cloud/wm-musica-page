// @ts-expect-error Node test runtime types are intentionally not part of the app bundle.
import { readFileSync } from 'node:fs'
// @ts-expect-error jsdom test types are intentionally not part of the app bundle.
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

const original = readFileSync('public/code.html', 'utf8')

describe('original layout behavior', () => {
  it('keeps the decorative hero waves non-interactive and disables them for reduced motion', () => {
    expect(original).toContain('hero-wave-background absolute inset-0 h-full w-full pointer-events-none')
    expect(original).toContain('.hero-wave-background animate')
    expect(original).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('keeps Portuguese as the only page locale', () => {
    expect(original).toContain('<html lang="pt-BR">')
    expect(original).not.toContain('id="language-toggle"')
    expect(original).not.toContain('const translation =')
  })

  it('opens and closes the LGPD terms dialog without losing the trigger focus', () => {
    const dom = new JSDOM(original, {
      runScripts: 'dangerously',
      beforeParse(window: Window) {
        ;(window as typeof window & { tailwind: Record<string, unknown> }).tailwind = {}
      },
    })
    const { document } = dom.window
    const trigger = document.getElementById('terms-trigger') as HTMLButtonElement
    const dialog = document.getElementById('terms-dialog') as HTMLDivElement
    const close = document.getElementById('terms-close') as HTMLButtonElement

    expect(trigger.getAttribute('aria-controls')).toBe('terms-dialog')
    expect(dialog.getAttribute('role')).toBe('dialog')
    expect(dialog.classList.contains('hidden')).toBe(true)

    trigger.focus()
    trigger.click()
    expect(dialog.classList.contains('hidden')).toBe(false)
    expect(document.activeElement).toBe(close)

    close.click()
    expect(dialog.classList.contains('hidden')).toBe(true)
    expect(document.activeElement).toBe(trigger)
  })
})
