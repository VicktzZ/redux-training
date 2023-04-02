import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const fetchUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send({ users })
    } catch (error) {
        res.status(404).send({ message: error.message })        
    }
}

export const getUserById = async (req, res) => {
    try {
        let user

        const { id } = req.params
        user = await User.findById(id, '-password')

        if (!user) {
            return res.status(404).send({ message: 'Usuario não encontrado!' })        
        }

        return res.status(200).send({ user, message: 'Usuário encontrado!' })        
    } catch (error) {
        res.status(406).send({ message: error.message })        
    }
}

export const createUser = async (req, res) => {
    const { email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password)

    if (password.length < 8) {
        return res.status(400).send({ message: 'A senha precisa conter no mínimo 8 caractéres!' })
    }
    
    const newUser = User({ email, password: hashedPassword})

    try {
        await newUser.save()

        res.status(201).send({ newUser, message: 'Usuário criado com sucesso!' })
    } catch (error) {
        res.status(404).send({ message: error.message })        
    }
} 

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params

        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).send({ deletedUser, message: 'Usuário deletado com sucesso!' })
    } catch (error) {
        res.status(406).send({ message: error.message })
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params
        const { email, password } = req.body
        
        if (!email || !password) {
            return res.status(406).send({ message: "Preencha alguma das opções para fazer uma alteração!" })
        }

        const hashedPassword = bcrypt.hashSync(password)

        const userUpdates = { email, password: hashedPassword }
        const userUpdated = await User.findByIdAndUpdate(id, userUpdates)

        res.status(200).send({ userUpdated, message: 'Usuário alterado com sucesso!' })
    } catch (error) {
        res.status(406).send({ message: error.message })
    }
}