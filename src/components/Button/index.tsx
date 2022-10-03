import React from 'react'
import styles from '../../styles.module.css'

interface IButtonProps {
  text: string
  onClick: () => void
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
}

const Button = ({ text, onClick, type = 'default', ...rest }: IButtonProps) => {
  return (
    <button
      className={`${styles['nycra-btn']} ${styles[`nycra-btn-${type}`]}`}
      type='button'
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
