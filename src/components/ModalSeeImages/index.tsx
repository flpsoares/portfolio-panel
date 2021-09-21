import { Box, CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { ModalContext } from '../../contexts/ModalContext'
import { ImagePreview } from '../ImagePreview'

import ProjectApi from '../../services/api/ProjectApi'
import { AxiosError } from 'axios'

export const ModalSeeImages: React.FC = () => {
  const { projectImages, projectId, removeImageByIndex } = useContext(ProjectContext)
  const { closeModalSeeImages, openAlert } = useContext(ModalContext)

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalSeeImages()
    }
  }

  const deleteImage = (index: number, listIndex: number) => {
    if (projectId) {
      ProjectApi.deleteImageByProjectId(projectId, index)
        .then(() => removeImageByIndex(listIndex))
        .then(() => openAlert('Image deleted successfully', true))
        .catch((e: AxiosError) => openAlert(e.response?.data.errors[0].message))
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
        {projectImages?.map((image, index) => {
          return (
            <ImagePreview
              key={image.id}
              name={image.filename}
              size={image.size}
              url={image.url}
              onDelete={() => deleteImage(image.id, index)}
            />
          )
        })}
        <CloseButton onClick={closeModalSeeImages} type="button">
          <MdClose size={26} />
        </CloseButton>
      </Box>
    </Container>
  )
}
