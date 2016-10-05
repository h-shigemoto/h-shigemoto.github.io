// マウス座標表示
function displayMousePoint(e) {

  // マウス座標取得
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  // 座標設定
  document.querySelector("#mouseX").innerHTML = mouseX;
  document.querySelector("#mouseY").innerHTML = mouseY;
}