import { Box, CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import {
  WrapperHeader,
  TechnologiesButton,
  SwitchLabel,
  InputWrapper,
  Label,
  Input,
  TextArea,
  InputFile,
  ImageWrapper,
  FormButton
} from '../../pages/styles/create'

import { ImagePreview } from '../ImagePreview'

import { MdClose } from 'react-icons/md'
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { ProjectContext } from '../../contexts/ProjectContext'

import Switch from 'react-switch'
import { useHistory } from 'react-router-dom'
import { ModalTechnology } from '../ModalTechnology'

import { AnimatePresence } from 'framer-motion'
import ProjectApi from '../../services/api/ProjectApi'

export const ModalEditProject: React.FC = () => {
  const {
    modalTechnologyIsOpen,
    openModalTechnology,
    openAlert,
    closeModalEditProject
  } = useContext(ModalContext)
  const {
    choosedTechnologies,
    getChoosedTechnologies,
    projectId,
    projectName,
    projectDescription,
    projectLink,
    projectTechnologies,
    projectImages,
    updateProjectList
  } = useContext(ProjectContext)

  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const [imagesChoosen, setImagesChoosen] = useState<any>(0)
  const [srcImage, setSrcImage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    putInfo()
  }, [])

  const handleChecked = (checked: boolean) => {
    setChecked(!checked)
  }

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && fileRef.current?.files) {
      setFiles(Array.from(fileRef.current.files))
      setImagesChoosen(fileRef.current.files.length)
    }
  }

  const listImages = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(files)
  }

  const handleOnChanged = (e: ChangeEvent<HTMLInputElement>) => {
    listImages(e)
    verifyFile(e)
  }

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeModalEditProject()
    }
  }

  const putInfo = () => {
    if (projectName && nameRef.current !== null) {
      nameRef.current.value = projectName
    }
    if (projectDescription && descriptionRef.current !== null) {
      descriptionRef.current.value = projectDescription
    }
    if (projectTechnologies) {
      projectTechnologies.map((technology: App.Technology) => {
        return getChoosedTechnologies(technology.id)
      })
    }
    if (projectLink && linkRef.current !== null) {
      setChecked(true)
      linkRef.current.value = projectLink
    } else {
      setChecked(false)
    }
  }

  const updateSuccessfully = () => {
    openAlert('Project updated successfully', true)
    closeModalEditProject()
    updateProjectList()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (nameRef.current !== null && descriptionRef.current !== null) {
      ProjectApi.update({
        id: projectId,
        name: nameRef.current?.value,
        description: descriptionRef.current?.value,
        link: linkRef.current?.value,
        technologies: choosedTechnologies
      })
        .then((res) => updateSuccessfully())
        .catch((e) => e.response.data.errors[0].message)
    }
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {modalTechnologyIsOpen && <ModalTechnology />}
      </AnimatePresence>
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay} />
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        <WrapperHeader>
          <TechnologiesButton type="button" onClick={openModalTechnology}>
            Choose technologies
          </TechnologiesButton>
          <SwitchLabel>
            <span>Is the site online?</span>
            <Switch
              onColor="#417A95"
              onChange={() => handleChecked(checked)}
              checked={checked}
              className="switch"
            />
          </SwitchLabel>
        </WrapperHeader>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input ref={nameRef} id="name" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="description">Description</Label>
          <TextArea ref={descriptionRef} id="description" />
        </InputWrapper>
        {checked ? (
          <InputWrapper>
            <Label htmlFor="link">Link</Label>
            <Input ref={linkRef} id="link" />
          </InputWrapper>
        ) : (
          <>
            <InputFile>
              <label htmlFor="file">CHOOSE IMAGES</label>
              <p>
                {imagesChoosen} {imagesChoosen === 1 ? 'file' : 'files'} choosen
              </p>
              <input
                onChange={handleOnChanged}
                ref={fileRef}
                id="file"
                type="file"
                multiple
                accept="image/png, image/jpg, image/jpeg"
              />
            </InputFile>
            <ImageWrapper>
              {files.map((file, index) => {
                return (
                  <ImagePreview
                    key={index}
                    name={file.name}
                    size={file.size}
                    file={file}
                  />
                )
              })}
            </ImageWrapper>
          </>
        )}
        <CloseButton type="button" onClick={closeModalEditProject}>
          <MdClose size={26} />
        </CloseButton>
        <FormButton onClick={handleSubmit}>Update</FormButton>
      </Box>
    </Container>
  )
}
