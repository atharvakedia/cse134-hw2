// Custom Element #1: <profile-badge> is purely presentational; its look
// comes entirely from CSS (see the inline <style> block on pages that use
// it). Registering it here just avoids any flash-of-unstyled-element
// weirdness before the stylesheet paints.
customElements.define('profile-badge', class extends HTMLElement {});

// Custom Element #2: <hello-log> prints a greeting to the console and does
// NOT modify the DOM in any way (no innerHTML, no appended/removed nodes).
customElements.define('hello-log', class extends HTMLElement {
  connectedCallback() {
    console.log('Hello World! (printed by <hello-log>)');
  }
});
