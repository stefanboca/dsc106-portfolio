let pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "contact/", title: "Contact" },
  { url: "resume/", title: "Resume" },
  { url: "https://github.com/stefanboca", title: "GitHub" },
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const BASE_URL = new URL("./", import.meta.url);
for (let p of pages) {
  let url = new URL(p.url, BASE_URL);
  let a = document.createElement("a");
  a.href = url;
  a.textContent = p.title;
  if (a.host === location.host) {
    a.classList.toggle("current", a.pathname === location.pathname);
  } else {
    a.target = "_blank";
  }
  nav.append(a);
}
