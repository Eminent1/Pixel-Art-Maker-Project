// Select color input
var gridColor = $('#color-picker').val();



// Select size input
var gridHeight;
var gridWidth;


// When size is submitted by the user, call makeGrid()

$('#size-picker').submit(function (event){

	event.preventDefault();

	$('tr').remove();

	gridHeight = $('#input-height').val();

	gridWidth = $('#input-weight').val();	

	makeGrid();

});

function makeGrid() {

// Your code goes here!	
	
	tbl = $('#pixel-canvas');

	for (r = 1; r <= gridHeight; r++){

		tbl.append('<tr class=table' + r + '></tr>');

		for (c = 1; c <= gridWidth; c++){

			$('.table' + r).append('<td class=cell></td>');
		}

	}


	cellColor();



};



function cellColor(){

	$('.cell').click(function addColor(event){

		gridColor = $('#color-picker').val();
		

		if ($(this).attr('style')){

			$(this).removeAttr('style');

		} else {

			$(this).attr('style', 'background-color:' + gridColor);
		}

	})

}





