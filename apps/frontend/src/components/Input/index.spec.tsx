import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Input } from '.'

describe('Input', () => {
  it('Should render input', () => {
    render(<Input />)

    expect(screen.getByRole('textbox')).toBeDefined()
  })

  it('Should add class', () => {
    const className = faker.lorem.word()
    render(<Input className={className} />)

    expect(screen.getByRole('textbox').classList.contains(className)).toBeTruthy()
  })
})
