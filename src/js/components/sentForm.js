// * ==== sentForm
export default function sentForm() {
  const formSubscribe = document.querySelectorAll(".form-subscribe-anim");

  formSubscribe.forEach((el) => {
    const formSubscribeBtn = el.querySelector(".form-subscribe__btn");
    el.addEventListener("click", (e) => {
      e.preventDefault();

      formSubscribeBtn.classList.add("sent");

      setTimeout(() => {
        formSubscribeBtn.innerText = "Вы подписаны";
      }, 1000);
    });
  });
}
