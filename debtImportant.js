
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", function () {
      const currentAmount = parseFloat(document.querySelectorAll(".input")[0].value);
      const averageRatio = parseFloat(document.querySelectorAll(".input")[1].value);
      const monthlyPayment = parseFloat(document.querySelectorAll(".input")[2].value);

      let debt = currentAmount;
      let months = 0;
      let totalInterestPaid = 0;

      while (debt > 0) {
          const monthlyInterest = ((averageRatio/100) / 12) * debt;
          console.log(monthlyInterest);
          const amountPaid = monthlyPayment - monthlyInterest;
          if (amountPaid <= 0) {
              alert("Your monthly payment is not sufficient to cover the interest. Please adjust your values.");
              return;
          }
          debt =debt - amountPaid;
          totalInterestPaid =totalInterestPaid + monthlyInterest;
          months++;
      }

      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `It will take ${months} months to repay the debt.<br> total debt $${currentAmount+(Math.ceil(totalInterestPaid))}<br>`;
      resultElement.innerHTML += `Total interest paid: $${Math.ceil(totalInterestPaid)}`;
  });
});

