function getAttributes(){
			var data=document.getElementById("csv").value;
			alert(data);			
			obj = JSON.parse(data);
			alert(obj);
			alert(obj[1].A + " " + obj[1].B);

		}

