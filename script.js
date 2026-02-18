// Get DOM elements
const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

// Full state name dictionary
const stateNames = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  DC: "District of Columbia"
};

// Wait for SVG to load
mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const svg = svgDoc.querySelector("svg");

  // Inject CSS directly into the SVG
  const style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = `
    path {
      fill: #dddddd;
      stroke: #ffffff;
      stroke-width: 1;
      pointer-events: all;
      cursor: pointer;
    }
    path.hover {
      fill: #6aaed6;
    }
    path.active {
      fill: #1f4e79;
    }
  `;
  svg.appendChild(style);

  // Select all state paths
  const states = svgDoc.querySelectorAll("path[class]");

  states.forEach(state => {
    const stateCode = state.classList[0].toUpperCase();

    state.addEventListener("mouseenter", () => {
      state.classList.add("hover");
      info.textContent = stateNames[stateCode] || stateCode;
    });

    state.addEventListener("mouseleave", () => {
      state.classList.remove("hover");
      info.textContent = "Hover or click a state";
    });

    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = "You clicked " + (stateNames[stateCode] || stateCode);
    });
  });
});
