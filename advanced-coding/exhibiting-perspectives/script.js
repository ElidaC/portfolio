 // INITIALIZE FIREBASE
 const firebaseConfig = {
  apiKey: "AIzaSyABjQgmJTXhrjk5MEF_ftW45OSgSs8kCmc",
  authDomain: "dataexhibition-ca8b9.firebaseapp.com",
  projectId: "dataexhibition-ca8b9",
  storageBucket: "dataexhibition-ca8b9.firebasestorage.app",
  messagingSenderId: "763992974890",
  appId: "1:763992974890:web:377341188a5fa5bbef4553",
  measurementId: "G-Z2N4W494ZF"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("entries");

// GET HTML ELEMENTS
const jobsDropdown = document.getElementById("jobs");
const choiceDropdown = document.getElementById("choice");
const inputField = document.getElementById("text-input");
const setButton = document.getElementById("set-button");
const circlesContainer = document.getElementById("circles-container");
const quoteDisplay = document.getElementById("quote-display");

// SUBMIT DATA
setButton.onclick = function () {
  const job = jobsDropdown.value;
  const choice = choiceDropdown.value;
  const quote = inputField.value;

  if (job && choice) {
    ref.push({ job, choice, quote });
    inputField.value = ""; // Clear input
    alert("Data submitted!");
  } else {
    alert("Please select a job and a choice.");
  }
};

// REAL-TIME LISTENER
ref.on("value", (snapshot) => {
  circlesContainer.innerHTML = ""; // Clear previous circles
  const data = snapshot.val();
  for (const key in data) {
    const { job, choice, quote } = data[key];

    // CREATE CIRCLE
    const circle = document.createElement("div");
    circle.classList.add("circle", choice.toLowerCase());
    circle.textContent = choice === "Pros" ? "" : "";
    circle.dataset.quote = quote;

    // APPEND CIRCLE TO CONTAINER
    circlesContainer.appendChild(circle);

    // SHOW QUOTE ON CLICK
    circle.onclick = () => {
      quoteDisplay.style.display = "block";
      quoteDisplay.textContent = quote || "No quote provided.";
    };
  }
});