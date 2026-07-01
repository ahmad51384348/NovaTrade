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
  element.style.color = "#00d084";

  setTimeout(() => {
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

let widget;

function changeChart(symbol) {
  if (typeof TradingView === "undefined") {
    console.error("TradingView لم يتم تحميله");
    return;
  }

  document.getElementById("tv_chart_container").innerHTML = "";

  widget = new TradingView.widget({
    container_id: "tv_chart_container",
    width: "100%",
    height: 500,
    symbol: symbol,
    interval: "30",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "ar",
    toolbar_bg: "#0b0e11",
    enable_publishing: false,
    hide_top_toolbar: false,
    allow_symbol_change: true
  });
}

window.onload = function () {
  changeChart("BINANCE:BTCUSDT");
};
