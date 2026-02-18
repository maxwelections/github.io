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
  AL: 1, AK: 1, AZ: 1, AR: 1,
  CA: 1, CO: 1, CT: 1, DE: 1,
  FL: 2, GA: 2, HI: 2, ID: 1,
  IL: 1, IN: 1, IA: 1, KS: 1,
  KY: 1, LA: 1, ME: 1, MD: 1,
  MA: 1, MI: 1, MN: 1, MS: 1,
  MO: 1, MT: 1, NE: 1, NV: 1,
  NH: 1, NJ: 1, NM: 2, NY: 1,
  NC: 1, ND: 1, OH: 1, OK: 2,
  OR: 1, PA: 1, RI: 1, SC: 1,
  SD: 1, TN: 1, TX: 1, UT: 1,
  VT: 1, VA: 1, WA: 2, WV: 1,
  WI: 1, WY: 1, DC: 1
};

// Colors for each category
const categoryColors = {
  1: "#BF1F1F",
  2: "#EBB531",
  3: "#F5EE27",
  4: "#E3FFD1",
  5: "#42EB00"
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
