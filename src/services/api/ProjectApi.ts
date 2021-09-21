import { api } from '../api'

class ProjectApi {
  public async listProjects() {
    return api.get('projects').then((res) => res.data)
  }

  public async createWithLink(project: Partial<App.Project>) {
    return api.post('projectLink', project).then((res) => res.data)
  }

  public async createWithImage(project: Partial<App.Project>, files: File[]) {
    const formData = new FormData()

    if (project.name && project.description && project.technologies) {
      formData.append('name', project.name)
      formData.append('description', project.description)
      Array.from(files).forEach((image: File) => {
        formData.append('image[]', image)
      })
      project.technologies.forEach((technologies: any) => {
        formData.append('technologies[]', technologies)
      })

      return api.post<App.Project>('projectImage', formData).then((res) => res.data)
    }
  }

  public async listTechnologies() {
    return api.get<App.Technology>('technologies').then((res) => res.data)
  }

  public async createTechnology({ name }: Partial<App.Technology>) {
    return api.post('technology', { name }).then((res) => res.data)
  }

  public async update(project: Partial<App.Project>, files?: File[]) {
    const formData = new FormData()

    if (project.name && project.description && project.technologies) {
      formData.append('name', project.name)
      formData.append('description', project.description)
      if (files) {
        Array.from(files).forEach((image: File) => {
          formData.append('image[]', image)
        })
      }
      if (project.link) {
        formData.append('link', project.link)
      }
      project.technologies.forEach((technologies: any) => {
        formData.append('technologies[]', technologies)
      })

      return api.put(`/project/${project.id}`, formData)
    }
  }

  public async deleteImageByProjectId(projectId: number, imageId: number) {
    return api.delete(`/image/${projectId}/${imageId}`).then((res) => res.data)
  }

  public async deleteProject(id: string) {
    return api.delete(`/project/${id}`)
  }
}

export default new ProjectApi()
