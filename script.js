window.onload = function(){ // Когда подгрузится страница, выполнить функцию в скобках
    document.querySelector('.start-button').onclick = function(){ // в докум. найти этот класс и по клику вып. функ
        check();
    }
	document.querySelector('.restart-button').onclick = function(){ // Как и на 2 сточке
        check2();
    }
}

function check(){
    var f = +document.getElementById("fn").value;
    var s = +document.getElementById("sn").value;
    var operations = oproper();
    if (f>s){
        alert("Первое число диапазона должно быть меньше или равно второму!");
    } else if(operations == '') {
        alert("Вы не выбрали ни одного знака операции");
    } else {
        deleting();
        setTimeout( training , 100);
    }
}

function check2(){
    var f = +document.getElementById("fn2").value;
    var s = +document.getElementById("sn2").value;
    var operations = oproper2();
    if (f>s){
        alert("Первое число диапазона должно быть меньше или равно второму!");
    } else if(operations == '') {
        alert("Вы не выбрали ни одного знака операции");
    } else {
        training2();
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
        operations.push("*");
    }
    return operations;
}

function oproper2() {
    var operations = [];
    if (document.getElementById("plus2").checked){
        operations.push("+");
    }
    if (document.getElementById("minus2").checked){
        operations.push("-");
    }
    if (document.getElementById("chastnoe2").checked){
        operations.push("/")
    }
    if (document.getElementById("umnozhemie2").checked){
        operations.push("*");
    }
    return operations;
}

function deleting(){ // Удалить окно с кнопкой и хидер
    var startDiv = document.querySelector(".start");
    startDiv.style.display = "none";
    var footer = document.querySelector("footer");
    footer.style.display = "none";
    var options = document.querySelector(".options");
    options.classList.add('hidden');
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
        } else if(op == "*"){
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
	
	var restart = document.querySelector(".restart");
    restart.classList.remove('hidden'); //удаление класса спрятанно
    var footer = document.querySelector("footer");
    footer.style.display = "block"; //показывание футера
    var options = document.querySelector(".options-2");
    options.classList.remove('hidden');
}

function training2(){
    var x, y, i = 0, op, res, answer, answerStr, right = 0, error = 0, rights = [], errors = [], operations = ['+', '-', '*', '/'], amount
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
        } else if(op == "*"){
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
    
    var operations = oproper2();
    amount = document.getElementById("amountrange2").value;
    var f = +document.getElementById("fn2").value;
    var s = +document.getElementById("sn2").value;
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
	
	var restart = document.querySelector(".restart");
    restart.classList.remove('hidden'); //удаление класса спрятанно
    var footer = document.querySelector("footer");
    footer.style.display = "block"; //показывание футера
    var options = document.querySelector(".options-2");
    options.classList.remove('hidden');
}