import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
  it('renders the student profile', () => {
    render(<Home />)
    
    expect(screen.getByText("Arka's Student Profile")).toBeInTheDocument()
    expect(screen.getByText('Arka')).toBeInTheDocument()
    expect(screen.getByText('12345678')).toBeInTheDocument()
    expect(screen.getByText('Web Development (Next.js, React)')).toBeInTheDocument()
  })
})