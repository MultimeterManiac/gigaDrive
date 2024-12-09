

async function listFiles(){
	clearFiles();
	let files = await list_files();
	files = JSON.parse(files);
	console.log(files);
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

function clearFiles(){
	let par = document.getElementById("fileList");
	while(par.firstChild){
		par.removeChild(par.firstChild);
	}
}

async function downloadFile(filename){
	if (running){
		alert("try again");
		return;
	}
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
	console.log("deleting " + filename);
	//implement
}

async function uploadFile(){
    const file = document.getElementById("addFile").files[0];
	let u = file.name;
	//console.log(u);
    if (file && u != ""){ 
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            console.log(content);
			write_file(u, content);
        };
        reader.readAsText(file);
    }
}

setTimeout(listFiles, 200);
