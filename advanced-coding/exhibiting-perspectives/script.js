// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyABjQgmJTXhrjk5MEF_ftW45OSgSs8kCmc",
  authDomain: "dataexhibition-ca8b9.firebaseapp.com",
  databaseURL: "https://dataexhibition-ca8b9-default-rtdb.firebaseio.com",
  projectId: "dataexhibition-ca8b9",
  storageBucket: "dataexhibition-ca8b9.appspot.com",
  messagingSenderId: "763992974890",
  appId: "1:763992974890:web:377341188a5fa5bbef4553",
  measurementId: "G-Z2N4W494ZF",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("entries");

// HTML ELEMENTS
const jobsDropdown = document.getElementById("jobs");
const choiceDropdown = document.getElementById("choice");
const inputField = document.getElementById("text-input");
const setButton = document.getElementById("set-button");
const quoteDisplay = document.getElementById("quote-display");

let lastSubmittedKey = null; // Track the last submitted key

// SUBMIT BUTTON LOGIC
setButton.onclick = function () {
  const job = jobsDropdown.value.trim();
  const choice = choiceDropdown.value.trim();
  const quote = inputField.value.trim();

  if (!job || !choice) {
    alert("Please select a job and a choice!");
    return;
  }

  const newEntryKey = ref.push().key; // Generate a unique key
  lastSubmittedKey = newEntryKey; // Save the last submitted key

  // Save the data in Firebase
  ref.child(newEntryKey).set({ job, choice, quote: quote || "" })
    .then(() => {
      console.log("Data successfully submitted.");
      inputField.value = ""; // Clear the input field

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.textContent = "Submission Successful!";
      successMessage.style.cssText = `
        position: absolute;
        top: ${inputField.getBoundingClientRect().bottom + window.scrollY + 10}px;
        left: 50%;
        transform: translateX(-50%);
        background: rgb(255, 0, 200);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        z-index: 1000;
        transition: opacity 0.3s ease-in-out;
      `;
      document.body.appendChild(successMessage);

      // Hide the message after 3 seconds
      setTimeout(() => {
        successMessage.style.opacity = "0"; // Fade out
        setTimeout(() => successMessage.remove(), 300); // Remove from DOM
      }, 3000);
    })
    .catch((error) => console.error("Error submitting data: ", error));
};

// LISTENER TO FETCH DATA AND UPDATE UI
ref.on("value", (snapshot) => {
  const data = snapshot.val();
  console.log("Data from Firebase:", data);

  const jobContainers = document.querySelectorAll(".circle-list .job-container");
  jobContainers.forEach((container) => (container.innerHTML = "")); // Clear existing Circles

  if (!data) {
    console.log("No data found.");
    return;
  }

  const totalEntries = Object.keys(data).length; // Get total number of entries
  const sizeAdjustment = Math.floor(totalEntries / 100); // Calculate size reduction

  for (const key in data) {
    const { job, choice, quote } = data[key];
    const isLastSubmitted = key === lastSubmittedKey; // Check if it is the last submitted entry
    renderCircle(job, choice, quote, isLastSubmitted, sizeAdjustment);
  }
});

// FUNCTION TO RENDER CIRCLES
function renderCircle(job, choice, quote, isLastSubmitted, sizeAdjustment) {
  const container = document.getElementById(job);

  if (!container) {
    console.error(`No container found for job: ${job}`);
    return;
  }

  const circle = document.createElement("div");
  circle.classList.add("circle", choice.toLowerCase());
  circle.style.position = "absolute";

  // Base size of the Circle
  let circleSize = 25 - sizeAdjustment;
  if (circleSize < 5) circleSize = 5; // Minimum size of 5px

  circle.style.width = `${circleSize}px`;
  circle.style.height = `${circleSize}px`;
  circle.style.opacity = quote ? "1" : "0.2";

  // If it's the last submitted circle, add text
  if (isLastSubmitted) {
    const circleText = document.createElement("span");
    circleText.textContent = choice === "Pros" ? "Pro" : "Con";
    circleText.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 11px;
      font-weight: bold;
      color: white;
    `;
    circle.appendChild(circleText);
  }

  // Add hover events for circles with quotes
  if (quote) {
    circle.dataset.quote = quote;

    circle.addEventListener("mouseenter", (e) => {
      const rect = e.target.getBoundingClientRect();
      quoteDisplay.style.display = "block";
      quoteDisplay.style.left = `${rect.left + window.scrollX}px`;
      quoteDisplay.style.top = `${rect.top - 40 + window.scrollY}px`;
      quoteDisplay.textContent = quote;
    });

    circle.addEventListener("mouseleave", () => {
      quoteDisplay.style.display = "none";
    });
  }

  // Random position within the container
  const containerRect = container.getBoundingClientRect();
  circle.style.left = `${Math.random() * (containerRect.width - circleSize)}px`;
  circle.style.top = `${Math.random() * (containerRect.height - circleSize)}px`;

  container.appendChild(circle);
}

// EVENT LISTENER FOR IMAGE OVERLAY
const image = document.getElementById("image");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

// Show overlay on image click
image.addEventListener("click", () => {
  overlay.style.display = "flex";
});

// Hide overlay on close button click
closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Hide overlay when clicking outside content
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
