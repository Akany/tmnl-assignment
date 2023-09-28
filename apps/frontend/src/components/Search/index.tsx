import React from 'react'
import { Input } from '../Input'

import styles from './styles.module.scss'
interface SearchProps {
  onSearchChange: (search: string) => void
}

const debounce = function <T>(callback: (value: T) => void, time: number) {
  let timer: null | NodeJS.Timer = null

  return (value: T) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => callback(value), time)
  }
}

export const Search = (props: SearchProps) => {
  const { onSearchChange } = props

  const onDebounceSearch = debounce<string>(onSearchChange, 500)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDebounceSearch(event.target.value)
  }

  return <Input className={styles.input} type="search" placeholder="Search" onChange={onChange} />
}
