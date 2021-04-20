"use strict";
{
  let totalBudget = prompt("What is your weekly budget?")
  const budgetTotalDisplay = document.getElementById("totalBudget");
  budgetTotalDisplay.innerText = `$${totalBudget}`;
  const budgetRemainderDisplay = document.getElementById("remaining");
  // budget remaining display, need var still for
  let remainderVar = totalBudget
  budgetRemainderDisplay.innerText = `$${remainderVar}`;
    
  // value of inputs
  const budgetInput = document.getElementById("subtractBtn");

  budgetInput.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("button is clicked")

      let itemName = document.getElementById("itemInput").value;
      let itemCost = document.getElementById("itemCost").value;
      let itemCategory = document.getElementById("categories").value;
      
<<<<<<< Updated upstream
      remainderVar -= itemCost
      console.log(remainderVar)
      budgetRemainderDisplay.innerText = `$${remainderVar}`;
=======
      remainderVar -= itemCost;
>>>>>>> Stashed changes
  })
}
