const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

// State names for display
const stateText = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas",
  CA: "California", CO: "Colorado", CT: "Connecticut", DE: "Delaware",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho",
  IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas",
  KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia",
  WI: "Wisconsin", WY: "Wyoming", DC: "District of Columbia"
};

// Categories for each state
const stateCategories = {
  AL: 1, AK: 2, AZ: 3, AR: 1,
  CA: 2, CO: 1, CT: 3, DE: 1,
  FL: 2, GA: 3, HI: 1, ID: 2,
  IL: 3, IN: 1, IA: 2, KS: 3,
  KY: 1, LA: 2, ME: 3, MD: 1,
  MA: 2, MI: 3, MN: 1, MS: 2,
  MO: 3, MT: 1, NE: 2, NV: 3,
  NH: 1, NJ: 2, NM: 3, NY: 1,
  NC: 2, ND: 3, OH: 1, OK: 2,
  OR: 3, PA: 1, RI: 2, SC: 3,
  SD: 1, TN: 2, TX: 3, UT: 1,
  VT: 2, VA: 3, WA: 1, WV: 2,
  WI: 3, WY: 1, DC: 2
};

// Colors for each category
const categoryColors = {
  1: "#d3d3d3",
  2: "#a6cee3",
  3: "#1f78b4"
};

// Load the SVG map
mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const svg = svgDoc.querySelector("svg");

  // Inject SVG-scoped CSS for hover and click
  const style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = `
    path[data-state] {
      stroke: #ffffff;
      stroke-width: 1;
      cursor: pointer;
      transition: fill 0.15s ease;
    }
    path[data-state].hover {
      fill: #ffcc00 !important;
    }
    path[data-state].active {
      fill: #e24a4a !important;
    }
  `;
  svg.prepend(style);

  const states = svgDoc.querySelectorAll("path[data-state]");

  states.forEach(state => {
    const code = state.dataset.state;
    const category = stateCategories[code] || 1;

    // Set default fill color based on category
    state.style.fill = categoryColors[category];

    // Hover behavior
    state.addEventListener("mouseenter", () => {
      state.classList.add("hover");
      info.textContent = stateText[code] || code;
    });

    state.addEventListener("mouseleave", () => {
      state.classList.remove("hover");
      info.textContent = "Hover or click a state";
    });

    // Click behavior
    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = "You clicked " + (stateText[code] || code);
    });
  });
});
