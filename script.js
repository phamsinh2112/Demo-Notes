const notes = JSON.parse(localStorage.getItem('notes'));
if(notes) {
    notes.forEach(note => {
        addNewnote(note);
    })
}
const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    addNewnote();
})

function addNewnote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="check">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="main">
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
    `
    document.body.appendChild(note);
    const checkBtn = note.querySelector('.check');
    const deleteBtn = note.querySelector('.delete');
    const notesEl = note.querySelector('.notes');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    textArea.value = text;
    checkBtn.addEventListener('click', () => {
        updateLS();
    })
    deleteBtn.addEventListener('click', () => {
        note.remove();
    })
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}
