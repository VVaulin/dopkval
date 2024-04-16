function checkFname() {
    let name = document.getElementById("fname").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(name)) {
        document.getElementById("fname").style.backgroundColor = "lightgreen";
        return true;
    }
    else {
        document.getElementById("fname").style.backgroundColor = "tomato";
        return false;
    }
}

function checkLname() {
    let name = document.getElementById("lname").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(name)) {
        document.getElementById("lname").style.backgroundColor = "lightgreen";
        return true;
    }
    else {
        document.getElementById("lname").style.backgroundColor = "tomato";
        return false;
    }
}

function checkBdate() {
    let date = document.getElementById("bdate").value;
    let regex = /^\d{2}([./-])\d{2}\1\d{4}$/;

    if (regex.test(date)) {
        document.getElementById("bdate").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }
    else {
        document.getElementById("bdate").style.boxShadow = "0 0 10px #FF0000";
        document.getElementById("bdateCheck").innerHTML = "Введите корректную дату";
        return false;
    }
}


function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\+7?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (regex.test(phone)) {
        document.getElementById("phone").style.boxShadow = "0 0 10px #00FF00";
        document.getElementById("phone").style.color = "green";
        return true;
    }
    else {
        document.getElementById("phone").style.boxShadow = "0 0 10px #FF0000";
        document.getElementById("phoneCheck").innerHTML = "Введите корректный номер через +7"
        return false;
    }
}

function checkMail() {
    let mail = document.getElementById("mail").value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

    if (regex.test(mail)) {
        document.getElementById("mail").style.boxShadow = "0 0 10px #00FF00";
        return true;
    }
    else {
        document.getElementById("mail").style.boxShadow = "0 0 10px #FF0000";
        return false;
    }
}


function check(f1, f2, f3, f4, f5) {
    if (f1() && f2() && f3() && f4() && f5() === true) {
        return true;
    }
    else {
        return false;
    }
}


function sendForm() {
    const isFormValid = check(checkFname, checkLname, checkBdate, checkPhone, checkMail);
    if (!isFormValid) {
        const button = document.getElementById("btn1");
        button.disabled = true;
        setTimeout(() => button.disabled = false, 1000);
        return false;
    }
    return true;
}
