Session.set("1",0);
Session.set("2",0);
Session.set("3",0);
Session.set("4",0);
Session.set("5",0);
Session.set("6",0);
Session.set("7",0);
Session.set("8",0);
Session.set("9",0);



Template.square.events({
    'keyup input#1': function (evt) {
	var one = parseInt($("#1").val());
	Session.set("1", one);
	console.log(Session.get("1"));
    },

    'keyup input#2': function (evt) {
	var two = parseInt($("#2").val());
	Session.set("2", two);
	console.log(Session.get("2"));
    },
 'keyup input#3': function (evt) {
	var three = parseInt($("#3").val());
	Session.set("3", three);
	console.log(Session.get("3"));
    },
 'keyup input#4': function (evt) {
	var four = parseInt($("#4").val());
	Session.set("4", four);
	console.log(Session.get("4"));
    },
 'keyup input#5': function (evt) {
	var five = parseInt($("#5").val());
	Session.set("5", five);
	console.log(Session.get("5"));
    },
 'keyup input#6': function (evt) {
	var six = parseInt($("#6").val());
	Session.set("6", six);
	console.log(Session.get("6"));
    },
 'keyup input#7': function (evt) {
	var seven = parseInt($("#7").val());
	Session.set("7", seven);
	console.log(Session.get("7"));
    },
 'keyup input#8': function (evt) {
	var eight = parseInt($("#8").val());
	Session.set("8", eight);
	console.log(Session.get("8"));
    },
 'keyup input#9': function (evt) {
	var nine = parseInt($("#9").val());
	Session.set("9", nine);
	console.log(Session.get("9"));
    }
});

Meteor.autorun(function(){
    row1sum = (Session.get("1") + Session.get("2") + Session.get("3")  || "");
    $("#row1sum").html(row1sum);

    row2sum = (Session.get("4") + Session.get("5") + Session.get("6") || "");
    $("#row2sum").html(row2sum);
    
    row3sum = (Session.get("7") + Session.get("8") + Session.get("9") || "");
    $("#row3sum").html(row3sum);
    
    col1sum = (Session.get("1") + Session.get("4") + Session.get("7") || "");
    $("#col1sum").html(col1sum);

    col2sum = (Session.get("2") + Session.get("5") + Session.get("8") || "");
    $("#col2sum").html(col2sum);

    col3sum = (Session.get("3") + Session.get("6") + Session.get("9") || "");
    $("#col3sum").html(col3sum);

    diag1sum = (Session.get("3") + Session.get("5") + Session.get("7") || "");
    $("#diag1sum").html(diag1sum);

    diag2sum = (Session.get("1") + Session.get("5") + Session.get("9") || "");
    $("#diag2sum").html(diag2sum);

});

