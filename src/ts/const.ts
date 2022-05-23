export const SELECTOR = {
  HEADER: "header",
  BAGIC: "header-bagic",
  BAGIC_WRAPPER: "bagic-wrapper",
  BAGIC_HOME_BUTTON: "bagic__home-button",
  MAIN: "main",
  LOADING_WRAPPER: "loading-wrapper",
  LOGIN_WRAPPER: "login-wrapper",
  LOGIN_LOGO: "login-logo",
  LOGIN_BUTTON_WRAPPER: "login-button-wrapper",
  LOGIN_BUTTON_NAVER: "login-button__naver",
  LOGIN_BUTTON_KAKAO: "login-button__kakao",
  LOGIN_BUTTON_CONTENT: "button-text",
  HOME_WRAPPER: "home-wrapper",
  HOME_MAP_WRAPPER: "map-wrapper",
  MENUBAR_TOGGLE_BUTTON: "toggle-button",
  MAP_MY_DIRECTION_BUTTON: "map__my-direction-button",
  SEARCH_WRAPPER: "search-wrapper",
  SEARCH_KEYWORD: "search__keyword",
  SEARCH_INPUT_BUTTON: "search__keyword-button",
  HOME_RECOMMEND_WRAPPER: "recommend-wrapper",
  RECOMMEND_MOVE_BUTTON: "recommend__move-button",
  RECOMMEND_MOVE_BUTTON_ICON: "recommend__move-button__icon",
  RECOMMEND_LIST_WRAPPER: "recommend__list-wrapper",
  RECOMMEND_LIST: "recommend__list",
  RECOMMEND_LIST_CONTENTT: "contents-wrapper",
  CONTENT_NAME: "content__name",
  CONTENT_STAR: "content__star",
  CONTENT_COMMENT: "content__comment",
  CONTENT_TIME: "content__time",
  CONTENT_BOOKMARK: "content__bookmark",
  MY_REVEIW_WRAPPER: "my-review-wrapper",
  MY_REVIEW_LIST_WRAPPER: "my-reveiw__list-wrapper",
  MY_REVIEW_LIST: "my-review__list",
  MY_REVIEW_DATE: "my-review__date",
  MY_REVIEW_CONTENT: "my-review__content",
  MY_REVIEW_CONTENT_WRAPPER: "my-review__content-wrapper",
  MY_REVIEW_CONTENT_NAME: "my-review__content__name",
  MY_REVIEW_CONTENT_STAR: "my-review__content__star",
  REVIEW_WRAPPER: "review-wrapper",
  REVIEW_CONTENT_WRAPPER: "review__content-wrapper",
  REVIEW_CONTENT_MAIN: "review__content__main",
  REVIEW_CONTENT_ANOTHER: "review__content__another",
  REVIEW_STAR_WRAPPER: "review__star-wrapper",
  REVIEW_STAR_TITLE: "review__star__title",
  REVIEW_STAR: "review__star",
  REVIEW_BUTTON_WRAPPER: "review__button-wrapper",
  REVIEW_BUTTON_SUBMIT: "review__button__submit",
  REVIEW_BUTTON_NEXTDAY: "review__button__next-day",
  REVIEW_DETAIL_WRAPPER: "review-detail-wrapper",
  REVIEW_DETAIL_TITLE: "review-detail__title",
  REVIEW_DETAIL_CONTENTS_WRAPPER: "review-detail__content-wrapper",
  REVIEW_DETAIL_PAIR_CONTENT: "review-detail__pair-content",
  REVIEW_DETAIL_NULL_CONTENT: "review-detail__null-content",
  REVIEW_DETAIL_BUTTON_WRAPPER: "review-detail__button-wrapper",
  REVIEW_DETAIL_SUBMIT_BUTTON: "review-detail__submit-button",
  REVIEW_DETAIL_SELECT: "select",
  REVIEW_LOCATION_WRAPPER: "review-location-wrapper",
  REVIEW_LOCATION_TITLE: "review-location__title",
  REVIEW_LOCATION_CONTENTS_WRAPPER: "review-location__contents-wrapper",
  REVIEW_LOCATION_CONTENTS: "review-location__contents",
  SIDEBAR: "sidebar",
  MENUBAR: "menubar",
  MENUBAR_WRAPPER: "menubar-wrapper",
  MENUBAR_CONTENTS_WRAPPER: "menubar__contents-wrapper",
  MENUBAR_CONTENTS: "menubar__contents",
  MENUBAR_CONTENTS_MY_REVIEW: "menubar__contents__my-review",
  MENUBAR_CONTENTS_BOOKMARK: "menubar__contents__bookmark",
  MENUBAR_OVERLAY: "menubar__overlay",
  FOOTER: "footer",
  NONE: "none",
};

export const IMG = {
  LOGO: "https://star-to.s3.ap-northeast-2.amazonaws.com/img/loading.png",
  LOGIN_LOGO: "https://star-to.s3.ap-northeast-2.amazonaws.com/img/login.png",
  FILL_STAR:
    "https://star-to.s3.ap-northeast-2.amazonaws.com/img/fill-star.png",
  EMPTY_STAR:
    "https://star-to.s3.ap-northeast-2.amazonaws.com/img/empty-star.png",
  FILL_BOOKMARK:
    "https://star-to.s3.ap-northeast-2.amazonaws.com/img/fill-bookmark.png",
  EMPTY_BOOKMARK:
    "https://star-to.s3.ap-northeast-2.amazonaws.com/img/empty-bookmark.png",
  PLUS: "https://star-to.s3.ap-northeast-2.amazonaws.com/img/plus.png",
  HOME_LOGO: "https://star-to.s3.ap-northeast-2.amazonaws.com/img/logo.png",
  MY_LOCATION:
    "https://star-to.s3.ap-northeast-2.amazonaws.com/img/my-location.png",
  SEARCH: "https://star-to.s3.ap-northeast-2.amazonaws.com/img/search.png",
};

export const PATH = {
  HOME: "/",
  LOGIN: "/login",
  LOADING: "/loading",
  DETAIL: "/detail",
  REVIEW: "/review",
  MY_REVIEW: "/my-review",
  BOOKMARK: "/bookmark",
  REVEIW_DETAIL: "/review-detail",
  REVIEW_LOCATION: "/review-location",
};

export const API_PATH = {
  LOGIN_CHECK: "/api/login/check",
  LOGIN_NAVER: "/api/login/naver",
  LOGIN_KAKAO: "/api/login/kakao",
  MY_REVIEW: "/api/my-review",
  PLACE: "/api/place",
  BOOKMARK: "/api/bookmark",
  REVEIW_CONTENT: "/api/review-content",
  REVIEW_INFO: "/api/review-info",
};

export const ACTION = {
  MENUBAR_VISIBLE: "visibleMenubar",
  UPDATE_USER_INFO: "updateUserInfo",
  INIT_APP: "initAPP",
  LOAD_PLACE_LIST: "loadPlaceList",
};

export const STATIC = {
  MAX_COUTING_STARS: 5,
};

export const EVENT = {
  CHANGE_LOCATION: "changeLocation",
};
