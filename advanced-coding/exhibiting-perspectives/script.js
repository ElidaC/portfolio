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

const circleContainer = document.querySelector(".circle-list");

let lastSubmittedKey = null; // Track the last submitted key

// SUBMIT DATA
setButton.onclick = function () {
  const job = jobsDropdown.value; // Selected job
  const choice = choiceDropdown.value; // Selected choice (Pros/Cons)
  const quote = inputField.value.trim(); // Input text

  // Generate a unique key for the entry
  const newEntryKey = ref.push().key; 
  lastSubmittedKey = newEntryKey; // Save the unique key for the last entry

  // Save the entry with the generated key
  ref.child(newEntryKey).set({ job, choice, quote: quote || "" });

  inputField.value = ""; // Clear input field
};

// REAL-TIME LISTENER
ref.on("value", (snapshot) => {
  const jobContainers = document.querySelectorAll(".circle-list .job-container");

  // Clear all existing circles in the containers
  jobContainers.forEach((container) => (container.innerHTML = ""));

  // Get data from Firebase
  const data = snapshot.val();
  if (!data) return; // If no data, do nothing

  let totalCircles = 0;

  for (const key in data) {
    const { job, choice, quote } = data[key];

    // CREATE CIRCLE
    const circle = document.createElement("div");
    circle.classList.add("circle", choice.toLowerCase()); // Add class based on choice (pros/cons)
    circle.dataset.quote = quote; // Attach quote to the circle

    // Add "P" or "C" text only for the last submitted circle
    if (key === lastSubmittedKey) {
      const text = document.createElement("span");
      text.textContent = choice === "Pros" ? "P" : choice === "Cons" ? "C" : "";
      text.style.cssText = `
        color: white;
        font-size: 19px;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
      circle.appendChild(text);
    }

    // Adjust size and transparency for empty input
    if (!quote) {
      circle.style.width = "20px";
      circle.style.height = "20px";
      circle.style.opacity = "0.2";

      // Prevent hover events for circles without a quote
      circle.addEventListener("mouseenter", () => {});
      circle.addEventListener("mouseleave", () => {});
    } else {
      // Enable hover events for circles with a quote
      circle.addEventListener("mouseenter", (e) => {
        const rect = e.target.getBoundingClientRect(); // Get the circle's position
        quoteDisplay.style.display = "block";
        quoteDisplay.style.left = `${rect.left}px`; // Position based on circle's X position
        quoteDisplay.style.top = `${rect.top - 50}px`; // Position slightly above the circle
        quoteDisplay.textContent = quote; // Set quote text
        quoteDisplay.style.opacity = "1"; // Smooth appearance
      });

      circle.addEventListener("mouseleave", () => {
        quoteDisplay.style.display = "none";
        quoteDisplay.style.opacity = "0"; // Smooth disappearance
      });
    }

    // Randomize circle position
    const container = document.getElementById(job);
    if (container) {
      const containerRect = container.getBoundingClientRect();
      circle.style.position = "absolute";
      circle.style.left = `${Math.random() * (containerRect.width - 30)}px`;
      circle.style.top = `${Math.random() * (containerRect.height - 30)}px`;
      container.appendChild(circle);
    }

    totalCircles++;
  }

  // Resize circles based on total number
  if (totalCircles > 200) {
    const sizeReduction = Math.floor((totalCircles - 200) / 100) + 1;
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      const currentSize = parseInt(circle.style.width || "50px", 10);
      const newSize = Math.max(20, currentSize - sizeReduction); // Minimum size of 20px
      circle.style.width = `${newSize}px`;
      circle.style.height = `${newSize}px`;
    });
  }
});






const image = document.getElementById("image");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

// Show overlay on image click
image.addEventListener("click", () => {
  overlay.style.display = "flex"; // Show overlay
});

// Hide overlay on close button click
closeButton.addEventListener("click", () => {
  overlay.style.display = "none"; // Hide overlay
});

// Hide overlay when clicking outside content
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none"; // Hide overlay
  }
});
