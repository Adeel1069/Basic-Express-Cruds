const express = require('express')
const { CreateUser, GetUsers, GetUser, UpdateUser, DeleteUser } = require('../controllers/users')

const router = express.Router();

router.post('/', CreateUser)
router.get('/', GetUsers)
router.get('/:id', GetUser)
router.patch('/:id', UpdateUser)
router.delete('/:id', DeleteUser)

module.exports = router;