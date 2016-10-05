// 要素を回転させる。
function rotate() {

  // 回転方向が設定されていない場合、初期設定しておく。
  if (rotateDirection === undefined) {
    rotateDirection = 0;
  }

  // 角度計算する。
  if (rotateDirection === 0) {
    rotateRange += 5;
  } else {
    rotateRange -= 5;
  }
  rotateRange %= 360;

  var rangeStr = "rotate(" + rotateRange + "deg)";
  document.querySelector("#rotateDiv").style.transform = rangeStr;
}

// 回転方向を変更する。
function changeRotateDirection() {

  // 回転方向を設定する。
  if (rotateDirection === 0) {
    rotateDirection = 1;
  } else {
    rotateDirection = 0;
  }
}
