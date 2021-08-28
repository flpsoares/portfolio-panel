import { Container, Content, Progress } from './style'

import { MdClose } from 'react-icons/md'

import { useEffect, useContext, useState } from 'react'

import { ModalContext } from '../../contexts/ModalContext'

interface AlertProps {
  content: string
  isSuccess?: boolean
}

export const Alert: React.FC<AlertProps> = ({ content, isSuccess }) => {
  const colorError = '#F44336'
  const colorSuccess = '#5cb85c'

  const { closeAlert } = useContext(ModalContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert()
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      color={isSuccess ? colorSuccess : colorError}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <Content>
        <p>{content}</p>
        <button onClick={closeAlert}>
          <MdClose />
        </button>
      </Content>
      <Progress>
        <div></div>
      </Progress>
    </Container>
  )
}
