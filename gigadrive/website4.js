files = ["file1", "file2", "file3", "file4"];



function listFiles(){
	//var files = get_files()
	let par = document.getElementById("fileList");
	

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
	//let content = getFileContent(filename);
	let content = "test";
	let x  = new Blob([content], {type: 'text/plain'});
	l.href = URL.createObjectURL(x);
	l.download = filename;
	l.click();
	URL.revokeObjectURL(l.href);
}

async function deleteFile(filename) {
	console.log("deleting " + filename);
}

listFiles();
