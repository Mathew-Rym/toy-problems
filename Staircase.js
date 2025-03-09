function steps(n) {
    for (let i = 1; i <= n; i++) {
      console.log("#".repeat(i));
    }
  }
  

  const levels = parseInt(prompt("Enter number of steps:"), 10);
  steps(levels);
  