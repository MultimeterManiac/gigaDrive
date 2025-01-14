//let user = "testuser1";
let user = "";
let username = "";

const client = new Appwrite.Client();
	client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67571cd7002ca90a77ef'); // Replace with your Appwrite Project ID

const account = new Appwrite.Account(client);

async function check(){
	updateUsedSpace();
	try {
		user = await account.get();
		username = await user.email;
		console.log(username);
	} catch (err) {
		console.log(err);
		window.location.replace("https://gigadrive.ddns.net/login");
	}
}

check();

async function logout(){
	const res = await account.deleteSessions();
	username = "";
	user = "";
	window.location.replace("https://gigadrive.ddns.net/login");
}

async function listFiles(){

	let files = await list_files()
	console.log(files);
	files = JSON.parse(files);
	//let files = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	let par = document.getElementById("fileList");
	
	while (par.lastChild){
		par.removeChild(par.lastChild);
	}

	for (i in files){
		//container
		let parpar = document.createElement("div");
		parpar.setAttribute("class", "fileLink");
		//filename
			

		let elficken = document.createElement("div");
		elficken.setAttribute("class", "fileName");

		let el2 = document.createTextNode(files[i].split("/")[files[i].split("/").length-1]);
		elficken.appendChild(el2);
		//download button
		let el3 = document.createElement("div");
		el3.setAttribute("onclick", "downloadFile('" + files[i] + "')");
		el3.setAttribute("class", "fileDownload")
		let el8 = document.createElement("img");
		el8.setAttribute("src", "download.png");
		el3.appendChild(el8);
		//delete button
		let el5 = document.createElement("div");
		el5.setAttribute("onclick", "deleteFile('" + files[i] + "')");
		el5.setAttribute("class", "fileDelete");
		let el9 = document.createElement("img");
		el9.setAttribute("src", "delete.svg");
		el5.appendChild(el9);
		let el10 = document.createElement("div");
		el10.setAttribute("class", "fileEdit");
		let el11 = document.createElement("img");
		el11.setAttribute("src", "update.png");
		el10.appendChild(el11);


		
		parpar.appendChild(elficken);
		//parpar.appendChild(el);
		parpar.appendChild(el3);
		parpar.appendChild(el5);
		parpar.appendChild(el10);
		par.appendChild(parpar);
	}
}

async function downloadFile(filename){
	read_file(filename);
}

async function deleteFile(filename) {
	await delete_file(filename);
	listFiles();
}

async function uploadFile() {
	
	write_file();
	
	listFiles();
}

let z;
async function update(){
	updateUsedSpace();
	let zz = await list_files();
	console.log(zz);
	if (z != zz){
		listFiles();
		z = zz;
	}
}

async function updateUsedSpace(){
	let l = document.getElementById("usedSpace");
	let x = await get_full_space();
	l.innerHTML = x;
	let ll = document.getElementById("totalSpace");
	let xx = await get_free_space();
	ll.innerHTML = xx;
	let percentage = Math.round(x / xx * 10) / 10;
	console.log(percentage);
	let bar = document.getElementById("statusBarDownload0").id = "statusBarDownload" + percentage * 10;
	//bar.setAttribute("id", "statusBarDownload" + percentage * 10);
}

setTimeout(listFiles, 1000);
//setTimeout(updateUsedSpace, 1000);



// for PWA: register serviceworker.js

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.error("Service Worker Registration Failed:", error));
  });
}

// sigma. kp ob des funktioniert.
function showUsername() {
	document.getElementById('logoutLink').textContent = username;
	document.getElementById('popupSettingsUsername').textContent = username;
 }