var Main = {}; //changes it from global variable

Main.Cavs = function(firstName, lastName, height)
{
	this.FirstName = firstName;  //creating reusable properties
	this.LastName = lastName;
	this.Height = height;

}

Main.Cavs1 = new Main.Cavs("LeBron", "James", "6 foot 8 inches");
Main.Cavs2 = new Main.Cavs("Kevin", "Love", "6 foot 10 inches");
Main.Cavs3= new Main.Cavs(" Kay", "Felder", "5 foot 9 inches");
Main.TallestCavsPlayer = Main.Cavs2;
Main.ShortestCavsPlayer = Main.Cavs3;


Main.Cavs.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName + " is " + this.Height + ".";
}

Main.Cavs.prototype.SetFirstName = function(name)
{
	this.FirstName = name;
}

Main.Cavs.prototype.SetLastName = function(name)
{
	this.LastName = name;
}

Main.Cavs.prototype.SetHeight = function(height)
{
	this.Height = height;
}

document.body.innerHTML = Main.Cavs3.GetFullName() 
	+ "</br>" + Main.Cavs2.GetFullName()
	+ "</br>" + Main.Cavs1.GetFullName(); 
