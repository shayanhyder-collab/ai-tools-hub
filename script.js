
const aiTools = [
    {
        name: "ChatGPT",
        category: "Writing",
        description: "Write, learn, brainstorm and solve everyday problems.",
        url: "https://chatgpt.com/",
        icon: "💬"
    },
    {
        name: "Gemini",
        category: "Productivity",
        description: "Explore ideas, get explanations and work with AI.",
        url: "https://gemini.google.com/",
        icon: "✨"
    },
    {
        name: "Canva AI",
        category: "Image",
        description: "Create designs and explore AI-powered creative tools.",
        url: "https://www.canva.com/",
        icon: "🎨"
    },
    {
        name: "GitHub Copilot",
        category: "Coding",
        description: "Get AI assistance while writing and understanding code.",
        url: "https://github.com/features/copilot",
        icon: "💻"
    },
    {
        name: "Grammarly",
        category: "Writing",
        description: "Improve clarity, grammar and writing style.",
        url: "https://www.grammarly.com/",
        icon: "📝"
    },
    {
        name: "Perplexity",
        category: "Productivity",
        description: "Explore questions and research topics with cited sources.",
        url: "https://www.perplexity.ai/",
        icon: "🔎"
    }
];

const toolsGrid = document.getElementById("toolsGrid");

function displayTools(tools) {
    toolsGrid.innerHTML = "";

    tools.forEach(tool => {
        const card = document.createElement("article");
        card.className = "tool-card";

        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <span class="tool-category">${tool.category}</span>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a
                class="visit-btn"
                href="${tool.url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Website ↗
            </a>
        `;

        toolsGrid.appendChild(card);
    });
}

displayTools(aiTools);

const searchInput = document.getElementById("searchInput");

let selectedCategory = "All";

function filterTools() {
    const searchText = searchInput.value.toLowerCase();

    const filteredTools = aiTools.filter(tool => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchText) ||
            tool.description.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            tool.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayTools(filteredTools);
}

searchInput.addEventListener("input", filterTools);

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterTools();
    });
});

function displayTools(tools) {
    toolsGrid.innerHTML = "";

    if (tools.length === 0) {
        toolsGrid.innerHTML =
            '<p class="no-results">No AI tools found. Try another search.</p>';
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement("article");
        card.className = "tool-card";

        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <span class="tool-category">${tool.category}</span>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a class="visit-btn"
               href="${tool.url}"
               target="_blank"
               rel="noopener noreferrer">
               Visit Website ↗
            </a>
        `;

        toolsGrid.appendChild(card);
    });
}


console.log("AI Tools Website loaded successfully!");
console.log("Total AI tools:", aiTools.length);

