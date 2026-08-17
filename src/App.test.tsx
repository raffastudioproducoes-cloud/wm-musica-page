import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('hero', () => {
  it('uses the approved Wilma working photograph', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /Wilma Machado trabalhando/i })).toHaveAttribute('src', '/wilma-trabalhando-set-2015.jpg')
  })
})
