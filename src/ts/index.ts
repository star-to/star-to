import { ACTION } from "@/ts/const";
import Action from "@component/state/action";
import MapInfo from "@component/state/map-info";
import MyMap from "@component/main/my-map";
import ReviewInfo from "@component/state/review-info";
import Router from "@/ts/router";
import Toast from "@component/modals/toast";
import UserInfo from "@component/state/user-info";
import { debounce } from "@component/util";

export type AppParams = {
  action: Action;
  userInfo: UserInfo;
  myMap: MyMap;
  mapInfo: MapInfo;
  reviewInfo: ReviewInfo;
};

function main() {
  // try {
  //   Android;
  // } catch (error) {
  //   location.href = "/web.html";
  //   return;
  // }

  const action = new Action();
  const userInfo = new UserInfo(action);
  const mapInfo = new MapInfo(action);
  const reviewInfo = new ReviewInfo(action);
  const myMap = new MyMap(action, mapInfo);

  action.createObservers(ACTION.INIT_APP);
  action.createObservers(ACTION.UPDATE_MY_REVIEW);
  action.createObservers(ACTION.SELECT_PLACE_MARKER);
  action.createObservers(ACTION.PLACE_LAYER_DOWN);
  action.createObservers(ACTION.PLACE_LAYER_UP);
  myMap.init();
  userInfo.init();
  reviewInfo.init();
  const params = {
    action,
    userInfo,
    myMap,
    mapInfo,
    reviewInfo,
  };
  new Router(params);
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});

const handleResize = debounce(() => {
  Toast.show(
    "화면 크기가 변경되었습니다! 화면을 다시 불러오겠습니다.",
    2000,
    () => location.reload()
  );
});

window.addEventListener("resize", handleResize);
