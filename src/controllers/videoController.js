// 글로벌
export const tranding = (req, res) => {
    const videos = [
        {
            title: "1번째",
            rating : 5,
            comments : 2,
            createAt: "2분전",
            views:59,
            id:1
        },
        {
            title: "2번째",
            rating : 5,
            comments : 2,
            createAt: "2분전",
            views:59,
            id:1
        },
        {
            title: "3번째",
            rating : 5,
            comments : 2,
            createAt: "2분전",
            views:59,
            id:1
        },
       
    ];
    return res.render("home", {pageTitle:"Home", videos})
};

export const search = (req, res) => res.send("동영상 검색");

// 비디오라우터 
export const see = (req, res) => res.render("watch", {pageTitle:"Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle:"Edit"});
export const remove = (req, res) => res.send("동영상 삭제");
export const upload = (req, res) => res.send("동영상 업로드");


