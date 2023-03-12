module.exports = {
  ci: {
    collect: {
      settings: { chromeFlags: "--no-sandbox  --headless --disable-gpu" },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
