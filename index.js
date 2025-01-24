function fibs(number) {
  const arr = [0, 1];

  if (number <= 1) return arr[0];
  else if (number === 2) return arr;
  else {
    for (let i = 2; i < number; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }

  return arr;
}

function fibsRec(number) {
  const arr = [0, 1];

  if (number <= 1) return arr[0];
  else if (number === 2) return arr;
  else {
    const temp = fibsRec(number - 1);
    temp.push(temp[temp.length - 2] + temp[temp.length - 1]);
    return temp;
  }
}
