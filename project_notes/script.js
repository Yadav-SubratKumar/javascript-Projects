const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main_div");

const saveNotes = () => {
  const notes = document.querySelectorAll(".note_box textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }

};

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note_box");
  note.innerHTML = `
    <div class="tool">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;

  note.querySelector(".fa-trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });

  main.appendChild(note);
};

addBtn.addEventListener("click", function () {
  addNote();
});

(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  if (lsnotes === null) {
    addNote();
  } else {
    lsnotes.forEach((lsnotes) => {
      addNote(lsnotes);
    });
  }
})();
