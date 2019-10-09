
function createTodo(){
    var text = $("#txtTodo").val();
    console.log(text);
    $("#txtTodo").val("");

    var li = "<li>" + text + "</li>";
    console.log(li);

    $("#pendingList").append(li);

    $("#txtTodo").focus();
}

function init(){
    console.log("Init of ToDo app");
    
    $("#btnSave").click(createTodo);
}

window.onload = init;