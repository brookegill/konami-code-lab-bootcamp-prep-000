const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const index = 0;

function init() {
  for (let i = 0; i < codes.length; i++) {
    document.body.addEventListener('keydown', function(event) {
      const key = event.key;

      if (key === codes[i]) {
        i++;

        if (i === codes.length) {
          alert('Hurray!');

          i = 0;
        }
      } else {
        i = 0;
      }
    });
  }
}
