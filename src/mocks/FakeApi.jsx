
const product = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }]

export const mock = () => {
    const task = new Promise ((resolve) => {
        setTimeout(() => resolve(product), 2000)
    })
    return task
}

export const getItem = () => {
    const task = new Promise ((resolve) => {
        setTimeout(() => resolve(product[1]), 2000)
    })
    return task
}