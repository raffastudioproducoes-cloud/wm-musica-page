import { describe, expect, it } from 'vitest'
import { getCopy, supportedLocales } from './site'

describe('site copy', () => {
  it('uses Portuguese as the safe default locale', () => expect(getCopy('unknown').locale).toBe('pt-BR'))
  it('keeps the approved artist name in every supported locale', () => supportedLocales.forEach((locale) => expect(getCopy(locale).artistName).toBe('Wilma Machado')))
})
