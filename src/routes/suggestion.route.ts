import express from 'express'
import suggestionController from '../controllers/suggestion.controller'
const suggestionRouter = express.Router()

suggestionRouter.get('/', (req, res) => {
  suggestionController.getAll(req, res)
})

suggestionRouter.get('/:status', (req, res) => {
  suggestionController.getByStatus(req, res)
})

suggestionRouter.get('/:id', (req, res) => {
  suggestionController.getById(req, res)
})

suggestionRouter.put('/:id', (req, res) => {
  suggestionController.updateById(req, res)
})

suggestionRouter.delete('/:id', (req, res) => {
  suggestionController.deleteById(req, res)
})

suggestionRouter.post('/add', (req, res) => {
  suggestionController.create(req, res)
})

export default suggestionRouter
