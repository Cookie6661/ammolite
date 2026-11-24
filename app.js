if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js')
      .catch(function(error) {
        console.error(error);
      });
  });
}

const connection = document.getElementById('connection');
const dot = document.querySelector('.status-dot');

function updateConnection() {
  if (navigator.onLine) {
    connection.textContent = 'Соединение с интернетом доступно';
    dot.style.background = '#4b8b61';
  } else {
    connection.textContent = 'Офлайн — доступна сохранённая оболочка';
    dot.style.background = '#c8a66a';
  }
}

window.addEventListener('online', updateConnection);
window.addEventListener('offline', updateConnection);

updateConnection();