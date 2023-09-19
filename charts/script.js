// bar graph
const data = [
  { label: "Label 1", value: 80, text: "Text 1" },
  { label: "Label 2", value: 120, text: "Text 2" },
  { label: "Label 3", value: 60, text: "Text 3" },
  { label: "Label 4", value: 90, text: "Text 4" },
  { label: "Label 5", value: 150, text: "Text 5" },
  { label: "Label 6", value: 70, text: "Text 6" },
  { label: "Label 7", value: 110, text: "Text 7" },
];

const barChart = document.getElementById("bar-chart");

data.forEach((item) => {
  const barContainer = document.createElement("div");
  barContainer.className = "inner-container";

  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = `${item.value}px`;

  const value = document.createElement("div");
  value.className = "bar-value";
  value.textContent = item.value;

  const text = document.createElement("div");
  text.className = "bar-text";
  text.textContent = item.text;

  bar.appendChild(value);
  barContainer.appendChild(bar);
  barContainer.appendChild(text);

  barChart.appendChild(barContainer);
});

// stacked column chart

const data2 = [
  { year: "2019", men: 80, women: 70 },
  { year: "2020", men: 85, women: 75 },
  { year: "2021", men: 90, women: 80 },
  { year: "2022", men: 95, women: 85 },
  { year: "2023", men: 100, women: 90 },
];

const verticalChart = document.getElementById("vertical-chart");

data2.forEach((item) => {
  const verticalColumnGroup = document.createElement("div");
  verticalColumnGroup.className = "inner-container";

  // const verticalColumnGroup = document.createElement("div");
  // verticalColumnGroup.className = "vertical-column-group";

  const verticalColumnMen = document.createElement("div");
  verticalColumnMen.className = "vertical-column-men";
  verticalColumnMen.style.height = `${item.men}px`;

  const verticalColumnWomen = document.createElement("div");
  verticalColumnWomen.className = "vertical-column-women";
  verticalColumnWomen.style.height = `${item.women}px`;

  const label = document.createElement("div");
  label.className = "vertical-column-label";
  label.textContent = item.year;

  verticalColumnGroup.appendChild(verticalColumnMen);
  verticalColumnGroup.appendChild(verticalColumnWomen);
  verticalColumnGroup.appendChild(label);
  verticalChart.appendChild(verticalColumnGroup);
});

// Horizontal bar graph
const bars = document.querySelectorAll(".bar2");

// Sample data values (adjust as needed)
const dataValues = [80, 60, 40, 20];

// Function to set the width of each bar based on data values
function setBarWidths() {
  bars.forEach((bar, index) => {
    bar.style.width = `${dataValues[index]}%`;
  });
}

// Call the function to initialize the graph
setBarWidths();
