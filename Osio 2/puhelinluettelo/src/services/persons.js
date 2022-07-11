import axios from 'axios'

const url = 'http://localhost:3002/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
    
}

const personService = {
    getAll,
    create,
    update,
    remove
}

export default personService;
  
