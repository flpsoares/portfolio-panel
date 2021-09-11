import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import Carousel from 'react-elastic-carousel'
import { MdClose } from 'react-icons/md'
import { ProjectContext } from '../../contexts/ProjectContext'

export const ModalCarousel: React.FC = () => {
  const { closeModalCarousel, initialIndex } = useContext(ModalContext)
  const { projectImages } = useContext(ProjectContext)

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalCarousel()
    }
  }

  return (
    <Container>
      <OverlayBackdrop onClick={closeModalClickingInOverlay}>
        <OverlayBody
          onClick={closeModalClickingInOverlay}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <Carousel isRTL={false} initialActiveIndex={initialIndex}>
            {projectImages?.map((image) => {
              return <img key={image.id} src={image.url} alt={image.filename} />
            })}
          </Carousel>
        </OverlayBody>
        <CloseButton onClick={closeModalCarousel}>
          <MdClose size="36" />
        </CloseButton>
      </OverlayBackdrop>
    </Container>
  )
}
