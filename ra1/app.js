// SOLUCIONS (MVP)
const CORRECT_ANSWER = "DHCP-LEASE";
const CORRECT_KEY = "RA1-ALU-DEMO";

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();

  if (ans === CORRECT_ANSWER) {
    document.getElementById("msg1").innerText = "✔ Resposta correcta";
    document.getElementById("step2").classList.remove("hidden");
  } else {
    document.getElementById("msg1").innerText = "✘ Incorrecte";
  }
}

function checkKey() {
  const key = document.getElementById("key").value.trim();

  if (key === CORRECT_KEY) {
    document.getElementById("msg2").innerText = "✔ Accés concedit";
    document.getElementById("download").classList.remove("hidden");
  } else {
    document.getElementById("msg2").innerText = "✘ Clau incorrecta";
  }
}