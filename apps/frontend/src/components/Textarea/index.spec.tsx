import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Textarea } from '.'

describe('Textarea', () => {
  it('Should render input', () => {
    render(<Textarea />)

    expect(screen.getByRole('textbox')).toBeDefined()
  })

  it('Should add class', () => {
    const className = faker.lorem.word()
    render(<Textarea className={className} />)

    expect(screen.getByRole('textbox').classList.contains(className)).toBeTruthy()
  })
})
