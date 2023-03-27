// function to solve a linear equation
function solveLinEquation(a, b, c) {
    if (a === 0) {
      if (b === 0) {
        return c === 0 ? "Infinite solutions" : "No solutions";
      } else {
        return -c / b;
      }
    } else {
      return (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    }
  }
  
  // function to solve a quadratic equation
  function solveQuadEquation(a, b, c) {
    if (a === 0) {
      return solveLinEquation(b, c, 0);
    } else {
      const delta = b**2 - 4*a*c;
      if (delta === 0) {
        return -b / (2*a);
      } else if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2*a);
        const x2 = (-b - Math.sqrt(delta)) / (2*a);
        return { x1, x2 };
      } else {
        const realPart = -b / (2*a);
        const imagPart = Math.sqrt(-delta) / (2*a);
        return { x1: `${realPart} + ${imagPart}i`, x2: `${realPart} - ${imagPart}i` };
      }
    }
  }
  
  console.log(solveLinEquation(2, 4, -6)); 
  console.log(solveLinEquation(0, 4, -6));
  console.log(solveLinEquation(0, 0, -6)); 
  console.log(solveLinEquation(0, 0, 0));
  
  console.log(solveQuadEquation(0, 4, -6)); 
  console.log(solveQuadEquation(1, 4, 4)); 
  console.log(solveQuadEquation(1, -1, -2));
  console.log(solveQuadEquation(1, 7, 12)); 
  console.log(solveQuadEquation(1, 0, -4)); 
  console.log(solveQuadEquation(1, -1, 0)); 
  
