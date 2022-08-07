function inicio() {
  const horas = document.getElementById("hour");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const ampm = document.getElementById("ampm");

  //Calcular hora actual
  var today = new Date();
  var hh = String(today.getHours()).padStart(2, "0");
  var mm = String(today.getMinutes()).padStart(2, "0");
  var ss = String(today.getSeconds()).padStart(2, "0");

  //Se calcula la franja horaria
  if (hh > 12) {
    //entonces es pm
    ampm.innerText = "PM";
    hh = hh - 12;
  } else {
    ampm.innerText = "AM";
  }

  //Se rellena la hora, minutos y segundos
  horas.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;

  setTimeout(() => {
    inicio();
  }, 1000);
}
inicio();
