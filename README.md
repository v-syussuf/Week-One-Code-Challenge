# Week-One-Code-Challenge

Challenge 1: Student Grade Generator

- The code defines the function studentMarks that takes a grade as input and assigns an appropriate grade.The output should align with the appropriate grade, as displayed below:
 * A - >  79
 * B - 60 to 79 
 * C - 59 to 49 
 * D - 40 to 49 
 * E - <  40
 */
- The function takes a single argument grade, which represents the student's grade. It determines the grade.

- Inside the function, it checks if the grade is within the range of 0 to 100. If the grade is outside this range, it prints nothing. If the grade falls within the valid range, the code proceeds to evaluate the grade.

- For instance, studentMarks(47) is called with grade 47, since 47 falls within the range of grade "D" (40 to 49), so the function prints "D" as the correct grade.


Challenge 2: Speed Detector

- The function speedDetector detects the speed of a car as input. If the speed is less than 70, it should print “Ok”. 

- Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

- speedXtra calculates the diffrence between the actual speed and the speedLimit, while points calculates the number of demerit points the driver would gather basing on how fast they were.


Challenge 3: Net Salary Calculator

- Function netSalaryCalc takes one argument for the pupose of calculating the total net salary of an employee.

- Constants for monthly tax rates and deductions are already provided from this link https://www.aren.co.ke/payroll/taxrates.html
     const monthlyTaxablepay = [
        { minIncome: 0, maxIncome: 24000, rate: 0.1 },
        { minIncome: 24001, maxIncome: 32333, rate: 0.25 },
        { minIncome: 32334, maxIncome: 500000, rate: 0.30 },
        { minIncome: 500001, maxIncome: 800000, rate: 0.325 },
        { minIncome: 800001, maxIncome: Infinity, rate: 0.35 },
      ]
- Go through every tax range to ensure that the provided income falls within the current tax range, calculate the tax amount, if no monthly taxable pay is found, return 0.

- Function salaryAndBenefits is provided for input of basic salary and benefits.

- Afterwhich, Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary by use of the links provided: - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.