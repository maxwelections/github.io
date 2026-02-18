const info = document.getElementById("info");
const mapObject = document.getElementById("us-map");

/* 🔹 Custom text for each state */
const stateText = {
  AL: "Alabama – Heart of Dixie",
  AK: "Alaska – The Last Frontier",
  AZ: "Arizona – Grand Canyon State",
  AR: "Arkansas – Natural State",
  CA: "California – Golden State",
  CO: "Colorado – Rocky Mountain State",
  CT: "Connecticut – Constitution State",
  DE: "Delaware – First State",
  FL: "Florida – Sunshine State",
  GA: "Georgia – Peach State",
  HI: "Hawaii – Aloha State",
  ID: "Idaho – Gem State",
  IL: "Illinois – Prairie State",
  IN: "Indiana – Hoosier State",
  IA: "Iowa – Hawkeye State",
  KS: "Kansas – Sunflower State",
  KY: "Kentucky – Bluegrass State",
  LA: "Louisiana – Pelican State",
  ME: "Maine – Pine Tree State",
  MD: "Maryland – Old Line State",
  MA: "Massachusetts – Bay State",
  MI: "Michigan – Great Lakes State",
  MN: "Minnesota – North Star State",
  MS: "Mississippi – Magnolia State",
  MO: "Missouri – Show-Me State",
  MT: "Montana – Treasure State",
  NE: "Nebraska – Cornhusker State",
  NV: "Nevada – Silver State",
  NH: "New Hampshire – Granite State",
  NJ: "New Jersey – Garden State",
  NM: "New Mexico – Land of Enchantment",
  NY: "New York – Empire State",
  NC: "North Carolina – Tar Heel State",
  ND: "North Dakota – Peace Garden State",
  OH: "Ohio – Buckeye State",
  OK: "Oklahoma – Sooner State",
  OR: "Oregon – Beaver State",
  PA: "Pennsylvania – Keystone State",
  RI: "Rhode Island – Ocean State",
  SC: "South Carolina – Palmetto State",
  SD: "South Dakota – Mount Rushmore State",
  TN: "Tennessee – Volunteer State",
  TX: "Texas – Lone Star State",
  UT: "Utah – Beehive State",
  VT: "Vermont – Green Mountain State",
  VA: "Virginia – Old Dominion",
  WA: "Washington – Evergreen State",
  WV: "West Virginia – Mountain State",
  WI: "Wisconsin – Badger State",
  WY: "Wyoming – Equality State",
  DC: "District of Columbia – Nation's Capital"
};

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

const categoryColors = {
  1: "#d3d3d3",
  2: "#a6cee3",
  3: "#1f78b4"
};

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const svg = svgDoc.querySelector("svg");

  /* 🔹 Inject SVG-scoped CSS */
  const style = svgDoc.createElementNS(
    "http://www.w3.org/2000/svg",
    "style"
  );

  style.textContent = `
    path[data-state] {
      fill: #d3d3d3;
      stroke: #ffffff;
      stroke-width: 1;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    path[data-state].hover {
      fill: #4a90e2;
    }

    path[data-state].active {
      fill: #e24a4a;
    }
  `;

  svg.prepend(style);

  const states = svgDoc.querySelectorAll("path[data-state]");

  states.forEach(state => {
    const code = state.dataset.state;

    state.addEventListener("mouseenter", () => {
      state.classList.add("hover");
      info.textContent = stateText[code] || code;
    });

    state.addEventListener("mouseleave", () => {
      state.classList.remove("hover");
      info.textContent = "Hover or click a state";
    });

    state.addEventListener("click", () => {
      states.forEach(s => s.classList.remove("active"));
      state.classList.add("active");
      info.textContent = stateText[code] || code;
    });
  });
});
