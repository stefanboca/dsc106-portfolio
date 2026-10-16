const form = document.getElementById("contact");
form?.addEventListener("submit", function (event) {
  event.preventDefault();
  const url = form.action;
  for (const [name, value] of new FormData(form)) {
    const separator = first ? "?" : "&";
    url += `${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    first = false;
  }
  location.href = url;
});
