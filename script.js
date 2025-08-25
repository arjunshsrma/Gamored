function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  showNotification(`${name} has been added to your cart.`);
}

function showNotification(message) {
  const notif = document.createElement("div");
  notif.className = "toast";
  notif.innerText = message;
  document.body.appendChild(notif);

  // Trigger animation
  setTimeout(() => {
    notif.classList.add("show");
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notif.classList.remove("show");
    setTimeout(() => notif.remove(), 500);
  }, 3000);
}
