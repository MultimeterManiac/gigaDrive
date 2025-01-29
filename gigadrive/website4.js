//let user = "testuser1";
let user = "";
let username = "";
let userr = "";

const client = new Appwrite.Client();
client
	.setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
	.setProject('67571cd7002ca90a77ef'); // Replace with your Appwrite Project ID

const account = new Appwrite.Account(client);

async function check() {
	updateUsedSpace();
	try {
		user = await account.get();
		username = await user.email;
		userr = await user.name;
		console.log(username);
	} catch (err) {
		console.log(err);
		window.location.replace("https://gigadrive.ddns.net/login");
	}
}

//check();

async function logout() {
	const res = await account.deleteSessions();
	username = "";
	user = "";
	window.location.replace("https://gigadrive.ddns.net/login");
}

const elements = document.querySelectorAll('.filesFilter');

elements.forEach(element => {
  element.addEventListener('click', () => {
    elements.forEach(e => e.classList.remove('activeFilter'));
    element.classList.add('activeFilter');
  });
});

async function listFiles() {

	//let files = await list_files()
	//console.log(files);
	//files = JSON.parse(files);
	let files =
		[
			{ "filename": "/user/file1.txt", "tag": "green" },
			{ "filename": "/user/file2.txt", "tag": "blue" },
			{ "filename": "/user/file3.txt", "tag": "red" },
			{ "filename": "/user/file4.txt", "tag": "yellow" },
			{ "filename": "/user/file5.txt", "tag": "white" },
			{ "filename": "/user/file6.txt", "tag": "green" },
			{ "filename": "/user/file7.txt", "tag": "purple" }
		]
	let par = document.getElementById("fileList");

	while (par.lastChild) {
		par.removeChild(par.lastChild);
	}

	for (i in files) {
		//container
		let parpar = document.createElement("div");
		parpar.setAttribute("class", "fileLink");
		parpar.classList.add(files[i].tag);
		//filename


		let elficken = document.createElement("div");
		elficken.setAttribute("class", "fileName");

		let el2 = document.createTextNode(files[i].filename.split("/")[files[i].filename.split("/").length - 1]);
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
		el9.setAttribute("src", "delete.png");
		el5.appendChild(el9);
		



		parpar.appendChild(elficken);
		//parpar.appendChild(el);
		parpar.appendChild(el3);
		parpar.appendChild(el5);

		par.appendChild(parpar);
	}
}

async function downloadFile(filename) {
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
async function update() {
	updateUsedSpace();
	let zz = await list_files();
	console.log(zz);
	if (z != zz) {
		listFiles();
		z = zz;
	}
}
let pr = 0;
async function updateUsedSpace() {
	let l = document.getElementById("usedSpace");
	let x = await get_full_space();
	l.innerHTML = x;
	let ll = document.getElementById("totalSpace");
	let xx = await get_free_space();
	ll.innerHTML = xx;
	let percentage = Math.round(x / xx * 10) / 10;
	console.log(percentage);
	let bar = document.getElementById("statusBarDownload" + pr).id = "statusBarDownload" + percentage * 10;
	pr = percentage * 10;
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

document.getElementById('addFile').addEventListener('change', function (e) {
	document.getElementById("fffi").innerHTML = e.target.files.length + " files selected";
	//console.log(e.target.files.length);
});
let filterActive = false;
function filter(tag) {
	let childs = document.querySelectorAll(".fileLink");
	childs.forEach(function (child) {
		if (child.classList.contains(tag)) {
			child.classList.remove("hidden");
		} else {
			child.classList.add("hidden");
		}
	});
}

function clearFilter() {
	let childs = document.querySelectorAll(".fileLink");
	childs.forEach(function (child) {
		child.classList.remove("hidden")});
		const elements = document.querySelectorAll('.filesFilter');
    elements.forEach(function(element) {element.classList.remove('activeFilter');
    element.classList.remove('activeFilter');});
	
}
