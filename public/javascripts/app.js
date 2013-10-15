$(function(){ 

//on submit of testform(form id defined in html), $.post (AJAX) - refers to client side js file.
//once data received - refer to "object" data - if data error (as defined in client side file - missing password or email), return data.error object
//if success - return data.success
$('#testform').submit(function(e){
	e.preventDefault();
	$.post('/signup', $(this).serialize(),function(data){
		if(data.error){
			$('#message').text(data.error)
		}
		if(data.success){
			$('#message').text(data.success)
		}
	})
});

});