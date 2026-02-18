const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const states = svgDoc.querySelectorAll("g.state path");

  states.forEach(state => {
    const code = state.classList[0].toUpperCase();

    state.addEventListener("mouseover", () => {
      info.textContent = `State: ${stateNames[code] || code}`;
      state.classList.add("hover");
    });

    state.addEventListener("mouseout", () => {
      info.textContent = "Hover or click a state";
      state.classList.remove("hover");
    });

    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = `You clicked ${stateNames[code] || code}`;
    });
  });
});
