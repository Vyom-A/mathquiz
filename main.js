var player1_name ;
var player2_name;

function set_item () {
player1_name = document.getElementById("player1_login_input").value;
localStorage.setItem("Player 1 Name",player1_name);

player2_name = document.getElementById("player2_login_input").value;
localStorage.setItem("Player 2 Name",player2_name);

window.location = "quiz_page.html";
console.log("navigated on quiz pag.html");
}