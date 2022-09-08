const sortarray = (arr, N) => {
    let low = 0;
    let high = N - 1;
    let mid = 0;
    let temp = 0;
  
    while (mid <= high) {
      if (arr[mid] == 0) {
        temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        low++;
        mid++;
      } else if (arr[mid] == 1) {
        mid++;
      } else {
        temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;
        high--;
      }
    }
  
    return arr;
  };
  
  try {
    let input1 = [0, 2, 1, 2, 0];
    let output1 = sortarray(input1, 5);
    console.log(output1);
  
    let input2 = [0, 1, 0];
    let output2 = sortarray(input2, 3);
    console.log(output2);
  } catch (e) {
    console.error(e);
  }