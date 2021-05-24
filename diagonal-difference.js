/**
 * Function calculates the absolute differences between 2 diagonals in amatrix.
 * In this functionwe can represent a 2d matrix as a 2d array (array of arrays).
 * We can then calculate the size of each diagonal and which values to add to calculate
 * the rtl and ltr diagonals. Finally we return the absolute difference.
 */
const diagonalDiff = (ar) => {
  let rtl = 0;
  let ltr = 0;

  for (let i = 0; i < ar.length; i++) {
    rtl += ar[i][i];
    ltr += ar[i][ar.length - i - 1];
  }

  // return the absolute value of the difference.
  return Math.abs(rtl - ltr);
};
