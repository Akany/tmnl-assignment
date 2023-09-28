import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from '.'

describe('Search', () => {
  it('Should render pagination', () => {
    render(<Search onSearchChange={jest.fn()}/>)

    expect(screen.getByRole('searchbox')).toBeDefined()
  })

  it('Should notify change with debounce', (done) => {
    const onSearchChange = jest.fn()
    render(<Search onSearchChange={onSearchChange}/>)

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 's' } })
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'se' } })

    setTimeout(() => {
      fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'ser' } })

      setTimeout(() => {
        expect(onSearchChange).toHaveBeenCalledTimes(1)
        done()
      }, 700)
    }, 100)
  })
})