function initChallenge(config) {
  const answerInput = document.getElementById('answer');
  const keyInput = document.getElementById('key');
  const msg1 = document.getElementById('msg1');
  const msg2 = document.getElementById('msg2');
  const step2 = document.getElementById('step2');
  const download = document.getElementById('download');
  const downloadLink = document.getElementById('download-link');

  if (downloadLink) {
    downloadLink.href = config.badge;
  }

  window.checkAnswer = function () {
    const answer = answerInput.value.trim();
    if (answer === config.answer) {
      msg1.textContent = '✔ Resposta correcta';
      msg1.className = 'success';
      step2.classList.remove('hidden');
    } else {
      msg1.textContent = '✘ Resposta incorrecta';
      msg1.className = 'error';
    }
  };

  window.checkKey = function () {
    const key = keyInput.value.trim();
    if (key === config.key) {
      msg2.textContent = '✔ Accés concedit';
      msg2.className = 'success';
      download.classList.remove('hidden');
    } else {
      msg2.textContent = '✘ Clau incorrecta';
      msg2.className = 'error';
    }
  };
}
