
function add() {
    var first = parseFloat(document.getElementById("first").value);
  
    if (first == "" || isNaN(first)) {
      alert("Please enter valid first number");
      return false;
    }
  
    var second = parseFloat(document.getElementById("second").value);
  
    if (second == "" || isNaN(second)) {
      alert("Please enter valid second number");
      return false;
    }
  
    var result = parseFloat(first) + parseFloat(second);
    document.getElementById("result").value = result;
    //document.getElementById("recentHistory").value = result;
    document.getElementById("recentHistory").value = (`${first} + ${second} = ${result}`);
  }
  
  function sub() {
    var first = parseFloat(document.getElementById("first").value);
  
    if (first == "" || isNaN(first)) {
      alert("Please enter valid first number");
      return false;
    }
  
    var second = parseFloat(document.getElementById("second").value);
  
    if (second == "" || isNaN(second)) {
      alert("Please enter valid second number");
      return false;
    }
    
    var result = parseFloat(first) - parseFloat(second);
    document.getElementById("result").value = result;
    //document.getElementById("recentHistory").value = result;
    document.getElementById("recentHistory").value = (`${first} - ${second} = ${result}`);
  }
  
  function mul() {
    var first = parseFloat(document.getElementById("first").value);
  
    if (first == "" || isNaN(first)) {
      alert("Please enter valid first number");
      return false;
    }
  
    var second = parseFloat(document.getElementById("second").value);
  
    if (second == "" || isNaN(second)) {
      alert("Please enter valid second number");
      return false;
    }
    
    var result = parseFloat(first) * parseFloat(second);
    document.getElementById("result").value = result;
    //document.getElementById("recentHistory").value = result;
    document.getElementById("recentHistory").value = (`${first} * ${second} = ${result}`);
  }
  
  function div() {
    var first = parseFloat(document.getElementById("first").value);
  
    if (first == "" || isNaN(first)) {
      alert("Please enter valid first number");
      return false;
    }
  
    var second = parseFloat(document.getElementById("second").value);
  
    if (second == "" || isNaN(second)) {
      alert("Please enter valid second number");
      return false;
    }
    
    var result = parseFloat(first) / parseFloat(second);
    document.getElementById("result").value = result;
    //document.getElementById("recentHistory").value = result;
    document.getElementById("recentHistory").value = (`${first} / ${second} = ${result}`);
  }
  
  function clearValues() {
    var clear = "";
  
    document.getElementById("first").value = clear;
    document.getElementById("second").value = clear;
    document.getElementById("result").value = clear;
  }
  