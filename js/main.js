rulesBtn = document.querySelector(".rules-btn");
darkFilter = document.querySelector(".dark-filter");
rulesBox = document.querySelector(".rules-box");
closeRulesBtn = document.querySelector(".close-rules");
handBoxes = document.querySelectorAll(".hand-box");
pickHandContainer = document.querySelector(".pick-hand");
let userHand = "";

rulesBtn.addEventListener("click", toggleRules);
closeRulesBtn.addEventListener("click", toggleRules);
darkFilter.addEventListener("click", toggleRules);

function toggleRules() {
  darkFilter.classList.toggle("hidden");
  rulesBox.classList.toggle("hidden");
}

handBoxes.forEach((ele) => {
  ele.addEventListener("click", () => {
    pickHandContainer.classList.toggle("collapse");
    if (ele.classList.contains("paper-box")) userHand = "p";
    else if (ele.classList.contains("scissors-box")) userHand = "s";
    else userHand = "r";
  });
});
