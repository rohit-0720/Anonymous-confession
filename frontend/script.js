const API_URL = "http://localhost:5000/api/confessions";

const confessionInput = document.getElementById("confessionInput");
const submitBtn = document.getElementById("submitBtn");
const confessionList = document.getElementById("confessionList");

// Fetch and display all confessions
async function fetchConfessions() {
  const res = await fetch(API_URL);
  const data = await res.json();

  confessionList.innerHTML = "";
  data.forEach((confession) => {
    const div = document.createElement("div");
    div.classList.add("confession");
    div.textContent = confession.text;
    confessionList.appendChild(div);
  });
}

// Post a new confession
submitBtn.addEventListener("click", async () => {
  const text = confessionInput.value.trim();
  if (!text) {
    alert("Please write something!");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  confessionInput.value = "";

  // Small fade animation refresh
  confessionList.style.opacity = 0.5;
  setTimeout(() => {
    fetchConfessions();
    confessionList.style.opacity = 1;
  }, 400);
});

// Initial load
fetchConfessions();
