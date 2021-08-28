import {
  Box,
  BoxWrapper,
  CloseButton,
  Container,
  OverlayBackdrop,
  OverlayBody
} from './style'

import { MdClose } from 'react-icons/md'
import { CheckTech } from '../CheckTech'
import { useContext } from 'react'

import { ProjectContext } from '../../contexts/ProjectContext'
import { ModalContext } from '../../contexts/ModalContext'

export const ModalTechnology: React.FC = () => {
  const { closeModalTechnology } = useContext(ModalContext)
  const { technologies } = useContext(ProjectContext)

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalTechnology()
    }
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay} />
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }}>
        <BoxWrapper>
          {technologies
            ?.map((tech) => {
              return <CheckTech key={tech.id} num={tech.id} children={tech.name} />
            })
            .reverse()}
        </BoxWrapper>
        <CloseButton onClick={closeModalTechnology} type="button">
          <MdClose size={26} />
        </CloseButton>
      </Box>
    </Container>
  )
}
