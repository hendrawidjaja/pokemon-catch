export const GCOLOR = {
  PRIMARY: "#333335",
  SECONDARY: "#888888",
  TERTIER: "#dcdcdc",
  GRAY: "hsl(0, 0%, 7%)",
  GRAY24: "hsl(0, 0%, 24%)",
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
    "calc(0.4em  + 0.50vw)" /* 0 */,
    "calc(0.5em  + 0.60vw)",
    "calc(0.7em  + 0.70vw)" /* 2 */,
    "calc(0.8em  + 0.80vw)",
    "calc(0.9em  + 0.90vw)",
    "calc(1.2em  + 1.00vw)",
    "calc(1.4em  + 1.20vw)",
    "calc(1.6em  + 1.40vw)",
  ],
};

export const mq = GMQ.map((mq) => `@media (min-width: ${mq}px)`);
