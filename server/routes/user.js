import { Router } from "express";
import { fetchUsers, getUserById, createUser, deleteUserById, updateUserById } from "../controllers/user.js";

const router = Router()

router.get('/', fetchUsers)
router.get('/user/:id', getUserById)
router.post('/', createUser)
router.delete('/user/delete/:id', deleteUserById)
router.patch('/user/update/:id', updateUserById)

export default router