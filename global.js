const pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "contact/", title: "Contact" },
  { url: "resume/", title: "Resume" },
  { url: "https://github.com/stefanboca", title: "GitHub" },
];

const nav = document.createElement("nav");
document.body.prepend(nav);

const BASE_URL = new URL("./", import.meta.url);
for (let p of pages) {
  const url = new URL(p.url, BASE_URL);
  const a = document.createElement("a");
  a.href = url;
  a.textContent = p.title;
  if (a.host === location.host) {
    a.classList.toggle("current", a.pathname === location.pathname);
  } else {
    a.target = "_blank";
  }
  nav.append(a);
}

document.body.insertAdjacentHTML(
  "afterbegin",
  `
<label class="color-scheme">
  Theme:
  <select>
    <option value="light dark">Automatic</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>
`,
);
function setColorScheme(value) {
  document.documentElement.style.setProperty("color-scheme", value);
  localStorage.colorScheme = value;
}

const select = document.querySelector("label.color-scheme > select");
select.addEventListener("input", (event) => setColorScheme(event.target.value));

const colorScheme =
  "colorScheme" in localStorage ? localStorage.colorScheme : "light dark";
setColorScheme(colorScheme);
select.value = colorScheme;
