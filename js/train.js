function check(){
    var operations = oproper();
    if(operations == '') {
        alert("Вы не выбрали ни одного знака операции");
    } else {
        var startDiv = document.querySelector(".start");
        startDiv.style.display = "none";
        setTimeout( training , 100);
    }
}

function oproper() {
    var operations = [];
    if (document.getElementById("plus").checked){
        operations.push("+");
    }
    if (document.getElementById("minus").checked){
        operations.push("-");
    }
    if (document.getElementById("chastnoe").checked){
        operations.push("/")
    }
    if (document.getElementById("umnozhemie").checked){
        operations.push("×");
    }
    return operations;
}

function training(){
    var x, y, i = 0, op, res, answer, answerStr, right = 0, error = 0, rights = [], errors = [], amount
    
    //функции
    
    function restofix(){
        if(op == "/"){
            var restofix = res.toFixed(1);
        } else{
            restofix = res;
        }
        return restofix;
    }

    function action(op){
        if(op == "+"){
            res = x+y;
        } else if(op == "-"){
            res = x-y;
        } else if(op == "×"){
            res = x*y;
        } else{
            res = x/y;
        }
        return res;
    }

    function random(min, max){
        var length = max-min+1;
        var rand = Math.floor(Math.random()*length)+min;
        return rand;
    }

    //функции
    var operations = oproper();
    amount = document.getElementById("amount-range-number").value;
    var f = +document.getElementById("first-range-number").value;
    var s = +document.getElementById("second-range-number").value;
    
    //сам тренажер
    while(i != amount){
    i++;
    x = random(f, s);
    y = random(f, s);
    op = operations[random(0, operations.length-1)];
    res = action(op);
    
    //проверка на правильность ответа
	do{
		answerStr = prompt('№'+i+'.   '+x + op + y + " = ?");
		answer = +answerStr;
	}
	while(answerStr == '' || isNaN(answer))
	
    if(answer.toFixed(1) == res.toFixed(1)){
        right++;
        rights.push(x + op + y +'='+restofix());
    } else{
        error++;
        errors.push(x + op + y +'='+restofix()+', а не '+answer);
    }
}
    //сам тренажер

	document.querySelector(".right-answers-count").innerHTML = right;
    document.querySelector(".error-answers-count").innerHTML = error;
	
	var divRights = document.querySelector(".right-variants-list");
	divRights.innerHTML = "";
	
    for(i = 0; i < rights.length; i++){
		divRights.innerHTML += ('<li><span class="normal-text">' + rights[i] + '</span></li>');
	}
	
	var divErrors = document.querySelector(".error-variants-list");
	divErrors.innerHTML = "";
	
    for(i = 0; i < errors.length; i++){
		divErrors.innerHTML += ('<li><span class="normal-text">' + errors[i] + '</span></li>');
    }
	
    var start = document.querySelector(".start");
    var start_text = document.querySelector(".start-text");
    var start_button = document.querySelector(".start-button");
    start.style.animation = "none";
    start_button.value = 'Пройти еще раз';
    start.innerHTML = '<p class="start-text">Чтобы пройти тренажер еще раз, нажмите на эту кнопку:<span class="button-margin-right"></span><input class="start-button" type="button" value="Пройти еще раз" OnClick="check();"></p>'
    start.style.display = "block";
}