document.addEventListener("DOMContentLoaded", () => {
  const h2Task1=document.createElement("h2");
  h2Task1.innerText="Task1";
  document.body.appendChild(h2Task1);
  
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

  const h2Task2=document.createElement("h2");
  h2Task2.innerText="Task2";
  document.body.appendChild(h2Task2);

  const divTask2 = document.createElement("div");
  divTask2.setAttribute("id", "divTask2");
  divTask2.style.margin = "1rem";
  divTask2.style.padding = "1rem";
  divTask2.style.textAlign = "center";
  document.body.appendChild(divTask2);

  const btn = document.createElement("button");
  btn.innerText = "Open modal";
  btn.style.padding = "0.3rem";
  document.getElementById("divTask2").appendChild(btn);
  btn.addEventListener("click", createModal);

  document.getElementById("second").style.backgroundColor="#FF9600";
  const trafficBnt=document.getElementById("trafficBtn");
  const spans=document.querySelectorAll("#traffic span");
  let currentSpanIndex=1;
  trafficBnt.addEventListener("click", ()=>{
    spans.forEach(span=>{span.style.backgroundColor="#8a8a8a";});
    if(currentSpanIndex===1)
    {
      spans[currentSpanIndex].style.backgroundColor="#FF9600";
    }
    else if (currentSpanIndex===2)
    {
      spans[currentSpanIndex].style.backgroundColor="#6BEC34";
    }
    else
    {
      spans[currentSpanIndex].style.backgroundColor="#EC2929";
    }
    
    currentSpanIndex=(currentSpanIndex+1)%spans.length;
  })

  const lists = document.querySelectorAll("#BooksList li");
  lists.forEach(li => {
    li.addEventListener("click", () => {
        // Сначала сбрасываем цвет всех элементов списка
        lists.forEach(item => {
            item.style.backgroundColor = "#FBF2E9";
        });
        // Затем выделяем выбранный элемент другим цветом
        li.style.backgroundColor = "#F2A07D";
    });
});
 
});

function filter(input) {
  //\d в регулярном выражении означает любую цифру.
  //g является флагом глобального поиска, что означает, что замена будет для всех совпадений в строке, а не только для первого.
  //выражение / \d / g находит все цифры в строке и заменяет их на пустую строку
  //   return input.replace(/\d/g, "");
  let tmp = "";
  for (let i = 0; i < input.length; i++) {
    if (isNaN(parseInt([input[i]]))) {
      tmp += input[i];
    }
  }
  return tmp;
}

function createModal() {
  {
    const overlay = document.createElement("div");
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    document.body.appendChild(overlay);

    const divModal = document.createElement("div");
    divModal.style.backgroundColor = "#E3FFFE";
    divModal.setAttribute("id", "divModal");
    divModal.style.margin = "1rem";
    divModal.style.textAlign = "center";
    divModal.style.position = "absolute";
    divModal.style.top = "30%";
    divModal.style.left = "50%";
    divModal.style.transform = "translate(-50%, -50%)";
    divModal.style.padding = "2rem";
    document.body.appendChild(divModal);

    const modalText = document.createElement("h2");
    modalText.innerText = "Hello from Modal Window!";
    document.getElementById("divModal").appendChild(modalText);

    const btnModal = document.createElement("button");
    btnModal.innerText = "Close";
    btnModal.style.padding = "0.2rem";
    btnModal.style.marginTop = "1rem";
    btnModal.style.width = "90%";
    document.getElementById("divModal").appendChild(btnModal);

    btnModal.addEventListener(
      "click",
      () => (divModal.remove(), overlay.remove())
    );
  }
}

// function closeModal(modal, overlay)
// {
//     modal.remove();
//     overlay.remove();
// }
