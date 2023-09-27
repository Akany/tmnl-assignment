import { createRoot } from 'react-dom/client'
import { Modal } from '../../components/Modal'

export const useModal = () => {
  const showModal = (title: string, children: React.ReactNode) => {
    const modalNode = document.createElement('div')
    const root = createRoot(modalNode)

    const close = () => {
      document.body.removeChild(modalNode)
      root.unmount()
    }

    root.render(<Modal title={title} onClose={close} >{children}</Modal>)
    document.body.appendChild(modalNode)

    return close
  }

  return {
    showModal
  }
}