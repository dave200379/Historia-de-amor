// Fecha de inicio: 25 de Julio de 2019 a las 7:00 PM
const fechaInicio = new Date('2019-07-25T19:00:00').getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').innerText = dias < 10 ? '0' + dias : dias;
  document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
  document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
  document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
}

// Actualización en tiempo real
setInterval(actualizarContador, 1000);
actualizarContador();

// Control de Play/Pausa de la música MP3
function toggleMusica() {
  const musica = document.getElementById('musicaFondo');
  const btn = document.getElementById('btnMusica');

  if (musica.paused) {
    musica.play();
    btn.innerText = '🔊 Pausar Música';
  } else {
    musica.pause();
    btn.innerText = '🔇 Reproducir Música';
  }
}
