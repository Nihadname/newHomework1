let FirstInput = document.getElementById("first");
let SecondInput = document.getElementById("second");
let ButtonForMultiplacation = document.getElementById("vurma");
let ButtonForDivision = document.getElementById("bolme");
let ButtonForAddition = document.getElementById("toplama");
let ButtonForSubstraction = document.getElementById("cixma");
let resultOfThecode = document.querySelector("#result");

ButtonForMultiplacation.addEventListener("click", function () {
    let value = parseInt(FirstInput.value);
    let value2 = parseInt(SecondInput.value)
    if (value && value2) {
        let result = value *= value2
        resultOfThecode.value = result;
    } else {
        resultOfThecode.value = "Please enter valid numbers.";
    }
});
ButtonForDivision.addEventListener("click", function () {
    let value = parseInt(FirstInput.value);
    let value2 = parseInt(SecondInput.value)
    if (value && value2) {
        let result = value /= value2
        resultOfThecode.value = result;
    } else {
        resultOfThecode.value = "Please enter valid numbers.";
    }
});
ButtonForAddition.addEventListener("click", function () {
    let value = parseInt(FirstInput.value);
    let value2 = parseInt(SecondInput.value)
    if (value && value2) {
        let result = value += value2
        resultOfThecode.value = result;
    } else {
        resultOfThecode.value = "Please enter valid numbers.";
    }
});
ButtonForSubstraction.addEventListener("click", function () {
    let value = parseInt(FirstInput.value);
    let value2 = parseInt(SecondInput.value)
    if (value && value2) {
        let result = value -= value2
        resultOfThecode.value = result;
    } else {
        resultOfThecode.value = "Please enter valid numbers.";
    }
});


