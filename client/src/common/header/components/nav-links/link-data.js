// names and icons links
const named = [
  {
    svg: "/icons/nav-link/svg/dashboard.svg",
    fallBack: "/icons/nav-link/fallback-png/dashboard.png",
    alt: "dashboard-icon",
    name: "Dashboard",
    route: "dashboard",
  },
  {
    svg: "/icons/nav-link/svg/piggy-bank.svg",
    fallBack: "/icons/nav-link/fallback-png/piggy-bank.png",
    alt: "piggy-bank-icon",
    name: "Make a Report",
    route: "create-report",
  },
  {
    svg: "/icons/nav-link/svg/pencil.svg",
    fallBack: "/icons/nav-link/fallback-png/pencil.png",
    alt: "pencil-icon",
    name: "Plan a Budget",
    route: "create-budget",
  },
];
// just icon links
const noName = [
  {
    svg: "/icons/nav-link/svg/account.svg",
    fallBack: "/icons/nav-link/fallback-png/account.png",
    alt: "account-icon",
    route: "account",
  },
  {
    svg: "/icons/nav-link/svg/settings.svg",
    fallBack: "/icons/nav-link/fallback-png/settings.png",
    alt: "settings-icon",
    route: "settings",
  },
  {
    svg: "/icons/nav-link/svg/logout.svg",
    fallBack: "/icons/nav-link/fallback-png/logout.png",
    alt: "logout-icon",
    route: "/",
  },
];

export { named, noName };
