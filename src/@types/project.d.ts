declare namespace App {
  export interface Project extends App.Model {
    name: string | undefined
    link?: string | null
    description: string | undefined
    image?: App.Image[]
    technologies: number[] | undefined
  }
}
