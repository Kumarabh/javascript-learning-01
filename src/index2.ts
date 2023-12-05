// const p1 = Promise.reject(0);
const p2 = Promise.resolve('John')
const p3 = new Promise((resolve, reject) => { setTimeout(() => {resolve('James')}, 1000)})


Promise.race([p2, p3])
.then((data: any) => { console.log(data)}, (err: any) => console.log(err))