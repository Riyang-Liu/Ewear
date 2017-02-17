// Check Off Specific Todos By Clicking

$("#likebtn").on("click", function(){

	$.get("/like", addimg);
	
	console.log($("img")[0].src);

	var imageURL = $('img')[0].src;
	

	//var newimg ='<img src="https://images.unsplash.com/photo-1465876569813-87279be9ee8d?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=2250&amp;q=80&amp;cs=tinysrgb&amp;crop=" class = "detailsImage">';
	//$("img").html(newimg);
	//$.get("/main", pagedetail);
});

function addimg(result){
		
		console.log("");
		var imageURL = $('img')[0].src;

		result[1].push(imageURL);

		console.log(result);
		
	}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */




