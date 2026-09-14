// Mímica web — mejora progresiva (la página funciona sin JS).
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
