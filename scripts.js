const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
//const zerodDivider = document.querySelector("divider");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const decRemovedResult = Math.trunc(dividend / divider); // went to mdn docs and learned that  Math.trunc can remove just the decimal without rounding

  const conDividend = Number(dividend);
  const conDivider = Number(divider);

  if (isNaN(conDividend) || isNaN(conDivider)) {
    console.error("Something critical went wrong. Please reload the page");
    result.innerText = "Something critical went wrong. Please reload the page";
    window.location.href = "error.html";
    return;

    //throw new Error("Invalid input: Not a number");
  }

  if (!dividend) {
    return (result.innerText =
      "Division not performed. Both values are required in inputs. Try again."); // After the fact I learned that || but the truth is , I really dont understand it
  }

  if (!divider) {
    return (result.innerText =
      "Division not performed. Both values are required in inputs. Try again.");
  }

  // if ((!divider, dividend == /["0-9"],["0,1"]/)) {
  //   return console.error(
  //   "“Something critical went wrong. Please reload the page"
  //   );
  //}

  //if (zerodDivider === "0") {
  //return (result.innerText =
  // "Division not performed. Invalid number provided. Try again");
  //}
  if (conDivider === 0) {
    console.error("Division not performed. Invalid number provided.");
    return (result.innerText =
      "Division not performed. Invalid number provided. Try again.");
  }

  result.innerText = decRemovedResult;
  result;
});
