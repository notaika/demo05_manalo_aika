import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function loadComplete() {
  console.log("Page has finished loading.");
}
document.addEventListener("DOMContentLoaded", loadComplete);
