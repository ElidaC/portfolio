const firebaseConfig = {
    apiKey: "AIzaSyABjQgmJTXhrjk5MEF_ftW45OSgSs8kCmc",
    authDomain: "dataexhibition-ca8b9.firebaseapp.com",
    projectId: "dataexhibition-ca8b9",
    storageBucket: "dataexhibition-ca8b9.firebasestorage.app",
    messagingSenderId: "763992974890",
    appId: "1:763992974890:web:377341188a5fa5bbef4553",
    measurementId: "G-Z2N4W494ZF"
  };

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-database.js";

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const quoteDisplay = document.getElementById("quoteDisplay");

  onValue(ref(db, "entries"), (snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
      const { job, choice, quote } = data[key];
      const container = document.getElementById(job);
      const circle = document.createElement("div");
      circle.classList.add("circle", choice.toLowerCase());
      circle.textContent = choice === "Pros" ? "P" : "C";
      circle.dataset.quote = quote;
      container.appendChild(circle);

      circle.addEventListener("click", () => {
        quoteDisplay.textContent = quote || "No quote provided.";
      });
    }
  });