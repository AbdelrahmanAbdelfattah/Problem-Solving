var candy = function (ratings) {
  let cand = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length; i++) {
    if (i == 0) {
      continue;
    }
    if (ratings[i] > ratings[i - 1]) cand[i] = cand[i - 1] + 1;
  }

  console.log(cand);
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i == ratings.length - 1) {
      continue;
    }
    if (ratings[i] > ratings[i + 1]) {
      if (cand[i] > cand[i + 1]) continue;
      cand[i] = cand[i + 1] + 1;
    }
  }

    let res = 0;
    for (let i = 0 ; i < cand.length ;i  ++)
        {
            res+= cand [i];
        }
 return res;
};