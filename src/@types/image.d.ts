declare namespace App {
  export interface Image extends App.Model {
    filename: string
    url: string
    project_id: number
  }
}
