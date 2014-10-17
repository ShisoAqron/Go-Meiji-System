//Go! Meiji System
//Naoshi Ooba 17 Oct 2014

//これを各自のIDとパスワードに差し替えてください。
var userID = "123456";
var userPass ="hogihogi";



//ここから下は操作に使っています。
var target = "https://com-web.mind.meiji.ac.jp/SSO/";

var current = location.href;
var _current = current.match(/^https:\/\/com-web\.mind\.meiji\.ac\.jp\/SSO\//);

try{
	if(_current[0]==target){
		inputUserinfo();
	}
}catch(e){
}


$(document).keydown(function(e) {
	switch (e.keyCode) {
		case 77:

		if(event.ctrlKey){
			changePage();
			inputUserinfo();
		}
		break;
	}
});

function changePage(){
	window.open("https://com-web.mind.meiji.ac.jp/SSO/sso?url=https%3A%2F%2Foh-o2.meiji.ac.jp%2Fportal%2Finitiatessologin","_blank");
}

function inputUserinfo(){
	$("input[name='usrid']").val(userID);
	$("input[name='passwd']").val(userPass);

	$("input[value='　送　信　Submit  ']").click();
}

