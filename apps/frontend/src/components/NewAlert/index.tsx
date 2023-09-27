import { Alert } from '../../views/Alert'
import { useModal } from '../../hooks/useModal'
import { Button } from '../Button'

interface NewAlertProps {
  onCreated: () => void
}

export const NewAlert = (props: NewAlertProps) => {
  const { showModal } = useModal()

  const onClick = () => {
    const onCreated = () => {
      closeModal()
      props.onCreated()
    }

    const closeModal = showModal('New Alert', <Alert onCreated={onCreated}/>)
  }

  return (
    <Button onClick={onClick}>New Alert</Button>
  )
}