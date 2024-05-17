(() => {
  // ==================================Бургер============================
  document.addEventListener("click", burgerInit);
  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 1000) return;
    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  // ==================================Скрывать меню============================

  const headerScroll = () => {
    const header = document.querySelector(".header");
    let prevScroll = window.scrollY;
    let currentScroll;
    document.addEventListener("scroll", () => {
      currentScroll = window.scrollY;
      const headerHidden = () => header.classList.contains("header--hidden");
      if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add("header--hidden");
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove("header--hidden");
      }
      prevScroll = currentScroll;
    });
  };
  headerScroll();

  // ==================================Select============================

  const select = document.querySelector(".select");
  const options = document.querySelectorAll(".option");
  const bodyList = document.querySelector(".body");

  select.addEventListener("click", () => {
    bodyList.classList.toggle("options-list--active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("selected");
      });
      select.querySelector("span").innerHTML = option.innerHTML;
      option.classList.add("selected");
      bodyList.classList.toggle("options-list--active");
    });
  });

  // ==================================Ползунок============================

  const progressSlider = document.getElementById('progressSlider');
  const progressDisplay = document.getElementById('progress');

  progressSlider.addEventListener('input', function() {
    const value = progressSlider.value;
    progressDisplay.textContent = value + '%';
  });

  
})();
