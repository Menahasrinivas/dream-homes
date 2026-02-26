window.addEventListener("DOMContentLoaded", () => {

  fetch("../header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach(el => new bootstrap.Dropdown(el));
    });

  fetch("../footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});