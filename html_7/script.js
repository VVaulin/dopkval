const y = 1 + Math.floor(Math.random() * 10);
let count = 1;

document.getElementById("submit").onclick = function () {

    let x = document.getElementById("numberGuess").value;

    if (count == 6) {
        alert("Попытки закончились! Игра окончена!")
        if (confirm("Хотите сыграть еще раз?")) {
            count = 1
            location.reload()
        }
        else {
            location.reload()
        }


    }


    else if (isNaN(parseInt(x)) || x < 0 || x > 10) {
        alert("Введите ЧИСЛО от 1 до 10!!!")
    }

    else if (parseInt(x).toString().length < x.length) {
        alert(`Введите ЦЕЛОЕ ЧИСЛО от 1 до 10!!!`);
    }

    else if (x == y) {
        alert("Поздравляю, Вы угадали с "
            + count + " раза. Игра окончена! ");
        if (confirm("Хотите сыграть еще раз?")) {
            count = 1
            location.reload()
        }
        else {
            location.reload()
        }
    }

    else if (x > y) {
        count++;
        alert("Загаданное число МЕНЬШЕ указанного");
    }
    else if (x < y) {
        count++;
        alert("Загаданное число БОЛЬШЕ указанного")
    }





}