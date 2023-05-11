var NS4 = (document.layers) ? true : false;
var weekdaystxt=["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var dtCh= "/";
var minYear=1900;
var maxYear=2100;
var specialSpaceChar;
specialSpaceChar = String.fromCharCode(160);

function replicateURL(btn) {
	frm = btn.form;
	
	document.getElementById('adFrame').src="URLDisplay.asp?URLData=" + frm.URLData.value;
}

function validateURLSubmit(frm) {
	if ((frm.pwd.value.length>0 || frm.pwd_repeat.value.length>0) && frm.pwd.value != frm.pwd_repeat.value) {
		alert("Please ensure that you have typed in the same password in both fields and try again");
		frm.pwd.focus();
		return false;
	}
	
	if (frm.URLData.value.length<4) {
		alert("Please provide a valid URL to convert");
		frm.URLData.focus();
		return false;
	}
	else {
		return true;
	}
}

function validateLoginSubmit(frm) {
	if (frm.username.value.length==0 || frm.pwd.value.length==0) {
		alert("Please ensure that you have typed in both the username (your e-mail address) and password belonging to your account.\nAlternatively, click Sign Up to get a FREE account.");
		frm.username.focus();
		return false;
	}
	else {
		return true;
	}
}

function validateReminderSubmit(frm) {
	if (frm.username.value.length<6) {
		alert("Please provide an e-mail address.");
		frm.username.focus();
		return false;
	}
	if (!echeck(frm.username.value)) {	
		frm.username.focus();
		return false;
	}
	return true;
}

function validateRegisterSubmit(frm) {
	if (frm.username.value.length<6) {
		alert("Please provide an e-mail address.");
		frm.username.focus();
		return false;
	}
	if (frm.pwd.value.length==0) {
		alert("Please provide a password.");
		frm.pwd.focus();
		return false;
	}
	if (frm.pwd.value.length>0 && frm.pwd.value!=frm.pwd_repeat.value) {
		alert("Please make sure that you have entered the same password in both password fields.");
		frm.pwd.focus();
		return false;
	}
	if (frm.pwd.value.length>0 && frm.pwd.value.length<3) {
		alert("Your password must be at least three characters long");
		frm.pwd.focus();
		return false;
	}
	if (!echeck(frm.username.value)) {	
		frm.username.focus();
		return false;
	}
	return true;
}

function validateUpdateSubmit(frm) {
	if (frm.username.value.length<6) {
		alert("Please provide an e-mail address.");
		frm.username.focus();
		return false;
	}
	if (frm.pwd.value.length>0 && frm.pwd.value!=frm.pwd_repeat.value) {
		alert("Please make sure that you have entered the same password in both password fields.");
		frm.pwd.focus();
		return false;
	}
	if (frm.pwd.value.length>0 && frm.pwd.value.length<3) {
		alert("Your password must be at least three characters long");
		frm.pwd.focus();
		return false;
	}
	if (!echeck(frm.username.value)) {	
		frm.username.focus();
		return false;
	}
	return true;
}

function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail address")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail address")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail address")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail address")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail address")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail address")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail address")
		    return false
		 }

 		 return true					
}

function bookmarksite(title,url){
if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

function toggleRow(rowID) {
	var i;
	
	for (i=1; i<6; i++) {
		if (document.getElementById("row" + i + "_" + rowID)) {
			if (document.getElementById("row" + i + "_" + rowID).style.display=="none") {
				document.getElementById("row" + i + "_" + rowID).style.display="";
			}
			else {
				document.getElementById("row" + i + "_" + rowID).style.display="none";
			}
		}
	}
}

function updUserLink(frm, URLID) {
	frm = frm.form;
	
	if ((frm["pwd_" + URLID].value.length>0 || frm["pwd_repeat_" + URLID].value.length>0) && frm["pwd_" + URLID].value != frm["pwd_repeat_" + URLID].value) {
		alert("Please ensure that you have typed in the same password in both fields and try again");
		frm["pwd_" + URLID].focus();
		return false;
	}
	
	if (frm["URLData_" + URLID].value.length<4) {
		alert("Please provide a valid URL to convert");
		frm["URLData_" + URLID].focus();
		return false;
	}
	else {
		frm.URLID.value = URLID;
		frm.submit();
	}
}

function delUserLink(frm, URLID) {
	frm = frm.form;
	frm.URLID.value = URLID;
	frm.action = "deleteURL.asp";
	frm.submit();
	frm.action = "updateURL.asp";
}

function replace(string,text,by) {
	// Replaces text with by in string
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0,i) + by;

    if (i+txtLength < strLength)
        newstr += replace(string.substring(i+txtLength,strLength),text,by);

    return newstr;
}

function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the user
}

function checkEnter(event, frm)
{ 	
	var code = 0;
	
	if (NS4)
		code = event.which;
	else
		code = event.keyCode;
	if (code==13) {
		searchGuest(frm);
	}
}

function openWindowName(URL, xDim, yDim, winName) {
	var popWin;
	popWin = window.open(URL,winName,"titlebar=1,toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1,channelmode=0,directories=0,status=1,width=" + xDim + ",height=" +yDim);
	popWin.focus();
}

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("urlToCopy");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}