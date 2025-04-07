//your JS code here. If required.
function updateClock() {
  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString(undefined, options);

  const timeStr = now.toLocaleTimeString();

  document.getElementById('date').textContent = dateStr;
  document.getElementById('time').textContent = timeStr;
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);
