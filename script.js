let numbers = [4, 5, 1, 8, 9, 2];

function bubbleSort(list) {
  let i = 0;
  let swap = false;
  function sort() {
    swap = false;
    for (let i = 0; i < numbers.length; i++) {
      let temp1 = list[i];
      let temp2 = list[i + 1];
      if(temp2 < temp1) {
        list[i] = temp2;
        list[i + 1] = temp1;
        swap = true;
      }
    }
    if (swap) {
      sort();
    }
  }
  sort();
  return list;
}

console.log(bubbleSort(numbers));
