export class Layout {
  constructor({ router, children }) {
    this.router = router;
    this.children = children;
  }

  render() {
    const headerHTML = `<header>
    Header
    <nav>
    <a href="/">Home</a>
    <a href="/auth">Auth</a>
    <a href="/about-us">About-us</a>
    </nav>
    </header>`;

    return `
    ${headerHTML}
    <main>
    ${this.children}
    </main>
    `;
  }
}
