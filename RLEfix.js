let fs = require('fs');
let argv = process.argv;
let i = 0;
let string = '';
let n = 1;


if (argv[2] == 'code')  {
	let data = fs.readFileSync(argv[3],'utf8');
	data.toString();
	console.log(data);
	while (i < data.length) {
		while (data.charAt(i) == data.charAt(i+n) && n < 255 ) {
			n++;
			}  
		if (n>=4 || data.charAt(i) == '#') {
			string +='#' + String.fromCharCode(n) + data.charAt(i);
		}
		else {
			for (let s = 0; s<n; s++) {
				string += data.charAt(i+s);
				} 
		    }
		i = i+n;
		n = 1;
		}
	fs.writeFileSync(argv[4], string);
}

if (argv[2] == 'decode') {
	let data = fs.readFileSync(argv[3],'utf8');
	data.toString();
	while (i < data.length) {
		if (data.charAt(i) == '#') {
			n = data.charCodeAt(i+1);
			for (let s = 0; s<n; s++){
				string += data.charAt(i+2);
			}
			i = i+3;
		}
		else {
			string += data.charAt(i);
			i++;
		}
	}
	fs.writeFileSync(argv[4], string);
}
	
		
		
	

		
	
	
		
		
	










