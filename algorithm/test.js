// Expected output: [[1, 3, 0, 2], [2, 0, 3, 1]]
function isAvailable(candidate, targetCol) {
  const currentRow = candidate.length;
  for (
    let nQueenPlacedRow = 0;
    nQueenPlacedRow < currentRow;
    nQueenPlacedRow++
  ) {
    if (
      candidate[nQueenPlacedRow] === targetCol ||
      Math.abs(candidate[nQueenPlacedRow] - targetCol) ===
        currentRow - nQueenPlacedRow
    ) {
      return false;
    }
  }

  return true;
}

function nQueen(boardSize, currentRow, candidate, result) {
  if (currentRow === boardSize) {
    result.push(candidate.slice());
    return;
  }

  for (let targetCol = 0; targetCol < boardSize; targetCol++) {
    if (isAvailable(candidate, targetCol)) {
      candidate.push(targetCol);
      nQueen(boardSize, currentRow + 1, candidate, result);
      candidate.pop();
    }
  }
}
let result = [];
nQueen(4, 0, [], result);
console.log(result);
