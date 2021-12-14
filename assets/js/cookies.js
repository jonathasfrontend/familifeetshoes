
const cookieBox = document.querySelector(".wrapper");
const acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      document.cookie = "CookieBy=feetshoes; max-age="+60*60*24*30;
      if(document.cookie){
        cookieBox.classList.add("hide");
      }else{
        alert("O cookie não pode ser definido! Desbloqueie este site da configuração de cookies do seu navegador.");
      }
    }
let checkCookie = document.cookie.indexOf("CookieBy=feetshoes");
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");