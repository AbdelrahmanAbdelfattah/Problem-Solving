class NumMatrix {
  constructor(matrix) {
    // create prefix sum array
    this.prefixSum = new Array(matrix.length + 1);
    for (let i = 0; i <= matrix.length; i++) {
      this.prefixSum[i] = new Array(matrix[0].length + 1).fill(0);
    }

    // fill prefix sum array
    for (let i = 1; i < this.prefixSum.length; i++) {
      for (let j = 1; j < this.prefixSum[0].length; j++) {
        this.prefixSum[i][j] =
          matrix[i - 1][j - 1] +
          this.prefixSum[i - 1][j] +
          this.prefixSum[i][j - 1] -
          this.prefixSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    let sum =
      this.prefixSum[row2 + 1][col2 + 1] -
      this.prefixSum[row1][col2 + 1] -
      this.prefixSum[row2 + 1][col1] +
      this.prefixSum[row1][col1];
    return sum;
  }
}