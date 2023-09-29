function netSalaryCalc(income){
    // Constants for monthly tax rates and deductions
     const monthlyTaxablepay = [
        { minIncome: 0, maximumIncome: 24000, rate: 0.1 }, { minIncome: 24001, maximumIncome: 32333, rate: 0.25 },
        { minIncome: 32334, maximumIncome: 500000, rate: 0.30 }, { minIncome: 500001, maximumIncome: 800000, rate: 0.325 },
        { minIncome: 800001, maximumIncome: Infinity, rate: 0.35 },
      ]
    // Go through each tax range
      for (const range of monthlyTaxablepay) {
    // Confirm if the income falls within the current tax range
      if (income >= range.minIncome && income <= range.maximumIncome) {
    // Calculate the tax amount for the current range
      return income * range.rate;
      }
    }
    // In case there is no monthly Taxable pay is found, return 0 
      return 0;
  } 
   
    // Function to input basic salary and benefits
    function salaryAndBenefits(basicSalary, benefits) {
    
    // Calculate gross salary
    const grosSalary = basicSalary + benefits;
    return {basicSalary, benefits, grosSalary};
  }
  
    // Call the function with the desired values
    const userInput = salaryAndBenefits(45500, 0);
  
    // Access the calculated values
    const basicSalary = userInput.basicSalary;
    const benefits = userInput.benefits;
    const grosSalary = userInput.grosSalary;
  
    // It outputs basic salary and benefits
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);

    // Calculate your NHIF deductions
    nhifLimit = 1700;
    const NHIF = Math.min(nhifLimit, grosSalary * 0.025);
    console.log(`Your NHIF deductions:${NHIF}`);

    // Calculate NSSF deductions for the employee
    nssfEmployeePercentage = 0.06;
    const nssfEmployee = basicSalary * nssfEmployeePercentage;
    console.log(`Your NSSF deductions:${nssfEmployee}`);

    // Calculate NSSF deductions for the employer
    nssfEmployerPercentage = 0.06;
    const nssfEmployer = basicSalary * nssfEmployerPercentage;
    console.log(`Your Employer's NSSF contribution:${nssfEmployer}`);

    // Calculate taxable income
    const taxableIncome = grosSalary - nhifLimit - nssfEmployeePercentage;
    console.log(`Your taxable income:${taxableIncome}`);

    // Calculate PAYEE
    const payee = netSalaryCalc(taxableIncome);
    console.log(`Your monthly PAYE:${payee}`);

    // Calculate net salary
    const netSalary = grosSalary - payee - nhifLimit - nssfEmployeePercentage; 
    console.log(`Your Net Salary:${netSalary}`);

    
    

   
   
