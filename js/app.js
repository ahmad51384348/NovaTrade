// NovaTrade Demo

const prices = {
    btc: 118000,
    eth: 3000,
    bnb: 700,
    sol: 165
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updatePrices() {

    prices.btc += random(-150,150);
    prices.eth += random(-10,10);
    prices.bnb += random(-5,5);
    prices.sol += random(-3,3);

    document.getElementById("btc").innerText =
        "$" + prices.btc.toLocaleString();

    document.getElementById("eth").innerText =
        "$" + prices.eth.toLocaleString();

    document.getElementById("bnb").innerText =
        "$" + prices.bnb.toLocaleString();

    document.getElementById("sol").innerText =
        "$" + prices.sol.toLocaleString();
}

updatePrices();

setInterval(updatePrices,2000);
