(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const addressEl = document.getElementById("token-address");
  const copyBtn = document.getElementById("copy-ca");
  const feedback = document.getElementById("copy-feedback");

  if (copyBtn && addressEl) {
    copyBtn.addEventListener("click", async () => {
      const text = addressEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "COPIED";
        if (feedback) feedback.hidden = false;
        setTimeout(() => {
          copyBtn.textContent = "COPY";
        }, 1800);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(addressEl);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        copyBtn.textContent = "SELECT";
      }
    });
  }

  // Placeholders — replace when real links arrive
  const LINKS = {
    buy: "#", // pump.fun URL
    telegram: "https://t.me/c/4450451644?boost",
    x: "https://x.com/FOR4FUN5465",
    dexscreener: "#", // Dexscreener page
  };

  const map = [
    ["buy-link", LINKS.buy],
    ["buy-link-inline", LINKS.buy],
    ["telegram-link", LINKS.telegram],
    ["social-telegram", LINKS.telegram],
    ["social-x", LINKS.x],
    ["social-dex", LINKS.dexscreener],
  ];

  for (const [id, href] of map) {
    const el = document.getElementById(id);
    if (el && href && href !== "#") el.setAttribute("href", href);
  }
})();
