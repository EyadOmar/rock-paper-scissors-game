rulesBtn = document.querySelector(".rules-btn");
darkFilter = document.querySelector(".dark-filter");
rulesBox = document.querySelector(".rules-box");
closeRulesBtn = document.querySelector(".close-rules");

rulesBtn.addEventListener("click", toggleRules);
closeRulesBtn.addEventListener("click", toggleRules);
darkFilter.addEventListener("click", toggleRules);

function toggleRules() {
  darkFilter.classList.toggle("hidden");
  rulesBox.classList.toggle("hidden");
}
