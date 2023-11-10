
let first_number = ""
let second_number = ""
// let result = 0

let start = true
let post_equal = false

let op = ""
let n_op = 0

let displayEl = document.getElementById("display")


function calculate(n1,n2){
    let res = 0
    if (op=="+"){
        res = n1 + n2
    }
    else if (op=="-"){
        res = n1-n2
    }
    else if (op=="x"){
        res = n1*n2
    }
    else if (op=="/"){
        res = n1/n2
    }
    return res
}


function set_operation (operation){
    if (n_op==0){
        n_op++;
    }
    else {
        if (!post_equal){
            first_number = calculate(Number(first_number), Number(second_number))
        }
        second_number = ""
        post_equal = false
    }
    
    op = operation
    
    // display operator on screen
    displayEl.textContent += (" " + op + " ")

}


function insert_number(num) {
    if (start){
        displayEl.textContent = ""
        start = false
    }

    if (n_op!=0){
        // display num on screen
        displayEl.textContent += num

        second_number += num
    }
    else {
        first_number += num
        // display num on screen
        displayEl.textContent += num
    }
}

function display_result(){
    first_number = calculate(Number(first_number), Number(second_number))
    post_equal = true
    displayEl.textContent = first_number
}


function reset() {
    displayEl.textContent = "0"
    start = true
    n_op = 0
    first_number = ""
    second_number = ""
    post_equal = false
}