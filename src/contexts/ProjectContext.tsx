import { createContext, ReactNode, useEffect, useState } from 'react'
import ProjectApi from '../services/api/ProjectApi'

interface ProjectContextData {
  technologies: Array<App.Technology>
  choosedTechnologies: number[] | undefined
  getChoosedTechnologies: (number: number) => void
}

interface ProjectContextProviderProps {
  children: ReactNode
}

export const ProjectContext = createContext({} as ProjectContextData)

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [technologies, setTechnologies] = useState<any>([])
  const choosedTechnologies: number[] = []

  const getChoosedTechnologies = (number: number) => {
    choosedTechnologies.push(number)
  }

  useEffect(() => {
    ProjectApi.listTechnologies().then((res) => setTechnologies(res))
  }, [])

  return (
    <ProjectContext.Provider
      value={{ technologies, getChoosedTechnologies, choosedTechnologies }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
