


var imageCardCreator = function() {
	//div that contains the whole card, we may want to addClass for row/col for spacing purposes
	var pet = $("<div>");
	$(pet).addClass("card small active" );
	$(pet).attr("style", "overflow: hidden;")
	//image card
	var card= $("<div>").addClass("card-image waves-effect waves-block waves-light");
	//insert image source into line 26 *************************
	var imageTag = $("<img>").addClass("activator");
	$(imageTag).attr("src", petPic);
	$(imageTag).attr("height", "200");
	$(imageTag).attr("width", "200");
	$(card).append(imageTag);
	$(pet).append(card);

	//title and link portion of card
	var content = $("<div>").addClass("card-content");
	//add var for pet name here ************************************************************
	var petName = $("<span>").addClass("card-title activator grey-text text-darken-4 title");
	$(petName).html(animalAlias);
	//more info icon -- which will only work if you have the materialize icon css link in your page
	var moreInfo  = $("<i>").addClass("material-icons right");
	$(moreInfo).html("more_vert");
	var p = $("<p>");
	//add var for pet link here ************
	var petLink = $("<a>");

	$(petLink).attr("href", petWebPage);
	//need to add var/content to create this text###########
	$(petLink).text("awesome.com");

	//adds icon to span containing name
	$(petName).append(moreInfo);
	//adds link to p tag
	$(p).append(petLink);
	//adds to the content card
	$(content).append(petName);
	$(content).append(p);
	$(pet).append(content);

	//'reveal' portion of the card
	var reveal = $("<div>").addClass("card-reveal");
	var revealTitle = $("<span>").addClass("card-title grey-text text-darken-4 title");
	$(revealTitle).html(animalAlias);
	var closeInfo = $("<i>").addClass("material-icons right title");
	//close is inside the i tag
	$(closeInfo).html("close");
	//add pet info paragraph here *****************
	var petInfo = $("<p>");
	$(petInfo).html(petBio);
	

	//adds icon to pet name span
	$(closeInfo).append(petInfo);
	//
	$(revealTitle).append(closeInfo);
	$(reveal).append(revealTitle);

	$(pet).append(reveal);
	console.log("I work");

	//add animal div here
	$(".ANIMAL_DIV").append(pet);


};


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

for(var i = 0; i < animals.length; i++) {
	var animalAlias = animals[i].petName;
	var petBio = animals[i].petInfo;
	var petWebPage = animals[i].petLink;
	var petPic = animals[i].image;

	imageCardCreator(animalAlias, petBio, petWebPage, petPic);
	console.log(i);

}














