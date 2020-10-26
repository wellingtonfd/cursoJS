//FIFO First in - first out

const queue = []
queue.unshift(1)
queue.unshift(2)
queue.unshift(3)
queue.unshift(4)

// tirar o priemeiro da fila
console.log(queue.pop())
console.log(queue.pop())

console.log(queue)