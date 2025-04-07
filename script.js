function updateClock() {
  const now = new Date();

  const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
  const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  const time = now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });

  document.getElementById('date').innerHTML = `<span>${weekday},</span> ${date}`;
  document.getElementById('time').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
