const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

const stateNames = {
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

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;

  if (!svgDoc) {
    console.error("SVG did not load");
    return;
  }

  const states = svgDoc.querySelectorAll("path[data-state]");

  states.forEach(state => {
    const code = state.dataset.state;

    state.addEventListener("mouseenter", () => {
      state.classList.add("hover");
      info.textContent = stateNames[code] || code;
    });

    state.addEventListener("mouseleave", () => {
      state.classList.remove("hover");
      info.textContent = "Hover or click a state";
    });

    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = "You clicked " + (stateNames[code] || code);
    });
  });
});
