let videos = [
  {
    title: "1번째",
    rating: 5,
    comments: 2,
    createAt: "2분전",
    views: 1,
    id: 1,
  },
  {
    title: "2번째",
    rating: 5,
    comments: 2,
    createAt: "2분전",
    views: 59,
    id: 2,
  },
  {
    title: "3번째",
    rating: 5,
    comments: 2,
    createAt: "2분전",
    views: 59,
    id: 3,
  },
];

// 글로벌
export const tranding = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

// 비디오라우터
export const watch = (req, res) => {
  const { id } = req.params;
  // 동영상 한개만 보는거니까 고름.
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  // 동영상 한개만 보는거니까 고름.
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editting ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  res.redirect(`/videos/${id}`);
};

// 비디오 업로트 페이지로 가는 로직
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload" });
};

// 비디오 업로드를 하는 로직
export const postUpload = (req, res) => {
  // videos arr에 추가 예정
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createAt: "1분전",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
