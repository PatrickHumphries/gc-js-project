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

    let lowBudgetWarning = document.getElementById("warnings").value;
    let warningNum = Number(lowBudgetWarning);
    let percent = totalBudget * warningNum;
    

    budgetInput.addEventListener("click", (event) => {
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
      function warningBot() {
        if (remainderVar < 0) {
          document.getElementById('zeroPopUp').style.display = 'flex';
          document.getElementById('percentPopUp').style.display = 'none';
          budgetRemainderDisplay.style.color = "red";
          document.getElementById("zeroText").innerText = "Warning! You have overspent your budget!"
        } else if (remainderVar <= percent) {
            document.getElementById('zeroPopUp').style.display = 'none';
            document.getElementById('percentPopUp').style.display = 'flex';
            document.getElementById("percentText").innerText = `Warning! You have ${warningNum * 100}% or less of your budget left!`;
        }
      }
      warningBot();
    });
  });
  // Updates chart
  function updateChart() {
    var updateValues = [billSum, foodSum, clothingSum, entertainmentSum];
/*     var updateLables = [
      "Bills: $ " + billSum,
      "Food: $ " + foodSum,
      "Clothing: $ " + clothingSum,
      "Entertainment: $ " + entertainmentSum,
    ];
    budgetChart.data.labels = updateLables; */
    budgetChart.data.datasets[0].data = updateValues;
    budgetChart.update();
  }
  //chart build and options
  var pieChart = document.getElementById("budgetPieCanvas");
  var budgetChart = new Chart(pieChart, {
    type: "doughnut",
    data: {
      labels: [
        "Bills",
        "Food",
        "Clothing",
        "Entertainment",
      ],
      datasets: [
        {
          label: "Weekly Spending",
          data: [0, 0, 0, 0],
          backgroundColor: [
            "rgb(127, 255, 0,.6)",
            "rgb(105,105,105,.6)",
            "rgb(192,192,192,.6)",
            "rgb(255,255,255,.6)",
          ],
          borderWidth: [0],
          borderColor: ["white"],
          hoverOffset: [7],
          hoverBorderWidth: [2],
          hoverBorderColor: ["black"],
        },
      ],
    },
    //chart options
    options: {
      plugins: {
        tooltip: {
          backgroundColor: ["black"],
          padding: [8],
          displayColors: false,
          bodyFont: {
            size: 14,
          },
        },
        legend: {
          labels: {
            color: "white",
            font: {
              size: 16,
            },
          },
        },
      },
    },
  });
  //end of chart
  let navBtn = document.getElementById("accessNav");
  navBtn.addEventListener("click", function (e) {
    if (document.getElementById("nav").style.display === "none") {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
    e.preventDefault();
  });

  let modeToggleBtn = document.getElementById("modeToggleBtn");
  modeToggleBtn.addEventListener("click", (event) => {
    document.body.classList.toggle("lightTheme");
  });
}
