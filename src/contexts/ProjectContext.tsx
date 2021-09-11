import { createContext, ReactNode, useState } from 'react'
import ProjectApi from '../services/api/ProjectApi'

interface ProjectContextData {
  technologies: Array<App.Technology>
  choosedTechnologies: number[]
  getChoosedTechnologies: (number: number) => void
  technologyWasAdded: boolean
  setTechnologyWasAdded: (value: boolean) => void
  addedTechnology: () => void
  listTechnologies: () => void
  clearTechnologies: () => void
  getProjectInfo: ({ id, name, description, technologies, image, link }: any) => void
  projectId: number | undefined
  projectName: string | undefined
  projectDescription: string | undefined
  projectTechnologies: any
  projectImages: App.Image[] | undefined
  projectLink: string | undefined
}

interface ProjectContextProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [technologies, setTechnologies] = useState<any>([])
  const [technologyWasAdded, setTechnologyWasAdded] = useState(false)
  const choosedTechnologies: number[] = []

  const [projectId, setProjectId] = useState<number>()
  const [projectName, setProjectName] = useState<string>()
  const [projectDescription, setProjectDescription] = useState<string>()
  const [projectTechnologies, setProjectTechnologies] = useState<
    number[] | undefined
  >()
  const [projectImages, setProjectImages] = useState<App.Image[] | undefined>()
  const [projectLink, setProjectLink] = useState<string>()

  const getChoosedTechnologies = (number: number) => {
    choosedTechnologies.push(number)
  }

  const addedTechnology = () => {
    setTechnologyWasAdded(true)
  }

  const clearTechnologies = () => {
    setTechnologies([])
  }

  const listTechnologies = () => {
    ProjectApi.listTechnologies().then((res) => setTechnologies(res))
  }

  const getProjectInfo = async ({
    id,
    name,
    description,
    technologies,
    images,
    link
  }: App.Project) => {
    setProjectId(id)
    setProjectName(name)
    setProjectDescription(description)
    setProjectTechnologies(technologies)
    setProjectImages(images)
    setProjectLink(link)
  }

  return (
    <ProjectContext.Provider
      value={{
        technologies,
        getChoosedTechnologies,
        choosedTechnologies,
        technologyWasAdded,
        setTechnologyWasAdded,
        addedTechnology,
        listTechnologies,
        clearTechnologies,
        getProjectInfo,
        projectId,
        projectName,
        projectDescription,
        projectTechnologies,
        projectImages,
        projectLink
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
