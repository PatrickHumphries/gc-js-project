"use strict";
{
  const budgetTotalDisplay = document.getElementById("totalBudget");
  const budgetRemainderDisplay = document.getElementById("remaining");
  let nav = document.getElementById("nav");
  let newWeek = document.getElementById("newWeek");

  let billSum = 0;
  let foodSum = 0;
  let clothingSum = 0;
  let entertainmentSum = 0;

  newWeek.addEventListener("click", (event) => {
    nav.style.display = "none";
    let totalBudget = Number(document.getElementById("budgetAmount").value);
    budgetTotalDisplay.innerText = `$${totalBudget}`;
    budgetRemainderDisplay.innerText = `$${totalBudget.toFixed(2)}`;
    // event.preventDefault();
    let remainderVar = totalBudget;

    // value of inputs
    const budgetInput = document.getElementById("subtractBtn");

    budgetInput.addEventListener("click", (event) => {
    //   event.preventDefault();

      let itemName = document.getElementById("itemInput").value;
      let itemCost = Number(document.getElementById("itemCost").value);
      let itemCategory = document.getElementById("categories").value;

      remainderVar -= itemCost;
      budgetRemainderDisplay.innerText = `$${remainderVar.toFixed(2)}`;

      const billList = document.getElementById("billList");
      const foodList = document.getElementById("foodList");
      const clothingList = document.getElementById("clothingList");
      const entertainmentList = document.getElementById("entertainmentList");

      let listItem = document.createElement("li");
      listItem.innerText = `${itemName}: $${itemCost.toFixed(2)}`;

      if (itemCategory === "bills") {
        billList.appendChild(listItem);
        let billsTotal = document.getElementById("billTotal");

        billSum += Number(itemCost);
        billsTotal.innerText = `Weekly total: $${billSum.toFixed(2)}`;
        updateChart();
      } else if (itemCategory === "food") {
        foodList.appendChild(listItem);
        let foodTotal = document.getElementById("foodTotal");

        foodSum += Number(itemCost);
        foodTotal.innerText = `Weekly total: $${foodSum.toFixed(2)}`;
        updateChart();
      } else if (itemCategory === "clothing") {
        clothingList.appendChild(listItem);
        let clothingTotal = document.getElementById("clothingTotal");

        clothingSum += Number(itemCost);
        clothingTotal.innerText = `Weekly total: $${clothingSum.toFixed(2)}`;
        updateChart();
      } else if (itemCategory === "entertainment") {
        entertainmentList.appendChild(listItem);
        let entertainmentTotal = document.getElementById("entertainmentTotal");

        entertainmentSum += Number(itemCost);
        entertainmentTotal.innerText = `Weekly total: $${entertainmentSum.toFixed(
          2
        )}`;
        updateChart();
      }

      if (remainderVar < 0) {
        alert("Warning! You have overspent your budget!");
        budgetRemainderDisplay.style.color = "red";
      }
    });
  });

  function updateChart() {
    var updateValues = [billSum, foodSum, clothingSum, entertainmentSum];
    budgetChart.data.datasets[0].data = updateValues;
    budgetChart.update();
  }

  var pieChart = document.getElementById("budgetPieCanvas");
  var budgetChart = new Chart(pieChart, {
    type: "doughnut",
    data: {
      labels: ["Bills", "Food", "Clothing", "Entertainment"],
      datasets: [
        {
          label: "Weekly Spending",
          data: [0, 0, 0, 0],
          backgroundColor: ["red", "blue", "white", "purple"],
        },
      ],
    },
  });

  let navBtn = document.getElementById("accessNav");
  navBtn.addEventListener("click", function (e) {
    if (document.getElementById("nav").style.display === "none") {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
    e.preventDefault();
  });
}
