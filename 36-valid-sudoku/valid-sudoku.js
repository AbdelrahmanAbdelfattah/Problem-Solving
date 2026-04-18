var isValidSudoku = function (board) {
  // check rows

  for (let i = 0; i < 9; i++) {
    let rows_map = new Map();
    for (let j = 0; j < 9; j++) {
      let cell = board[i][j];
      if (rows_map.has(cell)) return false;

      if (cell != ".") rows_map.set(cell, 1);
    }
  }

  // check cols
  for (let j = 0; j < 9; j++) {
    let cols_map = new Map();
    for (let i = 0; i < 9; i++) {
      let cell = board[i][j];
      if (cols_map.has(cell)) return false;
      if (cell != ".") cols_map.set(cell, 1);
    }
  }

  // check every 3*3 box

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let box_map = new Map();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          let cell = board[i + k][j + l];
          if (box_map.has(cell)) return false;
          if (cell != ".") box_map.set(cell, 1);
        }
      }
    }
  }

  return true;
};
