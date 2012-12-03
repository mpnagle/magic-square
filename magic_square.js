Sections = new Meteor.Collection("sections");





//includes leftSidebar JS & show helper functions for each screen

if (Meteor.isClient) {

    Template.leftSidebar.sections = function () {
	return Sections.find({});
    };
    
    
    Template.leftSidebar.events({
	'click': function () {
	    
	    Session.set("selected_id", this._id);
	    Session.set("which_screen", this.index);
	    console.log("which_screen: " + this.index);
	}
    });
    
    Template.tabs.selected = function () {
	return Session.equals("selected_id",this._id) ? "selected" : '';
};
    
    

Template.threeByThree.show = function () {
    return Session.equals ("which_screen", 0);
};

Template.fourByFour.show = function() {
    return Session.equals ("which_screen", 1);
};

}

if (Meteor.isServer) { 
    Meteor.startup(function () {
	
	var names=  ["3x3",
		     "4x4"];
	
	
	//do I need to call Sections.remove everytime?
	Sections.remove({});
	
	for (var i = 0; i < names.length; i++)
	{
	
	    Sections.insert({name: names[i], index:i});
	
	}
	
	console.log(Sections.find({}));

    });
}

