declare namespace App {
  export interface Image extends App.Model {
    filename: string
    url: string
    order: number
    size: number
    project_id: number
  }
}
