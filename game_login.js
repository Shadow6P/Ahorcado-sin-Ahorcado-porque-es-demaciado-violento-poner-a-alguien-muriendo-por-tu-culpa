function addUser(){
Jugador_1=document.getElementById("player1_name_input").value;
Jugador_2=document.getElementById("player2_name_input").value;

localStorage.setItem("Jugador_1", Jugador_1);
localStorage.setItem("Jugador_2", Jugador_2);
window.location="Juego.html";


}