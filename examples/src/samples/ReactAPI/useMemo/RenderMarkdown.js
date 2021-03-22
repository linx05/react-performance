import sanitizeHTML from "sanitize-html";
import marked from "marked";

const options = {
  skipSanitize: false,
  markedOptions: null,
  sanitizeOptions: {
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "p",
      "a",
      "ul",
      "ol",
      "nl",
      "li",
      "b",
      "i",
      "strong",
      "em",
      "strike",
      "code",
      "hr",
      "br",
      "div",
      "table",
      "thead",
      "caption",
      "tbody",
      "tr",
      "th",
      "td",
      "pre",
      "iframe",
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src"],
    },
    selfClosing: [
      "img",
      "br",
      "hr",
      "area",
      "base",
      "basefont",
      "input",
      "link",
      "meta",
    ],
    allowedSchemes: ["http", "https", "ftp", "mailto"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
  },
};

export const renderMarkdown = (markdown) => {
  console.log("%cGenerating Markdown", "color: red;");

  if (options.markedOptions) {
    marked.setOptions(options.markedOptions);
  }
  const tokens = marked.lexer(markdown);
  const html = marked.parser(tokens);

  return options.skipSanitize
    ? html
    : sanitizeHTML(html, options.sanitizeOptions);
};
