declare namespace App {
  export interface Project extends App.Model {
    name: string
    link?: string
    description: string
    image?: App.Image[]
    technologies: number[]
  }
}
