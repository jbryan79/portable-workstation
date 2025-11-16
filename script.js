// THEME SWITCHER
const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener("change", (e) => {
  document.documentElement.className = e.target.value;
});

// DYNAMIC PRODUCT CARDS
const productGrid = document.getElementById("productGrid");

const products = [
  {
    name: "Your Laptop",
    price: "$999",
    img: "https://via.placeholder.com/300",
    link: "#"
  }
];

function loadProducts() {
  productGrid.innerHTML = products.map(p => `
    <div class="p-4 bg-gray-800 rounded-xl shadow-xl">
      <img src="${p.img}" class="rounded-lg mb-4"/>
      <h3 class="text-xl font-bold">${p.name}</h3>
      <p class="text-sm opacity-70">${p.price}</p>
      <a href="${p.link}" target="_blank"
         class="mt-3 inline-block px-4 py-2 bg-blue-600 rounded-lg">
         View
      </a>
    </div>
  `).join("");
}
loadProducts();

// CHAT WIDGET
const chatWindow = document.getElementById("aiChatWindow");
const chatToggle = document.getElementById("aiChatToggle");
const chatSend = document.getElementById("aiChatSend");
const chatInput = document.getElementById("aiChatInput");
const chatMessages = document.getElementById("aiChatMessages");

chatToggle.onclick = () => {
  chatWindow.classList.toggle("hidden");
};

chatSend.onclick = async () => {
  const prompt = chatInput.value.trim();
  if (!prompt) return;

  addMessage("user", prompt);
  chatInput.value = "";

  const reply = await askAI(prompt);
  addMessage("bot", reply);
};

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.className = sender === "user" ? "text-right" : "text-left";

  div.innerHTML = `
    <span class="inline-block px-3 py-2 rounded-lg"
      style="background: ${sender === "user" ? "var(--chat-user-bg)" : "var(--chat-bot-bg)"}; 
             color: ${sender === "user" ? "var(--chat-user-text)" : "var(--chat-bot-text)"};">
      ${text}
    </span>
  `;

  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function askAI(prompt) {
  const res = await fetch("/api/ask", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  return data.reply;
}
