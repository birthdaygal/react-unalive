export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>When You Will Die</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Created by</small>
        <a href="https://github.com/birthdaygal" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/197168742?v=4"
            alt="profile picture"
          />
          <p>birthdaygal</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}
