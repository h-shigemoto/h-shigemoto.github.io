// ローディング画像を表示する。
function displayLoading() {

  // ローディング画像を開く。
  if (loadingWindow == null) {
    loadingWindow = window.open("./img/2/loading.gif");
  } else {
    return;
  }

  // 1000ミリ秒後、ローディング画像を閉じる処理をキューに追加する。
  window.setTimeout(closeLoading, 1000);
}

// ローディング画像を削除する。
function closeLoading() {

  if (loadingWindow == null) {
    return;
  }

  // ローディング画像を閉じる。
  loadingWindow.close();
  loadingWindow = null;
}
