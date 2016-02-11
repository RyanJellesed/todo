var taskOne = {name: "do some stuff", date: "02/15/2016"};
var taskTwo = {name: "do some more stuff", date: "02/16/2016"};
var $list = $('#todoTable');
var todo = [taskOne, taskTwo];

todo.forEach(function(todo){
	$list.append('<tr> <td>' + todo.name + '</td><td>' + todo.date + '\
			</td><td><input type="checkbox"></td></tr>'
			);
})


  



function createNewTodoFromForm(event){
	event.preventDefault();

	var taskName=$("#taskName").val();
	var dueDate=$("#dueDate").val();

	if(taskName && dueDate){
	$list.append('<tr> <td>' + taskName + '</td><td>' + dueDate + '\
		</td><td><input type="checkbox"></td></tr>'
		);				

	}
	console.log('it worked!',$inputs);
	return false;

}

$('#submit-button').on('click', createNewTodoFromForm)



