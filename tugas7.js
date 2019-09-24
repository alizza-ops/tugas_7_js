function perulangan(){

	var tinggi=[150,152,155,157,160,162,165,170,175,180];
	
	console.log("Menggunakan for biasa : ");

	for (var i = tinggi.length; i >0 ; i--) {
			console.log(tinggi[i]);
		}

		console.log("\n");
	
	console.log("Menggunakan for of : ");	
	
	for(let x of tinggi){
		console.log(x);
	}		

}

perulangan();