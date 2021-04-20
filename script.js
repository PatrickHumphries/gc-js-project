"use strict";
{
  let totalBudget = prompt("What is your weekly budget?");
  const budgetTotalDisplay = document.getElementById("totalBudget");
  budgetTotalDisplay.innerText = `$${totalBudget}`;
  const budgetRemainderDisplay = document.getElementById("remaining");
  // budget remaining display, need var still for
  let remainderVar = totalBudget;
  budgetRemainderDisplay.innerText = `$${remainderVar}`;

  // value of inputs
  const budgetInput = document.getElementById("subtractBtn");
  
  let billSum = 0
  
  
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
    listItem.innerText = `${itemName}: $${itemCost}`

    
    if (itemCategory === "bills") {
        billList.appendChild(listItem);
        let billsTotal = document.getElementById("billTotal");
        
        billSum += Number(itemCost)
        console.log(billSum)
        billsTotal.innerText = `Weekly total: $${billSum}`
    }
  });

  if (Number(budgetRemainderDisplay) < 0) {
      alert("You have spent your entire budget!");
      budgetRemainderDisplay.style.color = "red";
  }
}
