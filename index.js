const buttons = document.querySelectorAll('.button');
const result = document.getElementById('result');

let string = "";
const arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === '=') {
            string = eval(string);
            result.value = string;

        } else if (e.target.value === "AC") {
            string = "";
            result.value = string;
        }
        else if(e.target.value==="C"){
            string=string.substring(0,string.length-1);
            
            result.value=string;

        }
        else {
            string += e.target.value;
            result.value = string;
        }
    })

})

