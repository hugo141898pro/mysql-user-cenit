const {Router} = require('express');
const router = Router();
const {getUsers, getUser, postUsers, deleteUsers, putUsers} = require('../controllers/user.controller');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUsers);
router.delete('/:id', deleteUsers);
router.patch('/:id', putUsers);

module.exports = router;