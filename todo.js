	function sayItWorked(event){
		event.preventDefault();


		var $element = $(event.target);
		

		var taskName=$("#taskName").val();
		var dueDate=$("#dueDate").val();

		var $list = $('#todoTable');
		
		if(taskName && dueDate){
		$list.append('<tr> <td>' + taskName + '</td><td>' + dueDate + '\
			</td><td><input type="checkbox"></td></tr>'
			);				

		}
		console.log('it worked!',$inputs);
		return false;

	}

$('#submit-button').on('click', sayItWorked)

