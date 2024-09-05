const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const decRemovedResult = Math.trunc(dividend / divider); // went to mdn docs and learned that  Math.trunc can remove just the decimal without rounding
  result.innerText = decRemovedResult;
  result;
});

if (!dividend) {
  return (result.innerText =
    "Division not performed. Both values are required in inputs. Try again.");
}

if (!divider) {
  return (result.innerText =
    "Division not performed. Both values are required in inputs. Try again.");
}
