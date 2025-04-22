export function getFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
      <div class="footer-container">
        <p>&copy; ${new Date().getFullYear()} E-Shop | Built with ❤️ by Apoorv</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    `;
  return footer;
}
