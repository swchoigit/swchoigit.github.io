import { createHighlighter } from "https://esm.sh/shiki@3.0.0";

const blocks = document.querySelectorAll("pre > code[class*='language-']");

if (blocks.length > 0) {
  const langs = new Set(
    Array.from(blocks, (b) => b.className.replace("language-", "") || "text"),
  );

  const highlighter = await createHighlighter({
    langs: [...langs],
    themes: ["github-light"],
  });

  blocks.forEach((block) => {
    const highlightedHtml = highlighter.codeToHtml(block.innerText, {
      lang: block.className.replace("language-", "") || "text",
      theme: "github-light",
    });

    block.closest("pre").outerHTML = highlightedHtml;
  });
}
