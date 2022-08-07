function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message = `count is ${count}`;
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
  
  /**
   * Output: 
   *  count is 0
   * Reason: 
   *  We have createIncrement function which inturn contains two functions within which are increment() and log(),
   *  and two variables count and message. When we call the increment function, even though the createIncrement function's execution context
   *  is popped out of the stack, the increment function creates a closure of the variables in the createIncrement function. So, in the above code,
   *  we are calling increment function three times, so the count value becomes 3. After that we are calling the log function, where we are logging the message.
   *  Here we logging the message variable. This message variable is initialized when the value of count was 0. And the later change of count value does't change the message string.
   *  Hence, the string that will be printed in the console is: count is 0
   * 
   * */