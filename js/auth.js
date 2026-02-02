// 1. Setup (Same config as before)
const firebaseConfig = { 
    apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
 };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

// --- SIGN UP FUNCTION ---
async function handleSignUp(name, password) {
    // We turn "John" into "John@contest.com" internally
    const dummyEmail = name.replace(/\s/g, '') + "@contest.com";

    try {
        const result = await auth.createUserWithEmailAndPassword(dummyEmail, password);
        
        // Save their extra info to the database
        await db.ref('participants/' + result.user.uid).set({
            name: name,
            igConnected: true // Assuming you handled this earlier
        });

        alert("Account created! Welcome, " + name);
        window.location.href = "give away.html";
    } catch (error) {
        alert("Signup failed: " + error.message);
    }
}

// --- LOG IN FUNCTION ---
async function handleLogin(name, password) {
    const dummyEmail = name.replace(/\s/g, '') + "@contest.com";

    try {
        await auth.signInWithEmailAndPassword(dummyEmail, password);
        window.location.href = "give away.html";
    } catch (error) {
        alert("Login failed! Check your name and password.");
    }
}
