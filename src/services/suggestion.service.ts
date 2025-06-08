import Suggestion from '../model/Suggestion.model'
const DOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')

const window = new JSDOM('').window
const purify = DOMPurify(window)

class suggestionService {
  //Ме
  static async getAll() {
    try {
      const suggestion = await Suggestion.getAll()

      if (!suggestion) throw new Error('Suggestions not found')
      return suggestion
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async getByStatus(status) {
    try {
      const suggestion = await Suggestion.getByStatus(status)
      if (!suggestion) throw new Error('Suggestions not found')
      return suggestion
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async getById(id) {
    try {
      const suggestion = await Suggestion.getById(id)
      return suggestion
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async updateById({ user, id, data }) {
    try {
      const suggestion = await Suggestion.getById(id)
      if (user.role !== 'ADMIN' || user.id !== suggestion.authorId)
        throw new Error('Нет прав на редактирование этого предложения')
      const suggestionNew = await Suggestion.updateById(id, data)
      return suggestionNew
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async deleteById({ user, id }) {
    try {
      const suggestion = await Suggestion.getById(id)

      if (user.role !== 'ADMIN' || user.id !== suggestion.author_id)
        throw new Error('Нет прав на удаление этого предложения')
      const suggestionNew = await Suggestion.deleteById(id)
      return suggestionNew
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async create(data) {
    const cleanHTML = purify.sanitize(data.description, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'br'],
      ALLOWED_ATTR: ['href', 'target'],
    })
    try {
      data.description = cleanHTML
      const suggestion = await Suggestion.create(data)
      return suggestion
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default suggestionService
