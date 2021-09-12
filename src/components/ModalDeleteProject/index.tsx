import {
  Box,
  CloseButton,
  Container,
  OverlayBackdrop,
  OverlayBody,
  Title,
  Wrapper
} from './style'

import { MdClose } from 'react-icons/md'

import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import ProjectApi from '../../services/api/ProjectApi'

import { useHistory } from 'react-router-dom'

export const ModalDeleteProject: React.FC = () => {
  const { closeModalDeleteProject, deleteId, deleteName, openAlert } =
    useContext(ModalContext)

  const history = useHistory()

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalDeleteProject()
    }
  }

  const handleSubmit = () => {
    if (deleteId !== undefined) {
      ProjectApi.deleteProject(deleteId)
        .then(() => closeModalDeleteProject())
        .then(() => {
          openAlert('Project deleted successfully', true)
        })
        .then(() => history.push('/'))
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
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <Title>
          Are you sure you want to delete the project <span>{deleteName}</span>?
        </Title>
        <Wrapper>
          <button onClick={handleSubmit}>Yes</button>
          <button onClick={closeModalDeleteProject}>No</button>
        </Wrapper>
        <CloseButton onClick={closeModalDeleteProject} type="button">
          <MdClose size={26} />
        </CloseButton>
      </Box>
    </Container>
  )
}
