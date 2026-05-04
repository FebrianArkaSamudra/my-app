import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
  it('renders the student profile', () => {
    render(<Home />)
    
    expect(screen.getByText("ArkaStudent Profile")).toBeInTheDocument()
    expect(screen.getByText('Febrian Arka Samudra')).toBeInTheDocument()
    expect(screen.getByText('2341720066')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})