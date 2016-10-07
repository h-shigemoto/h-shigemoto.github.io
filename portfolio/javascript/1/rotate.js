// 要素を回転させる。
function rotate() {

  // 回転方向が設定されていない場合、初期設定しておく。
  if (rotateDirection === undefined) {
    rotateDirection = 0;
  }

  // 角度計算する。
  rotateRange += 5;
  rotateRange %= 360;

  // 回転軸を決める（標準はrotate（Z軸回転）にしておく）。
  var rangeStr = "rotate(" + rotateRange + "deg)";
  if (rotateDirection === 1) {
    rangeStr = "rotateX(" + rotateRange + "deg)";
  } else if (rotateDirection === 2) {
    rangeStr = "rotateY(" + rotateRange + "deg)";
  }

  document.querySelector("#rotateImg").style.transform = rangeStr;
}

// 回転軸を変更する。
function changeRotateDirection() {

  // 回転軸を設定する（0：Z軸、1：X軸、2：Y軸）。
  if (rotateDirection === 0) {
    rotateDirection = 1;
  } else if (rotateDirection === 1) {
    rotateDirection = 2;
  } else {
    rotateDirection = 0;
  }
}
