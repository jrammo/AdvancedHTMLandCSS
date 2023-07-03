
function isEmpty(email,name) {
	if (email == "") {
		if (name == ""){
			alert("Name and email required");
		}
		else {
			alert("Email is required");
		}
	}
	else if (name == "") {
		alert("Name is required");
	}
	else {
		return;
	}
}

function validate() {
  var email = document.getElementById("EMAIL").value;
  var name = document.getElementById("NAME").value;
  console.log(email);
  console.log(name);
  isEmpty(email,name);
  }

