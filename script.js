const range = [0, 7]
//paths are rappresented by list of vertex and stored inside paths array, for example one path is [[0,0],[0,2]],
// then find the shortest path, each array is a row
class ChessBoard {
  constructor() {
    let paths = new Array()
  }
}

function knightMoves(start, end) {
  //every move add or subtract 2 to one number and add or subtract 1 to the other, in the center we have 8 combinations
  let rowStart = start[0]
  let colStart = start[1]
  let rowEnd = end[0]
  let colEnd = end[1]
  let DifferenceBetweenRows = Math.abs(rowStart - rowEnd)
  let DifferenceBetweenCols = Math.abs(colStart - colEnd)
  function moveUpLeft(rowStart, colStart) {
    return [rowStart + 2, colStart - 1]
  }
  function moveUpRight(rowStart, colStart) {
    return [rowStart + 2, colStart + 1]
  }
  function moveRightUp(rowStart, colStart) {
    return [rowStart + 1, colStart + 2]
  }
  function moveRightDown(rowStart, colStart) {
    return [rowStart - 1, colStart + 2]
  }
  function moveDownRight(rowStart, colStart) {
    return [rowStart - 2, colStart + 1]
  }
  function moveDownLeft(rowStart, colStart) {
    return [rowStart - 2, colStart - 1]
  }
  function moveLeftDown(rowStart, colStart) {
    return [rowStart - 1, colStart - 2]
  }
  function moveLeftUp(rowStart, colStart) {
    return [rowStart + 1, colStart - 2]
  }
  if (rowStart > rowEnd && DifferenceBetweenRows > DifferenceBetweenCols) {
  }
}
