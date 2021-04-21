"use strict";
{
  let totalBudget = p1rompt("What is your weekly budget?");
  const budgetTotalDisplay = document.getElementById("totalBudget");
  budgetTotalDisplay.innerText = `$${totalBudget}`;
  const budgetRemainderDisplay = document.getElementById("remaining");
  // budget remaining display, need var still for
  let remainderVar = totalBudget;
  budgetRemainderDisplay.innerText = `$${remainderVar}`;

  // value of inputs
  const budgetInput = document.getElementById("subtractBtn");

  let billSum = 0;
  let foodSum = 0;
  let clothingSum = 0;
  let entertainmentSum = 0;

  budgetInput.addEventListener("click", (event) => {
    event.preventDefault();

    let itemName = document.getElementById("itemInput").value;
    let itemCost = document.getElementById("itemCost").value;
    let itemCategory = document.getElementById("categories").value;

    remainderVar -= itemCost;
    budgetRemainderDisplay.innerText = `$${remainderVar}`;

    const billList = document.getElementById("billList");
    const foodList = document.getElementById("foodList");
    const clothingList = document.getElementById("clothingList");
    const entertainmentList = document.getElementById("entertainmentList");

    let listItem = document.createElement("li");
    listItem.innerText = `${itemName}: $${itemCost}`;

    if (itemCategory === "bills") {
      billList.appendChild(listItem);
      let billsTotal = document.getElementById("billTotal");

      billSum += Number(itemCost);
      billsTotal.innerText = `Weekly total: $${billSum}`;
    } else if (itemCategory === "food") {
      foodList.appendChild(listItem);
      let foodTotal = document.getElementById("foodTotal");

      foodSum += Number(itemCost);
      foodTotal.innerText = `Weekly total: $${foodSum}`;
    } else if (itemCategory === "clothing") {
      clothingList.appendChild(listItem);
      let clothingTotal = document.getElementById("clothingTotal");

      clothingSum += Number(itemCost);
      clothingTotal.innerText = `Weekly total: $${clothingSum}`;
    } else if (itemCategory === "entertainment") {
      entertainmentList.appendChild(listItem);
      let entertainmentTotal = document.getElementById("entertainmentTotal");

      entertainmentSum += Number(itemCost);
      entertainmentTotal.innerText = `Weekly total: $${entertainmentSum}`;
    }

    if (remainderVar < 0) {
        alert("Warning! You have overspent your budget!");
        budgetRemainderDisplay.style.color = "red";
    }
  });

  
}