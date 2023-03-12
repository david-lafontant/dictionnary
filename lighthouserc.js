module.exports = {
  ci: {
    collect: {
      settings: {
        hostname: "127.0.0.1",
        chromeFlags: "--no-sandbox  --headless --disable-gpu",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
