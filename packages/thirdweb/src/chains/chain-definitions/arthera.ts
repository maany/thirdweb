import { defineChain } from "../utils.js";

export const arthera = /* @__PURE__ */ defineChain({
  id: 10242,
  name: "Arthera",
  nativeCurrency: {
    decimals: 18,
    name: "Arthera",
    symbol: "AA",
  },
  blockExplorers: [
    {
      name: "Arthera Explorer",
      url: "https://explorer.arthera.net/",
      apiUrl: "https://explorer.arthera.net/api",
    },
  ],
});
