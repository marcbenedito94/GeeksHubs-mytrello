var lists = 1000;
var tasks = 0;
var inputsTasks = 100;
var linkAddTask = 10000;
var idInputTasks = 100000;
var idEditLinks = 1000000;

var contentLists = [];
var contentList = '';
var contentTask = '';
//var idContenedor = '';

var valueInputTask = '';
var valueInputList = '';

var idLists = [];
var idTasks = [];
var idInputsTasks = [];

function addList () {
    valueInputList = document.getElementById('input').value;
    
    if (('' !== valueInputList) && (null !== valueInputList)) {
        if (idLists.length === 0) {
            contentList = '<div id="' + lists + '" class="list"><strong>' + valueInputList + '</strong><a href="#" class="btnDeleteList" onclick="deleteList(' + lists + ')"><img class="imgs" src="./img/papelera.png"></a><br/><br/>\n'
            + '<div class="list"><input id="' + inputsTasks + '" type="text" class="inputTask" placeholder="Add task"><a id="' + linkAddTask + '" href="#" class="btnAddTask" onclick="addTask()"><img class="imgs" src="./img/anadir_tarea.png"></a></div></div>';
            contentLists.push(contentList);
        } else if (idLists.length > 0) {
            contentList = '<div id="' + lists + '" class="list"><strong>' + valueInputList + '</strong><a href="#" class="btnDeleteList" onclick="deleteList(' + lists + ')"><img class="imgs" src="./img/papelera.png"></a><br/><br/>\n'
            + '<div class="list"><input type="text" class="inputTask" placeholder="Add task"><a id="' + linkAddTask + '" class="btnAddTask" onclick="addTask()"><img class="imgs" src="./img/anadir_tarea.png"></a></div></div>';
        }

        document.getElementById('section').innerHTML += contentList;
        idLists.push(lists);
        lists ++;
        linkAddTask ++;
        inputsTasks ++;

        document.getElementById('input').value = '';
    } else if (('' === valueInputList) || (null === valueInputList)) {
        return;
    }
}

// function addContentList () {
//     $(document).ready(function(){
//         $("section").click(function(){
//             $(contentList).insertAfter("div");
//         });
//     });
// }

function addTask () {
    $(document).ready(function(e){
        $('body').on('click', '#section div div a' , function(){
            var idListToAppendTask = document.getElementById($(this).attr('id')).parentNode.parentNode.id;
            var textOfTask = document.getElementById($(this).attr('id')).parentNode.firstChild.value;
            //console.log(textOfTask);
            if (('' !== textOfTask) && (null !== textOfTask)) {
                contentTask = '<div id="' + tasks + '" class="task"><input id="' + idInputTasks + '" type="text" class="textOfTasks" value="' + textOfTask + '" disabled><a href="#" class="btnDeleteList" onclick="deleteTask('+tasks+')"><img class="imgs" src="./img/papelera.png"></a>\n'
                + '</div>';
                $('#' + idListToAppendTask).append(contentTask);
                document.getElementById($(this).attr('id')).parentNode.firstChild.value = '';
                tasks ++;
                idInputTasks ++;
                idEditLinks ++;
                e.stopPropagation();
            } else if (('' === textOfTask) || (null === textOfTask)) {
                return;
            }
            //alert(tasks);
            //idTasks.push(tasks);
            
            //console.log($(this).attr('id'));
        });
    });
}

function deleteTask (tasks) {
    $(document).ready(function(){
        //console.log("Entra ->"+tasks);
        var element = '#'+tasks;
        $(element).remove();
        for (var i = 0; i < idTasks.length; i ++) {
            if (tasks === idTasks[i]) {
                idTasks.remove(tasks);
                tasks --;
                console.log(tasks);
                return;
            }
        }

        //console.log(idTasks);
      //  $('body').on('click' ,this, function(e){
            //e.stopPropagation();
       // });
    });
}

function deleteList (lists) {
    $(document).ready(function(){
        //$('body').on('click', '#section div a' , function(){
        var element = '#'+lists;
        $(element).remove();
        //});
    });
}