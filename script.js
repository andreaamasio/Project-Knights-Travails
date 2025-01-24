function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("You're already at the destination!")
    return [start]
  }
  const visited = new Set()
  visited.add(start.toString())
  const knightMovesOffset = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ]

  let queue = [[start, [start]]] // each element will have start position and queue stored

  while (queue.length > 0) {
    let [current, path] = queue.shift()
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves:`)
      return path.forEach((cell) => {
        console.log(cell)
      })
    }
    let destinations = knightMovesOffset.map((offset) => {
      let row = offset[0]
      let col = offset[1]
      return [current[0] + row, current[1] + col]
    })

    let filteredDestinations = destinations.filter((position) => {
      return (
        position[0] >= 0 &&
        position[0] <= 7 &&
        position[1] >= 0 &&
        position[1] <= 7 &&
        !visited.has(position.toString())
      )
    })

    filteredDestinations.forEach((destination) => {
      visited.add(destination.toString())
      queue.push([destination, [...path, destination]])
    })
  }
}
knightMoves([0, 0], [7, 7])
