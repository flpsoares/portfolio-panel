import { createContext, ReactNode, useEffect, useState } from 'react'
import ProjectApi from '../services/api/ProjectApi'

interface ProjectContextData {
  technologies: Array<App.Technology>
  choosedTechnologies: number[] | undefined
  getChoosedTechnologies: (number: number) => void
  technologyWasAdded: boolean
  setTechnologyWasAdded: (value: boolean) => void
  addedTechnology: () => void
  listTechnologies: () => void
}

interface ProjectContextProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [technologies, setTechnologies] = useState<any>([])
  const [technologyWasAdded, setTechnologyWasAdded] = useState(false)
  const choosedTechnologies: number[] = []

  const getChoosedTechnologies = (number: number) => {
    choosedTechnologies.push(number)
  }

  const addedTechnology = () => {
    setTechnologyWasAdded(true)
  }

  const listTechnologies = () => {
    ProjectApi.listTechnologies().then((res) => setTechnologies(res))
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
        listTechnologies
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
