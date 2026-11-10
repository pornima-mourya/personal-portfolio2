
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        formStatus.textContent =
            `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

    });
}

const themeButton = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load the saved theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
} else {
    html.removeAttribute("data-theme");
}

// Update button text
function updateThemeButton() {
    const isDark = html.getAttribute("data-theme") === "dark";

    if (isDark) {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.setAttribute("aria-label", "Switch to light theme");
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.setAttribute("aria-label", "Switch to dark theme");
    }
}

updateThemeButton();

// Toggle and save theme
themeButton.addEventListener("click", function () {
    const isDark = html.getAttribute("data-theme") === "dark";

    if (isDark) {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }

    updateThemeButton();
});
