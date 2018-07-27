var contentTask = '';
var valueInput = '';
var numbersTasks = [];
var numberTask = 0;

function addTask () {
    valueInput = document.getElementById('input').value;

    if ('' != valueInput) {
        if (numbersTasks.length == 0) {
            contentTask = '<div id="' + numberTask + '" class="task">' + valueInput + '<button type="button" onclick="deleteTask()">del.<img class="btnDeleteTask" src=""/></button>\n'
            + '<input type="text" placeholder="Add task"></div>';
            numbersTasks.push(numberTask);
            numberTask ++;
            document.getElementById('section').innerHTML = contentTask;
        } else if (numbersTasks.length > 0) {
            contentTask = '<div id="' + numberTask + '" class="task">' + valueInput + '<button type="button" onclick="deleteTask()">del.<img class="btnDeleteTask" src=""/></button>\n'
            + '<input type="text" placeholder="Add task"></div>';
            numbersTasks.push(numberTask);
            numberTask ++;
            var section = document.getElementById('section').value;
            section += contentTask;
        }        
    }
    document.getElementById('input').value = '';
}

function deleteTask () {
    getClickedElement();
}

function getClickedElement () {
    $(document).ready(function(){
        $('body').on('click', '#section div', function(){
            numbersTasks.splice($(this).attr('id'), 1);
            var divToDelete = document.getElementById($(this).attr('id'));
            document.getElementById('section').removeChild(divToDelete);
        });
    });
}