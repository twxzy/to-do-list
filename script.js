const add = document.querySelector('.add');
let ul = document.getElementById('list');


/*EVENT THAT CALLS NEWADD() WHEN PRESSING "ENTER"*/
let i = parseInt(localStorage.getItem('i')) || 0;

add.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        event.preventDefault();
        newadd();
    }
});

/*FUNCTION THAT CREATES LISTS AND STORES IN LOCALSTORAGE AND UPDATE WITHIN THE UL*/
function newadd() {
    if (i <= 30) {
        i++;
        let li = `<li id="inputsList"><div>${add.value}</div><div><i onclick="test(${i})"  id="trashed" class="bi trash bi-trash3"></i></div></li>`;
        add.value = '';

        localStorage.setItem('item' + i, li);
        
        localStorage.setItem('i', i);

        ul.insertAdjacentHTML('beforeend', li);
    } else {
        console.log("Limite de 30 itens atingido.");
    }
}

/*TASK REMOVER*/
function test(a){
    localStorage.removeItem('item' + a)
    document.getElementById('inputsList').remove()
    console.log(a)

    let ind = localStorage.getItem('i')
    ind -= 1
    localStorage.setItem('i', ind)
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
