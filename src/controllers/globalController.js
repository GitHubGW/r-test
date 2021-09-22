let videos = [
  {
    id: 1,
    title: "Video#1",
    rating: 5,
    comments: 2,
    createdAt: "2mins ago",
    views: 60,
  },
  {
    id: 2,
    title: "Video#2",
    rating: 25,
    comments: 2,
    createdAt: "2mins ago",
    views: 30,
  },
  {
    id: 3,
    title: "Video#3",
    rating: 45,
    comments: 12,
    createdAt: "2mins ago",
    views: 20,
  },
];

export const handleHome = (req, res) => {
  res.render("home", { title: "Home", videos });
};
export const handleJoin = (req, res) => res.send("Join");
export const handleLogin = (req, res) => res.send("Login");
export const handleSearch = (req, res) => res.send("Search");
