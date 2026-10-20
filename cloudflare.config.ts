export default {
  worker: {
    name: "cabinview-landing",
    compatibilityDate: "2026-10-20",
    domains: ["cabinview.kodlabs.in"],
    workersDev: false,
    previewUrls: false,
    assets: {
      htmlHandling: "drop-trailing-slash",
      notFoundHandling: "404-page",
    },
  },
};
