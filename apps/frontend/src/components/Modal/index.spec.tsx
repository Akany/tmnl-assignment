import { render, screen, fireEvent } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Modal } from '.'

describe('Modal', () => {
  it('Should render', () => {
    render(
      <Modal title={faker.lorem.word()} onClose={jest.fn()}>
        Content
      </Modal>
    )

    expect(screen.getByRole('dialog')).toBeDefined()
  })

  it('Should render title', () => {
    const title = faker.lorem.word()

    render(
      <Modal title={title} onClose={jest.fn()}>
        Content
      </Modal>
    )

    expect(screen.getByRole('heading', { name: title })).toBeDefined()
  })

  it('Should render close icon', () => {
    render(
      <Modal title={faker.lorem.word()} onClose={jest.fn()}>
        Content
      </Modal>
    )

    expect(screen.getByRole('button', { name: 'close' })).toBeDefined()
  })

  it('Should render content', () => {
    const title = faker.lorem.word()
    const content = (
      <form name="login">
        <input />
        <button />
      </form>
    )

    render(
      <Modal title={title} onClose={jest.fn()}>
        {content}
      </Modal>
    )

    expect(screen.getByRole('form')).toBeDefined()
  })

  it('Should notify on close', () => {
    const onClose = jest.fn()
    render(
      <Modal title={faker.lorem.word()} onClose={onClose}>
        Content
      </Modal>
    )

    fireEvent.click(screen.getByRole('button', { name: 'close' }))

    expect(onClose).toHaveBeenCalled()
  })
})
