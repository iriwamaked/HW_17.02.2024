document.addEventListener("DOMContentLoaded", () => {
  const divTask1 = document.createElement("div");
  divTask1.setAttribute("id", "divtask1");
  divTask1.style.backgroundColor = "#FAF2ED";
  divTask1.style.margin = "1rem";
  divTask1.style.padding = "1rem";
  divTask1.style.textAlign = "center";
  document.body.appendChild(divTask1);

  const label = document.createElement("label");
  label.innerText = "Enter your name (name can't contain digits";
  label.style.display = "block";
  label.style.marginBottom = "1rem";
  label.setAttribute("for", "task1");
  document.getElementById("divtask1").appendChild(label);

  const input = document.createElement("input");
  input.placeholder = "Brendan Eich";
  input.setAttribute("type", "text");
  input.setAttribute("name", "task1");
  input.setAttribute("id", "task1");
  input.style.padding = "3px";
  document.getElementById("divtask1").appendChild(input);

  input.onchange = function (event) {
    const inputValue = event.target.value;
    const filtered = filter(inputValue);
    input.value = filtered;
  };
});

function filter(input) {
  //\d в регулярном выражении означает любую цифру.
  //g является флагом глобального поиска, что означает, что замена будет для всех совпадений в строке, а не только для первого.
  //выражение / \d / g находит все цифры в строке и заменяет их на пустую строку
  return input.replace(/\d/g, "");
}
