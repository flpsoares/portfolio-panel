import { ChangeEvent, useRef, useState, useContext, FormEvent, useMemo } from 'react'
import { ImagePreview } from '../components/ImagePreview'
import { Title } from '../components/Title'
import {
  Container,
  Input,
  InputWrapper,
  Label,
  TextArea,
  Wrapper,
  InputFile,
  ImageWrapper,
  FormButton,
  SwitchLabel,
  WrapperHeader,
  TechnologiesButton
} from './styles/create'

import Switch from 'react-switch'

import { ModalTechnology } from '../components/ModalTechnology'
import { ModalContext } from '../contexts/ModalContext'
import { AnimatePresence } from 'framer-motion'
import { ProjectContext } from '../contexts/ProjectContext'
import ProjectApi from '../services/api/ProjectApi'

import { useHistory } from 'react-router-dom'
import { AxiosError } from 'axios'

export const Create: React.FC = () => {
  const { modalTechnologyIsOpen, openModalTechnology, openAlert } =
    useContext(ModalContext)
  const { choosedTechnologies, clearTechnologies } = useContext(ProjectContext)

  const history = useHistory()

  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const [files, setFiles] = useState<File[]>([])
  const imagesChoosen = useMemo(() => files.length, [files.length])
  const [checked, setChecked] = useState(true)

  const handleChecked = (checked: boolean) => {
    setChecked(!checked)
  }

  const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && fileRef.current?.files) {
      setFiles(Array.from(fileRef.current.files))
    }
    if (fileRef.current !== null && files.length === 0) {
      fileRef.current.value = ''
    }
  }

  const successfullyRegisteredProject = () => {
    openAlert('Project registered', true)
    history.push('/')
    clearTechnologies()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (choosedTechnologies.length === 0) {
      return openAlert('You need to choose at least one technology')
    }

    if (nameRef.current?.value === '') {
      return openAlert('Name cannot be null')
    }

    if (descriptionRef.current?.value === '') {
      return openAlert('Description cannot be null')
    }

    if (checked && linkRef.current?.value === '') {
      return openAlert('Link cannot be null')
    }

    if (!checked && files.length === 0) {
      return openAlert('You need to choose at least one image')
    }

    if (checked) {
      const projectWithLink: Partial<App.Project> = {
        name: nameRef.current?.value,
        description: descriptionRef.current?.value,
        link: linkRef.current?.value,
        technologies: choosedTechnologies
      }

      ProjectApi.createWithLink(projectWithLink)
        .then(() => successfullyRegisteredProject())
        .catch((e: AxiosError) => openAlert(e.response?.data.errors[0].message))
    }

    if (!checked && files !== undefined) {
      if (
        nameRef.current?.value !== undefined &&
        descriptionRef.current?.value !== undefined &&
        files !== null &&
        files !== undefined
      ) {
        const projectWithImage: Partial<App.Project> = {
          name: nameRef.current?.value,
          description: descriptionRef.current?.value,
          technologies: choosedTechnologies
        }
        ProjectApi.createWithImage(projectWithImage, files)
          .then(() => successfullyRegisteredProject())
          .catch((e: AxiosError) => openAlert(e.response?.data.errors[0].message))
      }
    }
  }

  return (
    <Container>
      <AnimatePresence>
        {modalTechnologyIsOpen && <ModalTechnology />}
      </AnimatePresence>
      <Title>Create</Title>
      <Wrapper>
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
                onChange={verifyFile}
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
                    onDelete={() => {
                      setFiles((oldFiles) =>
                        oldFiles.filter((_, keyFile) => keyFile !== index)
                      )
                    }}
                  />
                )
              })}
            </ImageWrapper>
          </>
        )}
        <FormButton onClick={handleSubmit}>Create</FormButton>
      </Wrapper>
    </Container>
  )
}
