document.addEventListener('DOMContentLoaded', function () {
    var btn2 = document.getElementById("generate");
    var sum = document.getElementById("sum");
    var roll = document.getElementById("roll");
    var box = "box";
    var Dice = /** @class */ (function () {
        function Dice() {
            var _this = this;
            this.div = document.createElement("div");
            this.value = document.createTextNode((Math.floor((Math.random() * 6) + 1)).toString());
            this.div.appendChild(this.value);
            this.div.className = "square";
            this.div.id = box;
            document.body.appendChild(this.div);
            this.div.addEventListener("click", function () {
                _this.div.remove();
            });
        }
        ;
        return Dice;
    }());
    ;
    btn2.addEventListener("click", function () {
        new Dice();
    });
    sum.addEventListener("click", function () {
        var diceArr = document.querySelectorAll(".square");
        var sum = 0;
        diceArr.forEach(function (die) {
            sum = sum + parseInt(die.innerText);
        });
        alert(sum);
    });
    roll.addEventListener("click", function () {
        var diceArr = document.querySelectorAll(".square");
        diceArr.forEach(function (die) {
            die.innerText = Math.floor((Math.random() * 6) + 1);
        });
    });
});
