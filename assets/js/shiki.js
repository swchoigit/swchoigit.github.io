import { codeToHtml } from "https://esm.sh/shiki@3.0.0";

const blocks = document.querySelectorAll("pre > code[class*='language-']");

for (const block of blocks) {
  const lang = block.className.replace("language-", "") || "text";
  const highlightedHtml = await codeToHtml(block.innerText, {
    lang: lang,
    theme: "github-light",
  });

  block.closest("pre").outerHTML = highlightedHtml;
}
