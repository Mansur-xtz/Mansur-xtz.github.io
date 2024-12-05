// Contador de dias e tempo
const startDate = new Date("2023-12-25T23:07:00"); // Data inicial do relacionamento

function updateTimeCounter() {
  const currentDate = new Date(); // Data atual
  const timeDifference = currentDate - startDate; // Diferença em milissegundos

  // Calcule dias, horas, minutos e segundos
  const days = Math.floor(timeDifference / (1000 * 3600 * 24));
  const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Atualiza os contadores de dias e tempo
  document.getElementById('days-counter').innerText = `${days} Dias juntos!`;
  document.getElementById('time-counter').innerText = `${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o contador de tempo a cada segundo
setInterval(updateTimeCounter, 1000);

// Inicializa o contador ao carregar a página
updateTimeCounter();

// Controle de áudio e play/pause
const audioPlayer = document.getElementById("background-audio");
const playPauseButton = document.getElementById("playPauseButton");
const progressBarFill = document.getElementById("progress-bar-fill");

// Atualiza a barra de progresso conforme a música toca
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime; // Tempo atual da música
  const duration = audioPlayer.duration; // Duração total da música

  if (!isNaN(duration) && duration > 0) {
    // Calcula a porcentagem de progresso e atualiza a barra
    const progressPercentage = (currentTime / duration) * 100;
    progressBarFill.style.width = `${progressPercentage}%`;
  }
});

// Função para alternar entre play e pause
playPauseButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Ícone de pause
  } else {
    audioPlayer.pause();
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Ícone de play
  }
});

// Menu responsivo
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});
