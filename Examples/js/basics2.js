
angular.module('calculate', [])
  .controller('CalcController', function CalcController() {
    this.qty = " ";
    this.cost = " ";
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 1.06,
      CNY: 0.14
    };

    this.total = function total() {
      return this.convertCurrency(this.qty * this.cost, this.inCurr);
    };
    this.convertCurrency = function convertCurrency(amount, outCurr) {
      return amount * this.usdToForeignRates[outCurr];
    };
    this.pay = function pay() {
      document.getElementById("paymntMsg").style.display = "block";
    };
  });
