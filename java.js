document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".headline-line");
  if (!lines.length) return; // Exit if no lines found

  let current = 0;
  let next = 1;

  lines[current].classList.add("active");

  setInterval(() => {
    lines[current].classList.remove("active");
    lines[current].classList.add("exit");

    lines[next].classList.remove("exit");
    lines[next].classList.add("active");

    setTimeout(() => {
      lines[current].classList.remove("exit");
      current = next;
      next = (next + 1) % lines.length;
    }, 600);
  }, 2500);
});

