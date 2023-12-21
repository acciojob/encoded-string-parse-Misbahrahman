let obj = {};
const parseCode = (str) => {
	let f = "";
    let i = 0;
	while(str.charAt(i) != '0'){
		f += str.charAt(i);
		i++;
	}

	while(str.charAt(i) == '0'){i++;}

	let l = "";
	while(str.charAt(i) != '0'){
		l += str.charAt(i);
		i++;
	}

	while(str.charAt(i) == '0'){i++;}
	
	let id = "";
	while(i < str.length){
		id += str.charAt(i);
		i++;
	}

	obj.fistName = f;
	obj.lastName = l;
	obj.id = id;

	
	

	return obj;
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
