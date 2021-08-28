import { useState, ReactNode, createContext } from 'react'
import { disableScroll, enableScroll } from '../utils/handleScroll'

interface ModalContextData {
  modalTechnologyIsOpen: boolean
  openModalTechnology: () => void
  closeModalTechnology: () => void
  alertIsOpen: boolean
  alertContent: string
  alertIsSuccess: boolean | undefined
  openAlert: (content: string, isSuccess?: boolean) => void
  closeAlert: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modalTechnologyIsOpen, setModalTechnologyIsOpen] = useState(false)
  const [alertIsOpen, setAlertIsOpen] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertIsSuccess, setAlertIsSuccess] = useState<boolean | undefined>(false)

  const openModalTechnology = () => {
    disableScroll()
    setModalTechnologyIsOpen(true)
  }

  const closeModalTechnology = () => {
    enableScroll()
    setModalTechnologyIsOpen(false)
  }

  const openAlert = (content: string, isSuccess?: boolean) => {
    setAlertIsOpen(true)
    setAlertContent(content)
    setAlertIsSuccess(isSuccess)
  }

  const closeAlert = () => {
    setAlertIsOpen(false)
    setAlertContent('')
  }

  return (
    <ModalContext.Provider
      value={{
        modalTechnologyIsOpen,
        openModalTechnology,
        closeModalTechnology,
        alertIsOpen,
        alertContent,
        alertIsSuccess,
        openAlert,
        closeAlert
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
