import { render, screen } from '@testing-library/react'
import { Toolbar } from '.'

describe('Toolbar', () => {
  it('Should render', () => {
    render(<Toolbar onSearch={jest.fn()} onStatus={jest.fn()} onCreated={jest.fn()}/>)

    expect(screen.getByRole('button', { name: 'New Alert' })).toBeDefined()
    expect(screen.getByRole('searchbox')).toBeDefined()
    expect(screen.getByRole('combobox')).toBeDefined()
  })
})