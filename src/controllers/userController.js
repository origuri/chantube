// 글로벌 라우터
export const join = (req, res) => res.send("회원가입페이지");
export const login = (req, res) => res.send("로그인페이지");

// 유저라우터
export const edit = (req, res) => res.send("프로필 수정");
export const remove = (req, res) => res.send("회원탈퇴");
export const see = (req, res) => res.send("다른 유저 프로필");
export const logout = (req, res) => res.send("로그아웃페이지");




