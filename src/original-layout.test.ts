// @ts-expect-error Node test runtime types are intentionally not part of the app bundle.
import { readFileSync } from 'node:fs'
// @ts-expect-error jsdom test types are intentionally not part of the app bundle.
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

const original = readFileSync('LandPageWilmaPrototipo/code.html', 'utf8')

describe('original language toggle', () => {
  it('keeps the decorative hero waves non-interactive and disables them for reduced motion', () => {
    expect(original).toContain('hero-wave-background absolute inset-0 h-full w-full pointer-events-none')
    expect(original).toContain('.hero-wave-background animate')
    expect(original).toContain('@media (prefers-reduced-motion: reduce)')
  })

  it('switches the original layout to English and restores Portuguese', () => {
    const dom = new JSDOM(original, {
      runScripts: 'dangerously',
      beforeParse(window: Window) {
        ;(window as typeof window & { tailwind: Record<string, unknown> }).tailwind = {}
      },
    })
    const { document } = dom.window
    const button = document.getElementById('language-toggle') as HTMLButtonElement

    expect(button).not.toBeNull()
    expect(button.getAttribute('aria-label')).toBe('Switch to English')

    button.click()
    expect(document.documentElement.lang).toBe('en')
    expect(document.querySelector('a[href="#inicio"]')?.textContent).toContain('Home')
    expect(button.textContent).toBe('EN/PT')
    expect(button.getAttribute('aria-pressed')).toBe('true')

    button.click()
    expect(document.documentElement.lang).toBe('pt-BR')
    expect(document.querySelector('a[href="#inicio"]')?.textContent).toContain('Início')
    expect(button.textContent).toBe('PT/EN')
    expect(button.getAttribute('aria-pressed')).toBe('false')
  })
})
