
$(function(){
	
	/*$("div.touch").on("tap",function(){
	  alert("you tapped me");
	});
	
	$("div.touch").on("taphold",function(){
	  alert("you tapped and held me");
	});
	*/
	
	$("div.touch").on("swipeleft",function(){
	  //alert("no");
	  
	  //if you swipeLEFT, add class no = TURNS RED
	  //if has class yes, remove yes
	  if( $(this).hasClass("yes") ){
		  $(this).removeClass("yes");
	  }

	  //add class no
	  $(this).addClass("no");
	});
	
	$("div.touch").on("swiperight",function(){
	  //alert("yes");
	  //if swipeRIGHT, add class yes = TURNS GREEN
	  //if has class no, remove no
	  if( $(this).hasClass("no") ){
		  $(this).removeClass("no");
	  }
	  //add class yes	
	 	$(this).addClass("yes");
	});

		
});