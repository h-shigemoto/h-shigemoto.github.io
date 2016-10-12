// 要素を追加する。
function addElement() {

  // 要素を追加する。
  var child = createElement(elementIndex);
  var parent = document.querySelector("#elementTargetDiv");
  parent.appendChild(child);

  elementIndex++;
}

// 要素を削除する。
function removeElement() {

  // 既に追加要素が存在しない場合、処理しない。
  if (elementIndex === 0) {
    return;
  }

  elementIndex--;

  // 要素を削除する。
  var childId = getElementId(elementIndex);
  var child = document.querySelector("#" + childId);
  var parent = document.querySelector("#elementTargetDiv");
  parent.removeChild(child);
}

// 追加用の要素を作成する。
function createElement(index) {

  // 追加要素を作成する。
  var element = document.createElement("div");
  element.id = getElementId(index);
  element.innerHTML = (index + 1) + "個目の追加要素です。";

  return element;
}

// 要素のIDを取得する。
function getElementId(index) {
  return "koyupiElmDiv" + index;
}
