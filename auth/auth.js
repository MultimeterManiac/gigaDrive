const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67571cd7002ca90a77ef'); // Replace with your Appwrite Project ID
        
const account = new Appwrite.Account(client);

let link = window.location.href;
//link = "https://gigadrive.ddns.net/auth?user=Justus&pswd=12345";
let user = link.split("?")[1].split("&")[0].split("=")[1] + "@giga.drive";
let pswd = link.split("?")[1].split("&")[1].split("=")[1];
console.log(user);
console.log(pswd);

async function login(){
    try{
        const session = await account.createEmailPasswordSession(
            user, 
            pswd
            );
    }
    catch(err){
        account.deleteSessions();
        try{
        const session = await account.createEmailPasswordSession(
            user, 
            pswd
            );
        }
        catch(err){
            return;
        }
    }
    
    console.log(account.get());	
    
    window.location.replace("https://gigadrive.ddns.net/gigadrive");
}

login();