declare namespace App {
  export interface Image extends App.Model {
    filename: string
    url: string
    size: number
    project_id: number
  }
}
