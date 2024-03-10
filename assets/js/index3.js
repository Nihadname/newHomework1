document.addEventListener("DOMContentLoaded", function () {
    let firstInput = document.getElementById("first");
    let secondInput = document.getElementById("second");
    let resultOfTheCode = document.querySelector("#result");

    function calculate(operation) {
        let value1 = parseInt(firstInput.value);
        let value2 = parseInt(secondInput.value);
        let result;

        if (!isNaN(value1) && !isNaN(value2)) {
            switch (operation) {
                case "vurma":
                    result = value1 * value2;
                    break;
                case "bolme":
                    if (value2 == 0) {
                        resultOfTheCode.value="0 bolme olmur";
                        return;
                    }
                    result = value1 / value2;
                    break;
                case "toplama":
                    result = value1 + value2;
                    break;
                case "cixma":
                    result = value1 - value2;
                    break;
                default:
                    result = "Invalid operation";
                    break;
            }
            resultOfTheCode.value = result;
            resultOfTheCode.disable=true;

        } else {
            resultOfTheCode.value = "Please enter valid numbers";
            resultOfTheCode.disable=true;
        }
    }

    document.getElementById("vurma").addEventListener('click', function () { calculate("vurma"); });
    document.getElementById("bolme").addEventListener('click', function () { calculate("bolme"); });
    document.getElementById("toplama").addEventListener('click', function () { calculate("toplama"); });
    document.getElementById("cixma").addEventListener('click', function () { calculate("cixma"); });
});
