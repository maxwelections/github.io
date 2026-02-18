const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const svg = svgDoc.querySelector("svg");
  const states = svgDoc.querySelectorAll("path[id]");

  // Inject styles into the SVG document
  const style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = `
    path {
      fill: #d3d3d3;
      stroke: #ffffff;
      stroke-width: 1;
      cursor: pointer;
      transition: fill 0.2s ease;
    }
    path:hover {
      fill: #4a90e2;
    }
    path.active {
      fill: #e24a4a;
    }
  `;
  svg.prepend(style);

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
