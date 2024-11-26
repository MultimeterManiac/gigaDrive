files = ["file1", "file2", "file3", "file4"];



function listFiles(){
	//var files = get_files()
	let par = document.getElementById("fileList");
	

	for (i in files){
		//container
		let parpar = document.createElement("div");
		//filename
		let el = document.createElement("div");
		let el2 = document.createTextNode(files[i]);
		el.appendChild(el2);
		//download button
		let el3 = document.createElement("button");
		el3.setAttribute("onclick", "downloadFile('" + files[i] + "')");
		let el4 = document.createTextNode("download");
		el3.appendChild(el4);
		//delete button
		let el5 = document.createElement("button");
		el5.setAttribute("onclick", "deleteFile('" + files[i] + "')");
		let el6 = document.createTextNode("delete");
		el5.appendChild(el6);

		
		parpar.appendChild(el);
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
