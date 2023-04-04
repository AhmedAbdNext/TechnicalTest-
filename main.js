import "./style.css";

import { findBiggestArea, generateHtmlSquare, generateSquare } from "./src/square";

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const width = document.querySelector("#width").value;
  const height = document.querySelector("#height").value;
  const numColors = document.querySelector("#numColors").value;
  const mySquare = generateSquare(width, height, numColors);
  if(mySquare === null) {
    document.querySelector("#app").innerHTML = "";
    document.querySelector("#result").innerHTML = `<p id="phrases"> Please enter valid values</p>`;
  }else {
    const biggestArea = findBiggestArea(mySquare);
    const myHtlmSquare = generateHtmlSquare(mySquare);
    document.querySelector("#app").appendChild(myHtlmSquare);
    
    document.querySelector("#result").innerHTML = `
      <div id="resultBox">
        <p id="phrases"> The Biggest area contains ${biggestArea.size} cells and its color is </p>
        <div style="background:${biggestArea.color}" id="colorBox"  > ${biggestArea.color} </div>
      </div> 
    `;
  }
});