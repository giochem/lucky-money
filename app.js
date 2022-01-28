// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const number = [0,1,2,3,4,5,6,7,8,9];
const luckeyMoney = [1, 5, 10, 20, 30, 40, 50];

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const transaction = document.querySelector(".transaction");

modalBtn.addEventListener("click", function () {
  const randomMoney = Math.floor(Math.random() * luckeyMoney.length);
  let ID = "";
  for(let i = 0;  i < 8; i++){
    const radomID = Math.floor(Math.random() * number.length);
    ID += number[radomID];
  }
  console.log(ID);
  modal.classList.add("open-modal");
  transaction.innerHTML = `<p>$ ${luckeyMoney[randomMoney]}k</p><span>ID: ${ID}</span>`;
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

