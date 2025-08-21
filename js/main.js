function loadHeader() {
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      highlightCurrentPage();
    });
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadHeader);