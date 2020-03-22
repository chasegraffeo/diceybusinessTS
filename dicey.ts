document.addEventListener('DOMContentLoaded', function() {
    let btn2 = document.getElementById(`generate`);
    let sum = document.getElementById(`sum`);
    let roll = document.getElementById(`roll`);
    let box = `box`;
    

    class Dice {
        constructor() {
            this.div = document.createElement(`div`)! HTML;
            this.value = document.createTextNode(Math.floor((Math.random() * 6) + 1));
            this.div.appendChild(this.value);
            this.div.className = `square`
            this.div.id = box;
            document.body.appendChild(this.div);
            this.div.addEventListener(`click`, function () {
                this.div.remove()
            }.bind(this));

        };
    };

    btn2.addEventListener(`click`, function () {
        new Dice()

    });
    sum.addEventListener(`click`, function () {
        let diceArr = document.querySelectorAll(`.square`);
        let sum = 0;
        diceArr.forEach(die => {
            sum = sum + parseInt(die.innerText);
        });
        alert(sum);
    });

    roll.addEventListener(`click`, function () {
        let diceArr = document.querySelectorAll(`.square`);
        diceArr.forEach(die => {
            die.innerText = Math.floor((Math.random() * 6) + 1);
        })
    });



})