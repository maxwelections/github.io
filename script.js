const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const states = svgDoc.querySelectorAll("path");

  states.forEach(state => {
    state.addEventListener("mouseover", () => {
      info.textContent = `State: ${state.id}`;
    });

    state.addEventListener("mouseout", () => {
      info.textContent = "Hover or click a state";
    });

    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = `You clicked ${state.id}`;
    });
  });
});
