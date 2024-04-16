function buyNow() {
    // Get form values
    var productName = document.getElementById("productName").value;
    var price = getPrice(productName);
    var quantity = parseInt(document.getElementById("quantity").value);
  
    // Calculate total cost
    var totalCost = price * quantity;
  
    // Display alert with total cost
    alert("The total cost for " + quantity + " " + productName + " is $" + totalCost.toFixed(2));
  }
  
  function getPrice(productName) {
    switch (productName) {
      case "Cappuccino":
        return 45;
      case "Americano":
        return 50;
      case "Espresso":
        return 35;
      case "Macchiato":
        return 45; 
      case "Mocha":
        return 45;
      case "Coffee Latte":
        return 50;
      case "Piccolo Latte":
        return 35;  
      case "Ristretto":
        return 45; 
      case "Affogato":
        return 35;        
      default:
        return 0;
    }
  }