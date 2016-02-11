var taskOne = {name: "do some stuff", date: "02/15/2016"};
var taskTwo = {name: "do some more stuff", date: "02/16/2016"};
var $list = $('#todoTable');
var todo = [taskOne, taskTwo];

todo.forEach(function(todo){
	$list.append('<tr> <td>' + todo.name + '</td><td>' + todo.date + '\
			</td><td><button class="btn btn-primary deleteTodo">done</button></td></tr>'
			)
});

var deleteTodo = function(event){
	event.preventDefault();
	alert("it worked")
	$(event.target).closest('tr').remove();
 }

function createNewTodoFromForm(event){
	event.preventDefault();
	$('.deleteTodo').on('click', deleteTodo)

	var taskName=$("#taskName").val();
	var dueDate=$("#dueDate").val();

	if(taskName && dueDate){
	$list.append('<tr> <td>' + taskName + '</td><td>' + dueDate + '\
			</td><td><button class="btn btn-primary deleteTodo">done</button></td></tr>'
			)			

	}
}	
	

$('#submit-button').on('click', createNewTodoFromForm)
$('.deleteTodo').on('click', deleteTodo)




