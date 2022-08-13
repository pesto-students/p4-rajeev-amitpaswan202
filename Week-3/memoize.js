function memoize(fn) {
    const cache = new Map();
    return function (...args) {
      const key = args.toString();
      if (!cache.has(key)) cache.set(key, fn(...args));
      return cache.get(key);
    };
  }
  
  function add(a, b) {
    if (!b) return a;
    return a + b;
  }
  
  const memoizeAdd = memoize(add);
  
  function withTimer(fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
  }
  
  withTimer(() => memoizeAdd(100, 100));
  withTimer(() => memoizeAdd(100,700));
  withTimer(() => memoizeAdd(100, 200));
  withTimer(() => memoizeAdd(100, 100));
