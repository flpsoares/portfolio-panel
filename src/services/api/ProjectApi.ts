import { api } from '../api'

class ProjectApi {
  public async createWithLink({
    name,
    description,
    link,
    technologies
  }: Partial<App.Project>) {
    return api
      .post('projectLink', {
        name,
        description,
        link,
        technologies
      })
      .then((res) => res.data)
  }

  public async createWithImage({ name, description, image, technologies }: any) {
    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    Array.from(image).forEach((image: any) => {
      formData.append('image[]', image)
    })
    technologies.forEach((technologies: any) => {
      formData.append('technologies[]', technologies)
    })

    return api.post<App.Project>('projectImage', formData).then((res) => res.data)
  }

  public async listTechnologies() {
    return api.get<App.Technology>('technologies').then((res) => res.data)
  }

  public async createTechnology({ name }: Partial<App.Technology>) {
    return api.post('technology', { name }).then((res) => res.data)
  }

  public async deleteProject(id: string) {
    return api.delete(`/project/${id}`)
  }
}

export default new ProjectApi()
