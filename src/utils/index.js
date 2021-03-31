
import server from './server.js'

const getList = async () => {
    let data = await server.get('./data.json')
    return data
}

export {getList}