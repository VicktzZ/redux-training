import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchUsers = () => axios.get(url)