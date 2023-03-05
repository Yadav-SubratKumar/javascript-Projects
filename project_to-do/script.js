const itembox = document.getElementById("box");
const toDo = document.getElementById("To-Do");

itembox.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item = "") => {
if(item == null ){

}else{
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;
  toDo.appendChild(listItem);
  save();
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("done");
    
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
    save();
  });
}
};

const save = () => {
  const lists = document.querySelectorAll("li");
  const data = [];
  lists.forEach((note) => {
    data.push(note.innerText);
  });

  console.log(data);
  if (data.length === 0) {
    localStorage.removeItem("lists");
  } else {
    localStorage.setItem("lists", JSON.stringify(data));
  }
};


(function () {
  const toDo = JSON.parse(localStorage.getItem("lists"));
  if (toDo === null) {
    
  } else {
    toDo.forEach((lsnotes) => {
      addToDo(lsnotes);
    });
  }
})();