// 入力値をラベルに表示する。
function displayClassLabel() {

  // 入力値を取得する。
  var name = document.querySelector("#class_name").value;
  var age = document.querySelector("#class_age").value;

  // インスタンス化
  var person = new Person(name, age);
  // 結果を設定する。
  document.querySelector("#class_result").innerHTML = person.getSelf();
}

// 人間クラス
var Person = function(name, age) {

  this.name = name;
  this.age = age;
}

// getSelfメソッド
Person.prototype.getSelf = function() {

  return this.name + "さんは、 " + this.age + "歳です。"
}