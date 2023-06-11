const $ = document.querySelector.bind(document);

const range = $(".range");
const rangeBar = $(".range-bar");

setProcessBar(50);

function setProcessBar(percent) {
  rangeBar.style.width = percent + "%";
  $(".range-bar span").textContent = `${percent}%`;
  $("body").style.backgroundColor = `rgba(0,0,0, ${percent}%)`;
}

function moveProcessBar(e) {
  const width = e.clientX - this.offsetLeft;
  const percent = Math.round((width / this.offsetWidth) * 100);

  if (percent >= 0 && percent <= 100) {
    setProcessBar(percent);
  }
}

range.addEventListener("mousemove", moveProcessBar);
