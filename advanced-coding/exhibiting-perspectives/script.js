// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyABjQgmJTXhrjk5MEF_ftW45OSgSs8kCmc",
  authDomain: "dataexhibition-ca8b9.firebaseapp.com",
  projectId: "dataexhibition-ca8b9",
  storageBucket: "dataexhibition-ca8b9.firebasestorage.app",
  messagingSenderId: "763992974890",
  appId: "1:763992974890:web:377341188a5fa5bbef4553",
  measurementId: "G-Z2N4W494ZF",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("entries");

// GET HTML ELEMENTS
const jobsDropdown = document.getElementById("jobs");
const choiceDropdown = document.getElementById("choice");
const inputField = document.getElementById("text-input");
const setButton = document.getElementById("set-button");
const quoteDisplay = document.getElementById("quote-display");

inputField.addEventListener("input", () => {
  const wordCount = inputField.value.trim().split(/\s+/).filter(word => word.length > 0).length;
  if (wordCount > 20) {
    inputField.value = inputField.value
      .split(/\s+/)
      .slice(0, 20)
      .join(" "); // Truncate to 30 words
    alert("You can only enter up to 20 words.");
  }
});

// SUBMIT DATA
setButton.onclick = function () {
  const job = jobsDropdown.value; // Selected job
  const choice = choiceDropdown.value; // Selected choice (Pros/Cons)
  const quote = inputField.value.trim(); // Input text

  if (job && choice && quote) {
    ref.push({ job, choice, quote });
    inputField.value = ""; // Clear input field
    alert("Data submitted!");
  } else {
    alert("Please fill all fields before submitting.");
  }
};

// REAL-TIME LISTENER
ref.on("value", (snapshot) => {
  const jobContainers = document.querySelectorAll(".circle-list .job-container");

  // Clear all existing circles in the containers
  jobContainers.forEach((container) => (container.innerHTML = ""));

  // Get data from Firebase
  const data = snapshot.val();
  if (!data) return; // If no data, do nothing

  for (const key in data) {
    const { job, choice, quote } = data[key];

    // CREATE CIRCLE
    const circle = document.createElement("div");
    circle.classList.add("circle", choice.toLowerCase()); // Add class based on choice (pros/cons)
    circle.dataset.quote = quote; // Attach quote to the circle

    // FIND THE CORRESPONDING JOB CONTAINER
    const container = document.getElementById(job);
    if (container) {
      container.appendChild(circle); // Append circle to the container
    }

    circle.addEventListener("mouseenter", (e) => {
      const rect = e.target.getBoundingClientRect(); // Get the circle's position
      quoteDisplay.style.display = "block";
      quoteDisplay.style.left = `${rect.left}px`; // Position based on circle's X position
      quoteDisplay.style.top = `${rect.top - 50}px`; // Position slightly above the circle
      quoteDisplay.textContent = quote || "No quote provided."; // Set quote text
      quoteDisplay.style.opacity = "1"; // Smooth appearance
  });

  circle.addEventListener("mouseleave", () => {
      quoteDisplay.style.display = "none";
      quoteDisplay.style.opacity = "0"; // Smooth disappearance
  });
}
});
