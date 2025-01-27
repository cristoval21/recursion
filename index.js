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

function mergeSort(arr) {
  const length = arr.length;

  if (length <= 1) return arr;
  else {
    const leftHalf = Math.floor(length / 2);

    const left = mergeSort(arr.slice(0, leftHalf));
    const right = mergeSort(arr.slice(leftHalf, length));

    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    result.push(...left.slice(i, left.length), ...right.slice(j, right.length));
    return result;
  }
}
