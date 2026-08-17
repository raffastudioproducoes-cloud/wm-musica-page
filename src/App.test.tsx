import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('hero', () => {
  it('renders the approved original Stitch layout', () => {
    render(<App />)
    expect(screen.getByTitle('Layout original da landing page Wilma Machado')).toHaveAttribute('src', '/code.html')
  })
})
