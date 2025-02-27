document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //console.log(event);
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    //console.log(accountNumber, pinNumber);
    if (accountNumber === "01715983652" && pinNumber === "1234") {
      window.location.href = "main.html";
    } else {
      alert("Account number or Pin is not correct!");
    }
  });
