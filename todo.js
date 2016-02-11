	function sayItWorked(event){
		event.preventDefault();


		var $element = $(event.target);
		var $form = $element.closest("form");
		var $inputs = $form.find("input");

		var taskName=$inputs.first().val();
		var dueDate=$inputs.last().val();

		var $list = $('#todoTable');
		$list.append('<tr> <td>' + taskName + '</td><td>' + dueDate + '\
			</td><td><input type="checkbox"></td></tr>');				


		console.log('it worked!',$inputs);
		return false;

	}

$('#submit-button').on('click', sayItWorked)

