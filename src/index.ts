import Axios from 'axios';
import https from 'https';

type ITodo = {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}

async function getTodoById(id: number): Promise<ITodo> {
    const url: string = 'https://jsonplaceholder.typicode.com/todos';
    const httpOptions = {
        headers: {},
        httpsAgent: new https.Agent({rejectUnauthorized: false})
    }
    return (await Axios.get(url.concat(`/${id}`), httpOptions)).data

}
const p1 = getTodoById(1);
const p2 = getTodoById(2);
const p3 = getTodoById(3);

// Promise.all([p1, p2, p3])
// .then(
//     (data: ITodo[]) => { console.log(data[2]);}
// )

// Promise.race([p1, p2, p3])
// .then(
//     (data: ITodo) => { console.log(data);}
// )
