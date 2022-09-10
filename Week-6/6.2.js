const spiralordermatrix = (arr) => {
    let i,
      row = 0,
      col = 0,
      result = [],
      rowlen = arr.length,
      collen = arr[0].length;
  
    while (row < rowlen && col < collen) {
      for (i = col; i < collen; ++i) {
        result.push(arr[row][i]);
      }
      row++;
  
      for (i = row; i < rowlen; ++i) {
        result.push(arr[i][collen - 1]);
      }
      collen--;
  
      if (row < rowlen) {
        for (i = collen - 1; i >= col; --i) {
          result.push(arr[rowlen - 1][i]);
        }
        rowlen--;
      }
  
      if (col < collen) {
        for (i = rowlen - 1; i >= row; --i) {
          result.push(arr[i][col]);
        }
        col++;
      }
    }
    return result;
  };
  
  try {
    let input1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let output1 = spiralordermatrix(input1);
    console.log(output1);
  } catch (e) {
    console.error(e);
  }