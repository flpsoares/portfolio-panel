import { createContext, ReactNode, useMemo, useState } from 'react'
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
  projectImages: App.Image[]
  projectLink: string | undefined
  updateList: number
  setProjectImages: (projectImage: any) => void
  updateProjectList: () => void
  removeImageByIndex: (index: number) => void
}

interface ProjectContextProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [technologies, setTechnologies] = useState<any>([])
  const [technologyWasAdded, setTechnologyWasAdded] = useState(false)

  const [choosedTechnologies, setChoosedTechnologies] = useState<number[]>([])

  const [projectId, setProjectId] = useState<number>()
  const [projectName, setProjectName] = useState<string>()
  const [projectDescription, setProjectDescription] = useState<string>()
  const [projectTechnologies, setProjectTechnologies] = useState<
    number[] | undefined
  >()
  const [projectImagesState, setProjectImages] = useState<App.Image[]>([])
  const projectImages = useMemo(() => {
    return projectImagesState.sort((a, b) => {
      return a.order - b.order
    })
  }, [projectImagesState])
  const [projectLink, setProjectLink] = useState<string>()

  const [updateList, setUpdateList] = useState(0)

  const getChoosedTechnologies = (number: number) => {
    setChoosedTechnologies((choosedTechnologies) => [...choosedTechnologies, number])
  }

  const addedTechnology = () => {
    setTechnologyWasAdded(true)
  }

  const clearTechnologies = () => {
    setChoosedTechnologies([])
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
    setProjectImages(images || [])
    setProjectLink(link)
  }

  const updateProjectList = () => {
    setUpdateList(updateList + 1)
  }

  const removeImageByIndex = (index: number) => {
    setProjectImages(() =>
      projectImages?.filter((_, imageIndex) => imageIndex !== index)
    )
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
        projectLink,
        updateList,
        updateProjectList,
        removeImageByIndex,
        setProjectImages
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
