import { api } from '../api'

class ProjectApi {
  public async createWithLink({
    name,
    description,
    link,
    technologies
  }: Partial<App.Project>) {
    return api
      .post('project', {
        name,
        description,
        link,
        technologies
      })
      .then((res) => res.data)
  }

  // public async createWithImage({
  //   name,
  //   description,
  //   image,
  //   technologies
  // }: Partial<App.Project>) {
  //   const formData = new FormData()
  //   formData.append('image', image)

  //   return api
  //     .post('project', {
  //       name,
  //       description,
  //       image,
  //       technologies
  //     })
  //     .then((res) => res.data)
  // }

  public async listTechnologies() {
    return api.get<App.Technology>('technologies').then((res) => res.data)
  }

  public async createTechnology({ name }: Partial<App.Technology>) {
    return api
      .post('technology', {
        name
      })
      .then((res) => res.data)
  }
}

export default new ProjectApi()
