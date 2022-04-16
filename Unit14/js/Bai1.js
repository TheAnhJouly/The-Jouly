$(document).ready(function(){
	$('.add').on('click', function(){
		if ($('.type').val() === '')
			alert('error : Phải đặt tên');
		
		else{
			$('#list').append('<div class = "newWrap"> <div id="icon" class="hide"><i class="fa-solid fa-check"></i></div> <div class = "new">' + $('.type').val() + '</div> <div class = "x"> <i class="fa-solid fa-xmark"></i> </div> </div>' );
			$('.type').val('');
		}
	})
	$('#list').on('click','.x',function(){
		$(this).parent().remove();
	})
	$('#list').on('click','.new',function(){
		$(this).toggleClass('check');
		$(this).siblings('#icon').toggleClass('show');
	})
})	