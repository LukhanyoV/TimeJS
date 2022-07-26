function currentTime() {
  var date = new Date(); //creating object of Date class
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  var time = hour + " : " + min + " : " + sec;
  document.getElementById("clock").innerText = time; //adding time to the div
  document.title = time.replace(/\s/g, ''); // add time to the title
  var t = setTimeout(function(){ currentTime() }, 1000); //setting timer
}

function updateTime(k) {
  if (k < 10) {
  return "0" + k;
  }
  else {
  return k;
  }
}

currentTime(); //calling currentTime() function to initiate the process