let user = "";
let username = "";

const client = new Appwrite.Client();
	client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67571cd7002ca90a77ef'); // Replace with your Appwrite Project ID

const account = new Appwrite.Account(client);

async function check(){
	try {
		user = await account.get();
		username = await user.name;
		console.log(username);
	} catch (err) {
		//window.location.replace("https://gigadrive.ddns.net/login");
		console.log(err);
	}
}

async function logout(){
	const res = await account.deleteSessions();
	username = "";
}

async function listFiles(){
	let files = await list_files()
	console.log(files);
	files = JSON.parse(files);
	let par = document.getElementById("fileList");
	
	while (par.lastChild){
		par.removeChild(par.lastChild);
	}

	for (i in files){
		//container
		let parpar = document.createElement("div");
		parpar.setAttribute("id", "fileLink");
		//filename
			

		let elficken = document.createElement("div");
		elficken.setAttribute("id", "fileName");

		let el2 = document.createTextNode(files[i]);
		elficken.appendChild(el2);
		//download button
		let el3 = document.createElement("div");
		el3.setAttribute("onclick", "downloadFile('" + files[i] + "')");
		el3.setAttribute("id", "fileDownload")
		let el8 = document.createElement("img");
		el8.setAttribute("src", "download.png");
		el3.appendChild(el8);
		//delete button
		let el5 = document.createElement("div");
		el5.setAttribute("onclick", "deleteFile('" + files[i] + "')");
		el5.setAttribute("id", "fileDelete");
		let el9 = document.createElement("img");
		el9.setAttribute("src", "delete.svg");
		el5.appendChild(el9);

		
		parpar.appendChild(elficken);
		//parpar.appendChild(el);
		parpar.appendChild(el3);
		parpar.appendChild(el5);
		par.appendChild(parpar);
	}
}

async function downloadFile(filename){
	let l = document.createElement("a");
	let content = await read_file(filename);
	//let content = "test";
	let x  = new Blob([content], {type: 'text/plain'});
	l.href = URL.createObjectURL(x);
	l.download = filename;
	l.click();
	URL.revokeObjectURL(l.href);
}

async function deleteFile(filename) {
	await delete_file(filename);
	listFiles();
}

async function uploadFile(filename) {
	let rr = document.getElementById("addFile");
	let file = rr.files[0];
	const name = file.name;
	//console.log(name);


	if (file) {
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = function () {
			console.log(reader.result);
			write_file(name, reader.result);
		};
		reader.onerror = function () {
			return;
		};
	} else {
		return;
	}
	listFiles();
}

let z;
async function update(){

	let zz = await list_files();
	console.log(zz);
	if (z != zz){
		listFiles();
		z = zz;
	}
}

setTimeout(listFiles, 100);

