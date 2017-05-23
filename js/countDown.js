/* Скрипт таймера */
function countDown() {
				var now = new Date();
				var eventDate = new Date(2017, 01, 27);

				var currentTime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("hours").textContent = h;
				document.getElementById("minutes").textContent = m;
				document.getElementById("seconds").textContent = s;

				setTimeout(countDown, 1000);
}