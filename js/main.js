var lists = 0;
var tasks = 0;
var inputsTasks = 0;

var contentList = '';

var idLists = [];
var idTasks = [];
var idInputsTasks = [];

function addList () {
    var valueInput = document.getElementById('input').value;
    
    if (idLists.length === 0) {
        contentList = '<div id="' + lists + '" class="list">' + valueInput + '<button type="button" class="btnDeleteList" onclick="deleteList()"><img src="../img/papelera.png"></button><br/><br/><input id="' + inputsTasks + '" type="text" placeholder="Add task"><button type="button" class="btnAddTask" onclick="addTask()"><img src="../img/anadir_taera.png"></button></div>';
        idInputsTasks.push('0');
        idLists.push('0');
        lists ++;
        document.getElementById('section').innerHTML = contentList;
    } else if (idLists.length > 0) {
        contentList = '<div id="' + lists + '" class="list">' + valueInput + '<button type="button" onclick="deleteTask()"><img class="btnDeleteTask" src="../img/papelera.png"></button><br/><br/><input type="text" placeholder="Add task"></div>';
        idLists.push(idLists.length + 1);
        node.appendChild(contentList);
    }
}

function addTask () {
    $(document).ready(function(){
        $('body').on('click', function(){
            alert('Hola');
        });
    });
}