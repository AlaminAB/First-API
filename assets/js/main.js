
// https://randomuser.me/api/
let url='https://randomuser.me/api/';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      check(this.responseText)
  }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
function genarate(){
	let url='https://randomuser.me/api/';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      check(this.responseText)
  }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function check(data){
let formate=JSON.parse(data);
document.getElementById("name").innerHTML=formate.results[0].name.first;
document.getElementById("gender").innerHTML=formate.results[0].gender;
document.getElementById("city").innerHTML=formate.results[0].location.city;
document.getElementById("email").innerHTML=formate.results[0].email;
document.getElementById("photo").src=formate.results[0].picture.large;
console.log(formate)
}

document.getElementById("genaret").addEventListener("click",function(){
genarate();
})