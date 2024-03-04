import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../src/components/header'
 
describe('Header', () => {
  it('renders a Header', () => {
    render(<Header />)
 
    const header = screen.getByText('Documentation')

    expect(header).toBeInTheDocument()
  })
})