const ButtonPositions = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
  TOPLEFT: 4,
  TOPRIGHT: 5,
  BOTTOMLEFT: 6,
  BOTTOMRIGHT: 7,
};
const Themes = {
  LIGHT: 1,
  DARK: 2,
};
let overlay;
let currentTheme = Themes.LIGHT;

function initTheme(button = ButtonPositions.TOP, animationDuration = 1) {
  let themeButton;
  if (typeof animationDuration === "number") {
    document.documentElement.style.setProperty("--o-anim-duration", animationDuration + "s");
    document.documentElement.style.setProperty("--o-anim-duration-half", Math.abs(animationDuration / 2) + "s");
  }
  overlay = document.querySelector(".theme-overlay") ?? document.createElement("div");
  overlay.classList.add("theme-overlay");
  if (button instanceof HTMLButtonElement) themeButton = button;
  else if (typeof button === "number") {
    themeButton = document.createElement("button");
    themeButton.innerText = "Toggle";
    themeButton.classList.add("toggle-switch");
    switch (button) {
      case ButtonPositions.TOP:
        themeButton.classList.add("radial-top");
        break;
      case ButtonPositions.TOPRIGHT:
        themeButton.classList.add("radial-topright");
        break;
      case ButtonPositions.RIGHT:
        themeButton.classList.add("radial-right");
        break;
      case ButtonPositions.BOTTOMRIGHT:
        themeButton.classList.add("radial-bottomright");
        break;
      case ButtonPositions.BOTTOM:
        themeButton.classList.add("radial-bottom");
        break;
      case ButtonPositions.BOTTOMLEFT:
        themeButton.classList.add("radial-bottomleft");
        break;
      case ButtonPositions.LEFT:
        themeButton.classList.add("radial-left");
        break;
      case ButtonPositions.TOPLEFT:
        themeButton.classList.add("radial-topleft");
        break;
    }
    document.body.appendChild(themeButton);
  } else {
    throw "Invalid Button for Theme!";
  }
  document.body.appendChild(overlay);
  themeButton.setAttribute("data-themeToggler", true);
  themeButton.addEventListener("click", (e) => {
    setOverlayPosition(`${e.pageY}px`, `${e.pageX}px`);
    if (currentTheme === Themes.LIGHT) {
      toDarkTheme();
      currentTheme = Themes.DARK;
    } else {
      toLightTheme();
      currentTheme = Themes.LIGHT;
    }
  });
}

function setOverlayPosition(top = "50%", left = "50%") {
  document.documentElement.style.setProperty("--o-top", top);
  document.documentElement.style.setProperty("--o-left", left);
}

function toggleOverlay(expand = true) {
  if (expand) {
    void overlay.offsetWidth;
    overlay.classList.add("overlay-expanded");
  } else {
    void overlay.offsetWidth;
    overlay.classList.remove("overlay-expanded");
  }
}

function toLightTheme() {
  toggleOverlay(false);
}

function toDarkTheme() {
  toggleOverlay(true);
}

// document.body.addEventListener("click", (e) => {
//   setOverlayPosition(`${e.pageY}px`, `${e.pageX}px`);
//   toDarkTheme();
// });

// document.body.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   setOverlayPosition(`${e.pageY}px`, `${e.pageX}px`);
//   toLightTheme();
// });
