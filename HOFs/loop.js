function loop(initial, validator, update, bodyFunction ) {
    for (let value = initial; validator(value); value = update(value)) {
      bodyFunction(value);
    }
  }
  
  loop(5, n => n <= 10, n => n + 1, console.log);