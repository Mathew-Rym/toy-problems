function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    
    let tax = 0;
    if (grossSalary <= 24000) tax = grossSalary * 0.1;
    else if (grossSalary <= 32333) tax = grossSalary * 0.25;
    else tax = grossSalary * 0.3;
  
   
    const nhifRates = [
      [5999, 150], [7999, 300], [11999, 400], [14999, 500],
      [19999, 600], [24999, 750], [29999, 850], [34999, 900],
      [39999, 950], [44999, 1000], [49999, 1100], [59999, 1200],
      [69999, 1300], [79999, 1400], [89999, 1500], [99999, 1600],
      [Infinity, 1700],
    ];
    const nhif = nhifRates.find(([limit]) => grossSalary <= limit)[1];
  
    
    const nssf = Math.min(0.06 * grossSalary, 1080);
  
    const netSalary = grossSalary - (tax + nhif + nssf);
    return { grossSalary, tax, nhif, nssf, netSalary };
  }
  
  
  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails);
  