// going back to top 

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

// cookie policy

  let cookieModal = document.querySelector(".cookie-consent-modal")
  let cancelCookieBtn = document.querySelector(".btn.cancel")
  let acceptCookieBtn = document.querySelector(".btn.accept")

  cancelCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
  })
  acceptCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
  })

  setTimeout(function () {
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes") {
        cookieModal.classList.add("active")
    }
  })