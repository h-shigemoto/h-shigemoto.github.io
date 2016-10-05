// 透明度を変更する。
// 透明度はopacityに0.0～1.0の間で設定する。
function changeOpacity(start, updownFlg) {

  // 透明度変更対象を取得する。
  target = document.querySelector("#opacityDiv");

  // 透明度を計算する。
  var opacity = start;
  if (updownFlg) {
    opacity += 0.1;
  } else {
    opacity -= 0.1
  }

  // 透明度を変更する。
  if ((0.0 <= opacity) && (opacity <= 1.0)) {
    target.style.opacity = opacity;
    window.setTimeout(changeOpacity, 200, opacity, updownFlg);
  }
}