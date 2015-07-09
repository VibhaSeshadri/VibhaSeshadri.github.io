$( document ).ready(function() {
	$("#intro").show();
	$("#showWeekOne").hide();
	$("#showWeekTwo").hide();
	$("#showWeekThree").hide();
	$("#contactMe").hide();
	$("#rod").hide();

	
	$("#home").click(function(){
		$("#intro").show();
		$("#showWeekOne").hide();
		$("#showWeekTwo").hide();
		$("#showWeekThree").hide();
		$("#contactMe").hide();
		$("#rod").hide();

	});
	$("#weekOne").click(function(){
		$("#intro").hide();
		$("#showWeekOne").show();
		$("#showWeekTwo").hide();
		$("#showWeekThree").hide();
		$("#contactMe").hide();
		$("#rod").hide();

	});
	$("#weekTwo").click(function(){
		$("#intro").hide();
		$("#showWeekOne").hide();
		$("#showWeekTwo").show();
		$("#showWeekThree").hide();
		$("#contactMe").hide();
		$("#rod").hide();


	});
	$("#weekThree").click(function(){
		$("#intro").hide();
		$("#showWeekOne").hide();
		$("#showWeekTwo").hide();
		$("#showWeekThree").show();
		$("#contactMe").hide();


	});
	$("#contact").click(function(){
		$("#intro").hide();
		$("#showWeekOne").hide();
		$("#showWeekTwo").hide();
		$("#showWeekThree").hide();
		$("#contactMe").show();
		$("#rod").hide();
	});
		$("#r").click(function(){
		$("#intro").hide();
		$("#showWeekOne").hide();
		$("#showWeekTwo").hide();
		$("#showWeekThree").hide();
		$("#contactMe").hide();
		$("#rod").show();
	});
});
	






/*var one = document.getElementById("showWeekOne");
var two = document.getElementById("showWeekTwo");
var three = document.getElementById("showWeekThree");
var intro = document.getElementById("intro");
var b1=false;
var b2=false;
var b3=false;
var h = false;*/

//function showWeek(){
	
	/*intro.style.display='none';
	if(b1==true){
		one.style.display='block';
		two.style.display='none';
		three.style.display='none';
		b1=false;
	}
	else if(b2==true){
		one.style.display='none';
		two.style.display='block';
		three.style.display='none';
		b2=false;
	}
	else if(b3==true){
		one.style.display='none';
		two.style.display='none';
		three.style.display='block';
		b3=false;
	}
	else if(h==true){
		one.style.display='none';
		two.style.display='none';
		three.style.display='none';
		intro.style.display='block';
		h=false;
	}
}
function homeBound(){
	h=true;
	showWeek();
}
function oneSet(){
	b1=true;
	showWeek();
}
function twoSet(){
	b2=true;
	showWeek();
}
function threeSet(){
	b3=true;
	showWeek();
}*/

