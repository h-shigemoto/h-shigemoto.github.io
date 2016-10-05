// カウントダウン
function countdown() {
  // 現在時刻
  var now = new Date();
  // 翌年の1月1日
  var next_year = now.getFullYear() + 1;
  var target = new Date("January 01," + next_year + " 00:00:00");
  // 差分（+を付けると.valueOfが呼ばれる）
  var sub = target - now;

  var day_base = 24 * 60 * 60 * 1000

  // 日
  var day = Math.floor(sub / day_base) + "日";
  // 時間
  var hour = (Math.floor((sub % day_base) / (60 * 60 * 1000))) + "時間";
  // 分
  var minute = (Math.floor((sub % day_base) / (60 * 1000)) % 60) + "分";
  // 秒
  var second = (Math.floor((sub % day_base) / 1000) % 60 % 60) + "秒";

  //設定
  document.querySelector("#targetYearTitle").innerHTML = next_year;
  document.querySelector("#targetYear").innerHTML = next_year + "年まで、残り";
  document.querySelector("#countdown").innerHTML = day + hour + minute + second;

  // 1000ミリ秒後にキューを再登録
  setTimeout(countdown, 1000);
}
