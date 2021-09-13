import { api } from '../api'

class ProjectApi {
  public async listProjects() {
    return api.get('projects').then((res) => res.data)
  }

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

  public async update({
    id,
    name,
    description,
    link,
    technologies
  }: Partial<App.Project>) {
    return api.put(`/project/${id}`, { name, description, link, technologies })
  }

  public async deleteProject(id: string) {
    return api.delete(`/project/${id}`)
  }
}

export default new ProjectApi()
