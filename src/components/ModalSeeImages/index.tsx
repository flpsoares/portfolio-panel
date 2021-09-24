import { useContext, useState, useEffect, useCallback } from 'react'
import { Box, CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'

import { MdClose } from 'react-icons/md'
import { ProjectContext } from '../../contexts/ProjectContext'
import { ModalContext } from '../../contexts/ModalContext'
import { ImagePreview } from '../ImagePreview'

import ProjectApi from '../../services/api/ProjectApi'
import { AxiosError } from 'axios'
import { api } from '../../services/api'

export const ModalSeeImages: React.FC = () => {
  const { projectImages, projectId, removeImageByIndex, setProjectImages } =
    useContext(ProjectContext)
  const { closeModalSeeImages, openAlert } = useContext(ModalContext)

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination || !projectImages) return
      const items = projectImages
      const [reorderedItem] = items?.splice(result.source.index, 1)
      items?.splice(result.destination.index, 0, reorderedItem)

      setProjectImages(items)

      api
        .put('updateOrder', {
          items: items?.map((item, index) => {
            return {
              filename: item.filename,
              order: index
            }
          })
        })
        .then((res) => res.data)
        .then(setProjectImages)
    },
    [projectImages]
  )

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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="images">
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {projectImages?.map((image, index) => {
                    return (
                      <Draggable
                        key={image.id}
                        draggableId={String(image.id)}
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <div
                              className="dnd-style"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <ImagePreview
                                key={image.id}
                                name={image.filename}
                                size={image.size}
                                url={image.url}
                                onDelete={() => deleteImage(image.id, index)}
                              />
                            </div>
                          )
                        }}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>
        <CloseButton onClick={closeModalSeeImages} type="button">
          <MdClose size={26} />
        </CloseButton>
      </Box>
    </Container>
  )
}
