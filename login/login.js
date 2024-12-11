if (typeof Appwrite === 'undefined') {
    console.error('Appwrite SDK is not loaded.');
}


const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67571cd7002ca90a77ef'); // Replace with your Appwrite Project ID
        
const account = new Appwrite.Account(client);

async function login() {
    let name = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    console.log(name);
    console.log(password);

    console.log("Logging in...");
    const session = await account.createEmailPasswordSession(
        name, 
        password
        );

    console.log(account.get());	
}
