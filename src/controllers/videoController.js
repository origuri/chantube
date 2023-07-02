const fakeUser = {
    username : "chan",
    loggedIn : true ,
}

// 글로벌
export const tranding = (req, res) => res.render("home", {pageTitle:"Home", fakeUser});

export const search = (req, res) => res.send("동영상 검색");

// 비디오라우터 
export const see = (req, res) => res.render("watch", {pageTitle:"Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle:"Edit"});
export const remove = (req, res) => res.send("동영상 삭제");
export const upload = (req, res) => res.send("동영상 업로드");


