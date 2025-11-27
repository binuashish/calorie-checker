const foodData = {
    apple: 52,
    banana: 89,
    rice: 130,
    chicken: 239,
    pizza: 266,
    burger: 295,
    egg: 78,
    milk: 42,
    bread: 80
  };
  
  function checkCalories() {
    const food = document.getElementById("foodInput").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");
  
    if (food === "") {
      resultDiv.innerText = "Please enter a food name.";
      return;
    }
  
    if (foodData[food]) {
      resultDiv.innerText = ` Great! ${food} has approximately ${foodData[food]} calories.`;
    } else {
      resultDiv.innerText = "Sorry, I don't have data for that food item.";
    }
  }
  