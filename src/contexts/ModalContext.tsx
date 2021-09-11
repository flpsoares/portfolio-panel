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
  modalCarouselIsOpen: boolean
  openModalCarousel: (initialIndex: number) => void
  closeModalCarousel: () => void
  initialIndex: number | undefined
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

  const [modalCarouselIsOpen, setModalCarouselIsOpen] = useState(false)
  const [initialIndex, setInitialIndex] = useState<number>()

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

  const openModalCarousel = (initialIndex: number) => {
    setModalCarouselIsOpen(true)
    setInitialIndex(initialIndex)
  }

  const closeModalCarousel = () => {
    setModalCarouselIsOpen(false)
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
        closeAlert,
        modalCarouselIsOpen,
        openModalCarousel,
        closeModalCarousel,
        initialIndex
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
