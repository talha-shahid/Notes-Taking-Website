console.log("Welcome");
showNotes();
//if user adds a note, add it to the LocalStorage

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let title = localStorage.getItem('title');
    let notes = localStorage.getItem('notes');

    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    titleObj.push(addTitle.value);
    localStorage.setItem("title", JSON.stringify(titleObj));
    addTitle.value = "";

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})


//showNotes function

function showNotes() {
    let title = localStorage.getItem('title');
    let notes = localStorage.getItem('notes');

    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = " ";
    notesObj.forEach(function(element, index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${titleObj[index]}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0 && titleObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML='Nothing to show';
    }

}

//Deleting a Note
function deleteNote(index){
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem("title");

    if (title == null) {
        notesObj = [];
    }
    else {
        titleObj = JSON.parse(title);
    }

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    titleObj.splice(index, 1);
    notesObj.splice(index, 1);
    localStorage.setItem("title", JSON.stringify(titleObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}