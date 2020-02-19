module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/case-studies": { page: "/case-studies" },
      "/contact": { page: "/contact" }
    };
  }
};
