var fullJustify = function (words, maxWidth) {
  let res = [];
  let curr = [];
  let curr_length = 0;

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;
    let totalLength = curr_length + curr.length + wordLength;

    // If adding the current word exceeds maxWidth, justify the current line
    if (totalLength > maxWidth) {
      let line = "";
      let spacesToAdd = maxWidth - curr_length;
      let n_spaces = curr.length - 1;

      if (n_spaces === 0) {
        // Single-word line, left-justify
        line = curr[0] + " ".repeat(spacesToAdd);
      } else {
        let spacePerGap = Math.floor(spacesToAdd / n_spaces);
        let extraSpaces = spacesToAdd % n_spaces;

        for (let j = 0; j < curr.length; j++) {
          line += curr[j];
          if (j < n_spaces) {
            // Add spaces after each word
            line += " ".repeat(spacePerGap + (extraSpaces > 0 ? 1 : 0));
            extraSpaces--;
          }
        }
      }

      res.push(line);
      curr = [];
      curr_length = 0;
    }

    // Add current word to the current line
    curr.push(words[i]);
    curr_length += wordLength;
  }

  // Handle the last line (left-justified)
  if (curr.length > 0) {
    let lastLine = curr.join(" ");
    lastLine += " ".repeat(maxWidth - lastLine.length);
    res.push(lastLine);
  }

  return res;
};
