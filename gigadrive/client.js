let socket = new WebSocket("wss://gigachat.ddns.net:12357");
let response = "";
let wopened = false;
let running = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function csend(msg){
    socket.send(msg);
}


async function delete_file(filename){
    running = true;
    if(wopened){
        csend("d"+filename);
        while(response == ""){
            await sleep(10);
        }
        if(response == "d"){
            response == "";
            running = false;
            return true;
        }
    }
}

async function list_files(){
    if(wopened){
        csend("l/"+user.name);
    while(response == ""){
        await sleep(10);
    }
    let rresponse = response;
    response = "";
    return rresponse;}
}


async function read_file(filename){
    running = true;
    if(wopened){
        console.log(filename);
    let path = "r" + filename;
    csend(path);
    while(response == ""){
        await sleep(10);
    }
    let rresponse = response;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(response);
    a.download = filename;
    a.click();
    response = "";
    running = false;
    return rresponse;}

}

async function write_file() {
    const fileInput = document.getElementById("addFile");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        if(wopened){
        let path = "w/" + user.name + "/" + file.name;
        csend(path);
        csend(reader.result);}
    };
    reader.readAsArrayBuffer(file);
    while(response == ""){
        await sleep(10);
    }
    if(response == "d"){
        response == "";
        running = false;
        return true;
    }
}


async function make_file(filename){
    if(wopened){
        csend("m"+filename);
        while(response == ""){
            await sleep(10);
        }
        if(response == "d"){
            response == ""
            return true;
        }
    }}


socket.onopen = async function(e) {
    wopened = true;
};

socket.onmessage = function(event) {
    response = event.data;
};

socket.onclose = function(event) {
    wopened = false;
  if (event.wasClean) {
    document.getElementById('warningPopupCon').style.display = 'flex';
  } else {
    document.getElementById('warningPopupCon').style.display = 'flex';
  }
};

socket.onerror = function(error) {
    wopened = false;
    document.getElementById('warningPopupCon').style.display = 'flex';
};
