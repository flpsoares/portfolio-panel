declare namespace App {
  export interface Project extends App.Model {
    name: string
    link?: string
    description: string
    images?: App.Image[]
    technologies: number[]
  }
}
