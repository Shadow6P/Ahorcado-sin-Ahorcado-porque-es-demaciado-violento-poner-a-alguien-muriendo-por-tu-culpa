Jugador_1 = localStorage.getItem("Jugador_1");
Jugador_2 = localStorage.getItem("Jugador_2");

Puntos_Jugador_1 = 0;
Puntos_Jugador_2 = 0;

document.getElementById("Jugador_1").innerHTML = Jugador_1 + " : ";
document.getElementById("Jugador_2").innerHTML = Jugador_2 + " : ";

document.getElementById("Puntos_Jugador_1").innerHTML = Puntos_Jugador_1;
document.getElementById("Puntos_Jugador_2").innerHTML = Puntos_Jugador_2;

document.getElementById("pregunta").innerHTML = "Turno para preguntar - " + Jugador_1;
document.getElementById("respuesta").innerHTML = "Turno para responder - " + Jugador_2;

function send() {
    get_word = document.getElementById("palabra").value;
    palabra = get_word.toLowerCase();
    console.log("palabra en minusculas = " + palabra);

    charAt1 = palabra.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(palabra.length / 2);
    charAt2 = palabra.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = palabra.length - 1;
    charAt3 = palabra.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1 = palabra.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("salida").innerHTML = row;
    document.getElementById("palabra").value = "";

}

var question_turn = "Jugador_1";
var answer_turn = "Jugador_2";


function check() {
	get_answer = document.getElementById("palabra").value;
	respuesta = get_answer.toLowerCase();
	console.log("respuesta en minusculas - " + respuesta);
	if (respuesta == palabra) {
		if (answer_turn == "Jugador_1") {
			Puntos_Jugador_1 = Puntos_Jugador_1 + 2;
			document.getElementById("Puntos_Jugador_1").innerHTML = Puntos_Jugador_1;
		} else {
			Puntos_Jugador_2 = Puntos_Jugador_2 + 2;
			document.getElementById("Puntos_Jugador_2").innerHTML = Puntos_Jugador_2;
		}
	}
	if (question_turn == "Jugador_1") {
		question_turn = "Jugador_2";
		document.getElementById("pregunta").innerHTML = "Turno para preguntar - " + Jugador_1;
	} else {
		question_turn = "Jugador_1"
		document.getElementById("pregunta").innerHTML = "Turno para preguntar - " + Jugador_1;
	}

	if (answer_turn == "Jugador_1") {
		answer_turn = "Jugador_2";
		document.getElementById("respuesta").innerHTML = "Turno para responder - " + Jugador_2;
	} else {
		answer_turn = "Jugador_1"
		document.getElementById("respuesta").innerHTML = "Turno para responder - " + Jugador_2;
	}

	document.getElementById("palabra").innerHTML = "";}