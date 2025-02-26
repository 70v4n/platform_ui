const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "https://localhost:3333/studio/:path*"
      : "/studio/index.html"
}

module.exports = {
  
  rewrites: () => [
    STUDIO_REWRITE
  ]


}