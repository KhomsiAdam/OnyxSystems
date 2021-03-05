const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const error = urlParams.get('error');
if(error) 
 {
     document.getElementById("username").style.borderBottom=" 5px solid  #C73A3A";
     document.getElementById("password").style.borderBottom="5px solid #C73A3A"; 
 }
