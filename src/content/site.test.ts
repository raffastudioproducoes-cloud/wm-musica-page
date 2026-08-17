import { describe, expect, it } from 'vitest'
import { getCopy, supportedLocales } from './site'

describe('site copy', () => {
  it('uses Portuguese as the only supported locale', () => expect(supportedLocales).toEqual(['pt-BR']))
  it('keeps the approved artist name in the Portuguese content', () => expect(getCopy().artistName).toBe('Wilma Machado'))
})
