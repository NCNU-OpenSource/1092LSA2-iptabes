# iptabes rule generator
## 簡介
這是一個 iptabes rule generator web，可以讓對 iptables 使用方法不熟悉的人，透過簡單的下拉選單及填空的方式，得到對應的指令。
為了幫助不太了解相關流程的使用者，我們加了針對 INPUT 的圖像化呈現，讓使用者可以對規則的相關邏輯更加了解。
## 使用技術
* Node.js express
* Bootstrap
* Cytoscape
## 環境安裝 & 啟動
* [安裝 Node.js](https://nodejs.org/zh-tw/download/)
* 在 CMD 輸入 `npm install cytoscape`
* 打開 CMD 輸入 `npm start`
* 打該瀏覽器輸入 localhost:3000
## 功能與使用
* 此網站分三個部分 : 
    * 基本指令 : 列出、清空 iptable 及修改 Policy
    * 規則 : 新增、刪除、插入規則
    * 圖像化 : 將規則圖像化呈現
* 使用 : 
    * 針對需要了解的指令，透過下拉選單及填入的方式做輸入，得到相關指令
    * 按 copy 可以一鍵複製該欄位指令
    * 按 Add to Visualization 可以將該址另加入繪圖區
    * 按 draw 就可以將繪圖區的指令繪製成圖 
* 注意事項 :     
    * 空格僅代表可能需要的條件，依需求填寫即可，不需要全部寫滿
    * 刪除及插入指令需要填入規則行數，為避免刪錯或放錯位置，建議先查看自己的 iptables 做確認喔！
    * 圖像化的部分目前僅供 INPUT 和 F 使用
## 畫面預覽
![image](https://user-images.githubusercontent.com/40049920/123203732-5f85ba00-d4e9-11eb-84cd-529fe1ce3237.png)
## 工作分配
- 蔣毓庭 : 指令圖像化呈現、修了非常一丟丟的頁面格式
- 葉依玲 : 網頁剩下全部
