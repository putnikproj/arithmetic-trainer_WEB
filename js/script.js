function check(){
    var operations = oproper();
    if(operations == '') {
        alert("Вы не выбрали ни одного знака операции");
    } else {
        var startDiv = document.querySelector(".start");
        startDiv.classList.add('hidden');
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
    //  1  2  иттер опер резул ответ странный.отв сч.прав.отв неправ /масс с прав отв\ неправ    массив с операциями
    
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
    amount = document.getElementById("amountrange").value;
    var f = +document.getElementById("fn").value;
    var s = +document.getElementById("sn").value;
    
    //сам тренажер
    while(i != amount){
    i++;
    x = random(f, s); //число напр 2
    y = random(f, s); //число напр 3
    op = operations[random(0, operations.length-1)]; //знак операции напр +
    res = action(op); //результат напр 5
	
	do{ //проверка на правильность ответа
		answerStr = prompt('№'+i+'.   '+x + op + y + " = ?"); //Запрос числа в пер 'странный ответ'
		answer = +answerStr; //в ответ идет числовое значение странного ответа
	}
	while(answerStr == '' || isNaN(answer)) //Не выполняется, пока странный ответ равен null или ответ равен числу
	
    if(answer.toFixed(1) == res.toFixed(1)){ //Подсчет правильных и непр ответов, внесение строк в массивы
        right++;
        rights.push(x + op + y +'='+restofix());
    } else{
        error++;
        errors.push(x + op + y +'='+restofix()+', а не '+answer);
    }
}
    //сам тренажер

	document.querySelector(".r-js").innerHTML = right; //в этот селектор вставить число правильных ответов
    document.querySelector(".e-js").innerHTML = error; //неправильных
	
	var divRights = document.querySelector(".right-variants"); //присвоение переменной правильные варианты и их отчистка
	divRights.innerHTML = "";
	
    for(i = 0; i < rights.length; i++){
		divRights.innerHTML += ('<li><span class="li">' + rights[i] + '</span></li>'); //значения массива в тегах p
	}
	
	var divErrors = document.querySelector(".error-variants");
	divErrors.innerHTML = "";
	
    for(i = 0; i < errors.length; i++){
		divErrors.innerHTML += ('<li><span class="li">' + errors[i] + '</span></li>');
    }
	
    var start = document.querySelector(".start");
    var start_text = document.querySelector(".start-text");
    var start_button = document.querySelector(".start-button");
    start_button.value = 'Пройти еще раз';
    start.innerHTML = '<p class="start-text">Чтобы пройти тренажер еще раз, нажмите на эту кнопку:<span class="button-margin-right"></span><input class="start-button" type="button" value="Пройти еще раз" OnClick="check();"></p>'
    start.classList.remove('hidden');
}