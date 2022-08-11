function createStack() {
    const items = [];
    return Object.freeze({
      push(value) {
        items.push(value);
      },
      pop() {
        return items.pop();
          
      },
    });
  }
  
  const stack = createStack();
  
  stack.push(10);
  stack.push(5);
  stack.pop();
  stack.items;
