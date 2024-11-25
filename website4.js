files = ["file1", "file2", "file3", "file4"];

function hello(){
	console.log("helloworld");
}

function listFiles(){
	//varfiles = get_files()
	let par = document.getElementById("file_list");

	for (i in files){
		let el = document.createElement("button");
		let el2 = document.createTextNode(files[i]);
		el.setAttribute("onclick", "getFile('"+files[i]+"')");

		el.appendChild(el2);
		par.appendChild(el);
	}
}

function getFile(filename){

	console.log("got file " + filename);

}

listFiles();