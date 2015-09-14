'use strict';

var button=$('#button');
var count=0;
var endButton=$('#endButton');



function onButtonClick (e){
	count++;
	if (count===1){
		button.html(count+' Like ');
	}
	else {
		button.html(count+' Likes');
	}
}

button.on('click', onButtonClick);//event listener

endButton.on('click', function(){
	count=0;
	button.html('0 Likes');
});

