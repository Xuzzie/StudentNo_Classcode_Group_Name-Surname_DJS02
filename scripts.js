const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
  const decRemovedResult = Math.trunc(dividend / divider); // went to mdn docs and learned that  Math.trunc can remove just the decimal without rounding
  result.innerText = truncatedResult;
  result;
});
