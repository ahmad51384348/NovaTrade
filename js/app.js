
const prices = {
  btc: 118000,
  eth: 3000,
  bnb: 700,
  sol: 165
};

function randomChange(value, amount) {
  return value + Math.floor(Math.random() * amount * 2 - amount);
}

function updatePrice(id, value) {
  const element = document.getElementById(id);

  if (!element) return;

  element.textContent = "$" + value.toLocaleString();

  element.style.transform = "scale(1.1)";
  element.style.color = "#00d084";

  setTimeout(() => {
    element.style.transform = "scale(1)";
    element.style.color = "";
  }, 300);
}

setInterval(() => {

  prices.btc = randomChange(prices.btc, 120);
  prices.eth = randomChange(prices.eth, 15);
  prices.bnb = randomChange(prices.bnb, 5);
  prices.sol = randomChange(prices.sol, 3);

  updatePrice("btc", prices.btc);
  updatePrice("eth", prices.eth);
  updatePrice("bnb", prices.bnb);
  updatePrice("sol", prices.sol);

}, 2000);
