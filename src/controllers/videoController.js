export const hanldeVideo = (req, res) => {
  console.log(req.params);

  return res.send("Video");
};

export const handleEditVideo = (req, res) => {
  return res.send("Edit Video");
};

export const hanldeDeleteVideo = (req, res) => {
  return res.send("Delete Video");
};

export const handleUploadVideo = (req, res) => {
  return res.send("Upload Video");
};
