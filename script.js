let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let txt = document.getElementById("input-text").value;
  CheckPalindrome(txt);
});
function CheckPalindrome(txt) {
  let txt_new = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = txt_new.length;
  let halflen = Math.floor(len / 2);
  let result = document.getElementById("result");
  let i;
  for (i = 0; i < halflen; i++) {
    if (txt_new[i] != txt_new[len - 1 - i]) {
      // result.textContent = "Not A Palindrome";
      result.innerHTML = "Not A Palindrome";
      return;
    }
  }
  result.innerHTML = "It's A Palindrome";
}

let btn1 = document.getElementById("btn1");
let result = document.getElementById("result");
let clearinput = document.getElementById("input-text");
btn1.addEventListener("click", () => {
  clearinput.value = "";
  result.innerHTML = "";
});
