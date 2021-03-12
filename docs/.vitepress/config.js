module.exports = {
  title: "CCA Docs",
  description: "Details about High School CCA offerings.",
  // base: "/ccas/",

  themeConfig: {
    nav: [
      { text: "CCAs", link: "/ccas/" },
      { text: "Clubs", link: "/clubs/" },
      { text: "Instructors", link: "/instructors/" },
    ],
    sidebar: {
      "/": getMainSidebar(),
    },
  },
};

function getMainSidebar() {
  return [
    {
      text: "CCAs",
      children: [
        { text: "Home", link: "/" },
        { text: "Programming", link: "/ccas/programming" },
        { text: "Golf", link: "/ccas/golf" },
      ],
    },
    {
      text: "Clubs",
      children: [
        { text: "Home", link: "/" },
        { text: "Chess Club", link: "/clubs/chess" },
        { text: "Niffties", link: "/clubs/niffties" },
      ],
    },
    {
      text: "Instructors",
      children: [
        { text: "Home", link: "/instructors/" },
        { text: "Mario", link: "/instructors/mario" },
        { text: "Luigi", link: "/instructors/luigi" },
        { text: "Peach", link: "/instructors/peach" },
      ],
    },
  ];
}
