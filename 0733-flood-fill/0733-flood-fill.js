/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var dfs = function (image, visit, sr, sc, color, base) {
  if (sr >= image.length || sr < 0) return;
  if (sc >= image[0].length || sc < 0) return;

  if (image[sr][sc] != base) return;
  if (visit[sr][sc] === 1) return;
  visit[sr][sc] = 1;
  image[sr][sc] = color;

  dfs(image, visit, sr - 1, sc, color, base);
  dfs(image, visit, sr + 1, sc, color, base);
  dfs(image, visit, sr, sc - 1, color, base);
  dfs(image, visit, sr, sc + 1, color, base);

  return;
};

var floodFill = function (image, sr, sc, color) {
  let visit = new Array(image.length);
  for (let i = 0; i < image.length; i++) {
    visit[i] = new Array(image[0].length).fill(0);
  }
  let base = image[sr][sc];
  dfs(image, visit, sr, sc, color, base);
  return image;
};