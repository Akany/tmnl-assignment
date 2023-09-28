import { render, screen, fireEvent } from '@testing-library/react'
import { Status } from '.'

describe('Status', () => {
  it('Should render status', () => {
    render(<Status onStatusChange={jest.fn()}/>)

    expect(screen.getByRole('combobox')).toBeDefined()
    expect(screen.getByRole('option', { name: 'All' })).toBeDefined()
    expect(screen.getByRole('option', { name: 'Open' })).toBeDefined()
    expect(screen.getByRole('option', { name: 'Closed' })).toBeDefined()
  })

  it('Should notify on status change', () => {
    const onStatusChange = jest.fn()

    render(<Status onStatusChange={onStatusChange}/>)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'OPEN' } })

    expect(onStatusChange).toHaveBeenCalledWith('OPEN')
  })
})