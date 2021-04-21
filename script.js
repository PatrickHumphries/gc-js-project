"use strict";
{
//   let totalBudget = prompt("What is your weekly budget?");


const budgetTotalDisplay = document.getElementById("totalBudget");
const budgetRemainderDisplay = document.getElementById("remaining");
let newWeek = document.getElementById("newWeek");
let remainderVar = totalBudget; 

newWeek.addEventListener('click', (event) => {
    let totalBudget = document.getElementById("budgetAmount").value;
    budgetTotalDisplay.innerText = `$${totalBudget}`;
    budgetRemainderDisplay.innerText = `$${remainderVar}`;
    remainderVar -= itemCost;
})

  
  
  

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

  //might not be best practices for getting nav to appear
  let navBtn = document.getElementById("accessNav");
  let nav = document.getElementById("nav");

  navBtn.addEventListener("click", function (e) {
    if (document.getElementById("nav").style.display === "none") {
      document.getElementById("nav").style.display = "flex";
    } else {
      document.getElementById("nav").style.display = "none";
    }
    e.preventDefault();
  });
}
