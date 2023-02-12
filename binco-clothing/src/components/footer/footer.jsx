import "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <a href="https://github.com/Chargk">
        <i class="footer-links brands-footer fa-brands fa-github fa-2x"></i>
      </a>
      <a href="https://steamcommunity.com/id/Chargerrrok">
        <i class="footer-links fa-brands brands-footer fa-steam fa-2x"></i>
      </a>
      <a href="https://twitter.com/zxcharger">
        <i class="footer-links brands-footer fa-brands fa-twitter fa-2x"></i>
      </a>
    </footer>
  );
}

export default Footer;
