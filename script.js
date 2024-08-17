const add = document.querySelector('.add');
let ul = document.getElementById('list');

/*EVENT THAT CALLS NEWADD() WHEN PRESSING "ENTER"*/
let i = parseInt(localStorage.getItem('i')) || 1;

add.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        newadd();
    }
});

/*FUNCTION THAT CREATES LISTS AND STORES IN LOCALSTORAGE AND UPDATE WITHIN THE UL*/
function newadd() {
    if (i <= 30) {
        let li = `<li id="inputsList">${add.value}</li>`;
        add.value = '';

        localStorage.setItem('item' + i, li);
        
        i++;
        localStorage.setItem('i', i);

        ul.insertAdjacentHTML('beforeend', li);
    } else {
        console.log("Limite de 30 itens atingido.");
    }
}

/*LOAD ALL ITEMS FROM LOCALSTORAGE AND DISPLAY ALL LI*/
document.addEventListener('DOMContentLoaded', function() {
    for (let j = 1; j < i; j++) {
        let savedItem = localStorage.getItem('item' + j);
        if (savedItem) {
            ul.insertAdjacentHTML('beforeend', savedItem);
        }
    }
});
