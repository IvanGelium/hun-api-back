const { PrismaClient, suggestion_status } = require('@prisma/client')
const prisma = new PrismaClient()

class Suggestion {
  static async getAll() {
    try {
      return await prisma.suggestion.findMany()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async getByStatus(status) {
    try {
      return await prisma.suggestion.findMany({
        where: { status: status },
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async getById(id) {
    return await prisma.suggestion.findUnique({
      where: { id: Number(id) },
    })
  }

  static async create({ data }) {
    let status
    switch (data.status) {
      case 'RECIVED':
        status = suggestion_status.RECIVED
        break
      case 'HANDELED':
        status = suggestion_status.HANDELED
        break
      case 'ACCEPTED':
        status = suggestion_status.ACCEPTED
        break
      case 'REFUSED':
        status = suggestion_status.REFUSED
        break
      default:
        status = suggestion_status.RECIVED
        break
    }
    console.log(status, data.status)
    try {
      return await prisma.suggestion.create({
        data: {
          title: data.title,
          description: data.description,
          source: data.source,
          status: status,
          author_id: data.author_id,
          author_name: data.author_name,
          gitlab_id: Number(data.gitlab_id),
        },
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async updateById(id, data) {
    return await prisma.suggestion.update({
      where: { id: Number(id) },
      data: data,
    })
  }

  static async deleteById(id) {
    return await prisma.suggestion.delete({
      where: { id: Number(id) },
    })
  }
}

export default Suggestion
