const firebaseConfig = {
    apiKey: "AIzaSyABjQgmJTXhrjk5MEF_ftW45OSgSs8kCmc",
    authDomain: "dataexhibition-ca8b9.firebaseapp.com",
    projectId: "dataexhibition-ca8b9",
    storageBucket: "dataexhibition-ca8b9.firebasestorage.app",
    messagingSenderId: "763992974890",
    appId: "1:763992974890:web:377341188a5fa5bbef4553",
    measurementId: "G-Z2N4W494ZF"
  };

function sendText() {
    const userInput = document.getElementById("userInput").value;
    alert("You sent: " + userInput);
}