console.log("welcome to the notes app!!!");
showNotes();
//favoriteNote();
// If user add Notes show it to localstorage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addtitle")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobje = {
        title : addtitle.value,
        text : addtxt.value
    }
    notesobj.push(myobje);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value ="";
    showNotes();
});

// function to  show elements in local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
             <div class="card-body">
             <h6 class ="card-content">Note ${index + 1}</h6>
             <h5 class="card-title">${element.title}</h5>
             <p class="card-text"> ${element.text}</p>
             <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-success">Delete Note</button>
             
         </div>
     </div>`;

    });
    let noteselement = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteselement.innerHTML = html;
    }
    else {
        noteselement.innerHTML = `nothing to show! use a add note section!!`;
    }

}
// function for delete
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
// for searching functionality
let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {

    let inputvalue = search.value.toLowerCase();
    console.log("input event fired");
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        if (cardtext.includes(inputvalue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
// edit note functionality
/*function editnote(index){
    let notes = localStorage.getItem("notes");
    if(addtitle.value!=="" || addtxt.value !== "")
    {
        return alert("you are trying to editing the note");
    }
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.findIndex((element,index) => {
        addtxt.value = element.text;
        addtitle.value= element.title;
    });
    console.log("hiiiiiii");
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}*/
