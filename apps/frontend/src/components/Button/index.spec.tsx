import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Button } from '.'

describe('Button', () => {
  it('Should render button', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeDefined()
  })

  it('Should render children', () => {
    const label = faker.lorem.word()
    render(<Button>{label}</Button>)

    expect(screen.getByText(label)).toBeDefined()
  })
})