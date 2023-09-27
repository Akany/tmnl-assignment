import classnames from 'classnames'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import styles from './styles.module.scss'

interface PaginationProps {
  className?: string
  page: number
  totalPages: number
  goNext: () => void
  goPrevious: () => void
}

export const Pagination = (props: PaginationProps) => {
  const { className, page, totalPages, goNext, goPrevious } = props

  const isPrevious = page !== 1
  const isNext = page !== totalPages

  return (
    <section className={classnames(styles.section, className)}>
      <button className={styles.button} onClick={goPrevious} disabled={!isPrevious}>
        <NavigateBeforeIcon color={isPrevious ? 'action' : 'disabled'} />
      </button>
      <span>{page} / {totalPages}</span>
      <button className={styles.button} onClick={goNext} disabled={!isNext}>
        <NavigateNextIcon color={isNext ? 'action' : 'disabled'} />
      </button>
    </section>
  )
}