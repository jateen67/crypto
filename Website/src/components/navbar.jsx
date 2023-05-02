export default function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        <nav class="topnav">
          <ul>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({ top: 684, left: 0, behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
