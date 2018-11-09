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
  for (let i = 0; i < codes.length - 1; i++) {
    document.body.addEventListener('keydown', function(event) {
      const key = event.key;

      if (key === codes[index]) {
        index++;

        if (index === codes.length) {
          alert('Hurray!');

          index = 0;
        }
      } else {
        index = 0;
      }
    });
  }
}
