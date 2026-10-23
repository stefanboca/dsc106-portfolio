import { fetchJSON, renderProjects } from "../global.js";

const projects = await fetchJSON("../lib/projects.json");
const projectsTitle = document.querySelector(".projects-title");
projectsTitle.innerHTML = `${projects.length} Projects`;

const projectsContainer = document.querySelector(".projects");
renderProjects(projects, projectsContainer, "h2");
