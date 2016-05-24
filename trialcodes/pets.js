


var imageCardCreator = function() {
	//div that contains the whole card, we may want to addClass for row/col for spacing purposes
	var pet = $("<div>");
	//image card
	var card= $("<div>").addClass("card-image waves-effect waves-block waves-light");
	//insert image source into line 26 *************************
	var imageTag = $("<img>").addClass("activator").attr("assets/small-dot-stock.jpg");
	$(card).append(imageTag);
	$(pet).append(card);

	//title and link portion of card
	var content = $("<div>").addClass("card-content");
	//add var for pet name here ************************************************************
	var petName = $("<span>").addClass("card-title activator grey-text text-darken-4").text("beau");
	//more info icon -- which will only work if you have the materialize icon css link in your page
	var moreInfo  = $("<i>").addClass("material-icons right").text("more_vert");
	var p = $("<p>");
	//add var for pet link here ************
	var petLink = $("<a>").attr("href='awesome.com");

	//adds icon to span containing name
	$(petName).append(moreInfo);
	//adds link to p tag
	$(p).append(petLink);
	//adds to the content card
	$(content).append(petName);
	$(content).append(p);
	$(pet).append(content);

	//'reveal' portion of the card
	var reveal = $("<div>").addClass("content-reveal");
	//add pet name here *********************************
	var revealTitle = $("<span>").addClass("card-title grey-text text-darken-4").text("beau");
	var closeInfo = $("<i>").addClass("material-icons right").text("close");
	//add pet info paragraph here *****************
	var petInfo = $("<p>").text("awesome dog of awesomeness");

	//adds icon to pet name span
	$(closeInfo).append(petInfo);
	//
	$(revealTitle).append(closeInfo);
	$(reveal).append(revealTitle);

	$(pet).append(reveal);
	console.log("I work");

	//add animal div here
	$(".ANIMAL_DIV").html(pet);


};


imageCardCreator();


var animals = [
	{
		petName: "beau",
		petInfo: "awesomeest dog stuff",
		petLink: "awesome.com",
		image: "assets/small-dot-stock.jpg"
	},
	{
		petName: "olive",
		petInfo: "might be deaf",
		petLink: "boston.com",
		image: "assets/small-dot-stock.jpg"
	}

];