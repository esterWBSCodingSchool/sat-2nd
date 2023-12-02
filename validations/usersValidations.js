const { check, body } = require('express-validator');

const idVal = [
    check('id').isMongoId().withMessage('The id format is not accepted')
]

const postVal = [
    body('username').isString().withMessage('username needs to be  string').notEmpty().withMessage('username is required'),
    body('first_name').isString().withMessage('first_name needs to be  string').notEmpty().withMessage('first_name is required'),
    body('last_name').isString().withMessage('last_name needs to be  string').notEmpty().withMessage('last_name is required'),
]

const putVal = [
    body('fromName').isString().withMessage('fromName needs to be  string').notEmpty().withMessage('fromName is required'),
    body('toName').isString().withMessage('toName needs to be  string').notEmpty().withMessage('toName is required')

]
module.exports = { idVal, postVal, putVal }

