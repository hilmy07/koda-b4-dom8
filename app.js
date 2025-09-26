require.config({
  baseUrl: ".",
  paths: {
    jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min",
    axios: "https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min",
    app: "app",
  },
});

require(["app/main"], function () {
  console.log("✅ Main module loaded");
});
