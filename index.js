document.querySelector("#addbtn").addEventListener("click", function(){
    loadnotes();
})

const note = document.querySelector(".main");
function loadnotes(finaltitle="", finaltext="") {
    const createNote = document.createElement("div");
    createNote.className = "note";
    createNote.innerHTML = `<div id="btn">
    <i id="save" class="fas fa-save"></i>
    <i id="del" class="fa-solid fa-trash-can"></i>
    </div>
    <div class="All">
    <textarea name="title" id="title" placeholder="Note...">${finaltitle}</textarea>
    <hr />
    <textarea name="text" id="text" placeholder="Note...">${finaltext}</textarea>
    </div>`;

    createNote.querySelector('#del').addEventListener('click',function(){
        createNote.remove();
        saveNote();
    })

    createNote.querySelector('#save').addEventListener('click',function(){
        saveNote();
    })
    
    note.appendChild(createNote);
    saveNote();
}

function saveNote () {
    const title = document.querySelectorAll("#title");
    const text = document.querySelectorAll("#text");
    const savetitle = [];
    const savetext = [];
    title.forEach((note) =>{
        savetitle.push(note.value);
    })
    text.forEach((note) => {
        savetext.push(note.value);
    });

    localStorage.setItem("title",JSON.stringify(savetitle));
    localStorage.setItem("text",JSON.stringify(savetext));
}

(function () {
    const finaltitle = JSON.parse(localStorage.getItem("title"));
    const finaltext = JSON.parse(localStorage.getItem("text"));
    finaltitle.forEach((finaltitle)=> {
        finaltext.forEach((finaltext) => {
            loadnotes(finaltitle, finaltext);
        });
    })
})()
