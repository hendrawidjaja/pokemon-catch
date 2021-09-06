export const GCOLOR = {
  PRIMARY: "#333335",
  SECONDARY: "#888888",
  TERTIER: "#dcdcdc",
  GRAY: "#121212",
  GRAY24: "#aaaaaa",
  BEIGE: "#D9CAB3",
  BLUEISH: "#b3c2d9",
};

/* Media Queries    0    1    2    3    4 */
export const GMQ = [320, 414, 768, 992, 1200];

export const GSPACER = {
  GUTTER: ["0.75rem", "0.95rem", "1rem", "1.2rem", "1.4rem"],
};

export const GFONT = {
  SIZE: [
    "calc(0.40em  + 0.50vw)" /* 0 */,
    "calc(0.50em  + 0.60vw)",
    "calc(0.65em  + 0.70vw)" /* 2 */,
    "calc(0.80em  + 0.80vw)",
    "calc(0.90em  + 0.90vw)",
    "calc(1.20em  + 1.00vw)",
    "calc(1.40em  + 1.20vw)",
    "calc(1.60em  + 1.40vw)",
  ],
};

export const mq = GMQ.map((mq) => `@media (min-width: ${mq}px)`);
