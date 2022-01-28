const luckeyMoney = [1, 5, 10, 20, 30, 40, 50];

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const transaction = document.querySelector(".transaction");


modalBtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * luckeyMoney.length);
  const money = luckeyMoney[random];
  const date = new Date() ;
  const ID = date.getSeconds()+"/"+date.getMinutes()+"/"+date.getHours()+"/"+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

  modal.classList.add("open-modal");
  transaction.innerHTML = `<p>$ ${luckeyMoney[random]}k</p><span>ID: ${ID}</span>`;
  
  // add data
  const name = document.getElementById("name");
  addToLocalStorage(ID, name.value, money);
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

// local storage
function addToLocalStorage(id, name, money){
  const grocery = {id, name, money};
  items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}