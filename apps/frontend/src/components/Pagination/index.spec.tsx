import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from '.'

describe('Pagination', () => {
  it('Should render pagination', () => {
    render(<Pagination page={1} totalPages={10} goNext={jest.fn()} goPrevious={jest.fn()}/>)

    expect(screen.getByRole('navigation', { name: 'pagination' })).toBeDefined()
  })

  it('Should render page position', () => {
    render(<Pagination page={1} totalPages={10} goNext={jest.fn()} goPrevious={jest.fn()}/>)

    expect(screen.getByText('1 / 10')).toBeDefined()
  })

  it('Previous should be disabled', () => {
    render(<Pagination page={1} totalPages={10} goNext={jest.fn()} goPrevious={jest.fn()}/>)

    expect(screen.getByRole('button', { name: 'previous-page' }).hasAttribute('disabled')).toBeTruthy()
  })

  it('Should notify on previous', () => {
    const onPrevious = jest.fn()
    render(<Pagination page={2} totalPages={10} goNext={jest.fn()} goPrevious={onPrevious}/>)

    fireEvent.click(screen.getByRole('button', { name: 'previous-page' }))

    expect(onPrevious).toHaveBeenCalled()
  })

  it('Next should be disabled', () => {
    render(<Pagination page={10} totalPages={10} goNext={jest.fn()} goPrevious={jest.fn()}/>)

    expect(screen.getByRole('button', { name: 'next-page' }).hasAttribute('disabled')).toBeTruthy()
  })

  it('Should notify on next', () => {
    const onNext = jest.fn()
    render(<Pagination page={2} totalPages={10} goNext={onNext} goPrevious={jest.fn()}/>)

    fireEvent.click(screen.getByRole('button', { name: 'next-page' }))

    expect(onNext).toHaveBeenCalled()
  })
})