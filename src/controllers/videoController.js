let videos = [
  {
    id: 1,
    title: "Video#1",
    rating: 5,
    comments: 2,
    createdAt: "12mins ago",
    views: 55,
  },
  {
    id: 2,
    title: "Video#2",
    rating: 25,
    comments: 2,
    createdAt: "15mins ago",
    views: 30,
  },
  {
    id: 3,
    title: "Video#3",
    rating: 45,
    comments: 12,
    createdAt: "7mins ago",
    views: 20,
  },
];

export const hanldeVideo = (req, res) => {
  const {
    params: { id },
  } = req;

  const video = videos[id - 1];

  return res.render("video", { title: video.title, video });
};

export const handleGetEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;

  const video = videos[id - 1];

  return res.render("editVideo", { title: `Edit ${video.title}`, video });
};

export const handlePostEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;

  const {
    body: { videoTitle },
  } = req;

  videos[id - 1].title = videoTitle;
  return res.redirect(`/videos/${id}`);
};

export const hanldeDeleteVideo = (req, res) => res.send("Delete Video");

export const handleUploadVideo = (req, res) => res.send("Upload Video");
