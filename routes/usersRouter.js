const express = require('express');
const { getUsers, getUser, createUser, updateAllTo } = require('../controllers/usersControllers')
const { idVal, postVal, putVal } = require('../validations/usersValidations')
const { nameIsPresent } = require('../middleware/usersMiddleware')
const router = express.Router();


router.get('/', getUsers);

router.get('/:id', idVal, getUser);

router.post('/', postVal, createUser);

router.put('/modifyAll', putVal, nameIsPresent, updateAllTo)

module.exports = router