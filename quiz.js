player1_name = localStorage.getItem('player1_name')
player2_name = localStorage.getItem('player2_name')

player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name + " : " + player1_score
document.getElementById("player2_name").innerHTML = player2_name + " : " + player2_score


document.getElementById("player_question").innerHTML = "Question turn : " + player1_name
document.getElementById("player_answer").innerHTML = " Answer turn : " + player2_name

check_opertor = document.getElementById("opertor_names")
function send() {
    num_1 = document.getElementById("num_1").value

    operator = document.getElementById("opertor_names")
    operator_names = ''
    if (operator.value == "+") {
        operator_names = "+"
    } else if (operator.value == "-") {
        operator_names = "-"
    } else if (operator.value == "*") {
        operator_names = "*"
    } else if (operator.value == "/") {
        operator_names = "/"
    }
    num_2 = document.getElementById("num_2").value
    console.log(num_1 + operator_names + num_2)

    document.getElementById("result").innerHTML = "<h3> Que. " + num_1 + operator_names + num_2 + "</h3>" + "<br>" +
        "<span> Ans." + "</span>" + "<input id='answer' placeholder='Enter your answer' >" + "<br>" + "<br>" + "<button onclick='check()' class='btn btn-info' > Check" + "</button"

}

value_1 = Integer.parseInt(num_1)
value_2 =  Integer.parseInt(num_2)
function check(){
    console.log(typeof(num_1))
    console.log(typeof(num_2))
    answer= document.getElementById("answer").value
    if(operator_names=="+"){
       
        result= value_1 + value_2 
        console.log(result+ 'd')
    }else if(operator_names=="-"){
        result= num_1-num_2
        console.log(result)
    }else if(operator_names=="*"){
        result= num_1*num_2
        console.log(result)
    }else if(operator_names=="/"){
        result= num_1/num_2
        console.log(result)
    }
    if(answer==result){
        console.log("right")
    }else {
        console.log("wrong")
    }
}





