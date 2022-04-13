import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);
  //alert(inputText);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
