// 이 함수는 새로운 퀸을 추가하는 것이 안전한지 확인합니다.
function isAvailable(candidate, targetCol) {
  // 배치된 퀸의 개수로 현재의 행을 알 수 있음
  const currentRow = candidate.length;

  // queenPlacedRow는 이미 퀸이 배치된 행들입니다.
  for (let queenPlacedRow = 0; queenPlacedRow < currentRow; queenPlacedRow++) {
    if (
      // 만약 새 퀸이 배치될 열에 이미 퀸이 있거나 즉, 수직이거나
      candidate[queenPlacedRow] === targetCol ||
      // 대각선 위치에 퀸이 있으면 이 위치에는 퀸을 배치할 수 없습니다.
      // 이미 퀸이 배치된 열 - 검사 대상 열 === 현재 행 - 이미 퀸이 배치된 행
      /**
       * 어떤 퀸이 (4,4)에 있다고 합시다.
       * 이 퀸은 대각선 상으로 이동하며 (3,3), (2,2), (1,1) 또는 (5,5), (6,6), (7,7) 등의 위치로 이동할 수 있습니다.
       * 각 위치에 대해 행과 열의 차이를 계산해 보면, 모두 동일함을 알 수 있습니다. 즉, 행과 열의 차이가 동일한 위치는 대각선 상에 위치한다는 것을 의미합니다.
       * 따라서, Math.abs(candidate[queenPlacedRow] - targetCol)는 이미 배치된 퀸의 위치와 새로운 퀸의 위치의 열 차이를 계산하고,
       * currentRow - queenPlacedRow는 행 차이를 계산합니다.
       * 두 차이가 같으면, 두 퀸은 대각선 상에 있다는 것을 의미합니다.
       * 따라서, 이 코드는 새로운 퀸이 대각선 상에 있는지를 체크하는 로직이 됩니다.
       */
      Math.abs(candidate[queenPlacedRow] - targetCol) ===
        currentRow - queenPlacedRow
      // quuenPlacedRow + candidate[quuenPlacedRow] === currentRow + targetCol
    ) {
      return false;
    }
  }

  // 위의 경우가 아니면, 퀸을 배치할 수 있습니다.
  return true;
}

// 이 함수는 깊이 우선 탐색을 사용하여 N-Queens 문제의 모든 해결책을 찾습니다.
function dfs(boardSize, currentRow, currentCandidate, finalResult) {
  // 모든 행에 퀸이 배치되면, 이 배치를 결과에 추가합니다.
  if (currentRow === boardSize) {
    finalResult.push(currentCandidate.slice());
    return;
  }

  // 각 열에 대해 퀸을 배치하려고 시도합니다.
  for (let targetCol = 0; targetCol < boardSize; targetCol++) {
    // 만약 이 열에 퀸을 안전하게 배치할 수 있다면,
    if (isAvailable(currentCandidate, targetCol)) {
      // 퀸을 이 열에 배치합니다.
      currentCandidate.push(targetCol);

      // 다음 행으로 이동합니다.
      dfs(boardSize, currentRow + 1, currentCandidate, finalResult);

      // 퀸을 이 열에서 제거하여 다른 열에 배치할 수 있게 합니다.
      /**
       * candidate.pop();의 역할은 두 가지 상황에서 중요합니다:
       * 만약 유효한 targetCol이 발견되지 않으면, 즉 isAvailable()이 실패하면, 그 시점의 candidate 배열은 해결책이 될 수 없습니다.
       * 따라서 candidate.pop();는 현재 행의 퀸 위치를 제거하고 이전 행(또는 스택의 이전 레벨)으로 돌아가 다른 가능한 위치를 탐색하게 됩니다. 이것이 백트래킹의 본질입니다.
       * 만약 isAvailable()이 성공하고 currentRow가 boardSize에 도달하여 모든 퀸이 성공적으로 배치된다면, candidate는 잠재적인 해결책이 됩니다. 그러나 이는 특정 해결책일 뿐, 다른 가능한 해결책이 있을 수 있으므로, 이 시점에서 candidate.pop();를 사용하여 마지막 행의 퀸 위치를 제거하고 이전 행으로 돌아가 다른 가능한 위치를 탐색합니다. 이렇게 해서 모든 가능한 해결책을 찾을 수 있습니다.
       */
      currentCandidate.pop();
    }
  }
}

// 이 함수는 N-Queens 문제의 모든 해결책을 찾습니다.
function solveNQueens(boardSize) {
  // finalResult는 모든 가능한 퀸의 배치를 저장합니다.
  const finalResult = [];

  // dfs 함수를 호출하여 첫 번째 행에서 시작합니다.
  dfs(boardSize, 0, [], finalResult);

  // 모든 해결책을 반환합니다.
  return finalResult;
}

// 4-Queens 문제의 해결책을 찾습니다.
console.log(solveNQueens(4));
// Expected output: [[1, 3, 0, 2], [2, 0, 3, 1]]
