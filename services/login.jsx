import axios from 'axios'

export const login = user => {
    return axios
        .post('/auth/local/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log('res', response)
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}