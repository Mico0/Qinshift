window.onscroll = function () {
  headerScroll();
};

function headerScroll() {
  //   var log = document.body.scrollTop;
  //   console.log("Scroll Top: " + log);
  navigation_desktop = document.getElementById("navbar_desktop");
  navigation_mobile = document.getElementById("navbar_mobile");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navigation_desktop.classList.add("navbar_scroll");
    navigation_mobile.classList.add("navbar_scroll");
    // console.log("Scrolling");
  } else {
    navigation_desktop.classList.remove("navbar_scroll");
    navigation_mobile.classList.remove("navbar_scroll");
  }
}

function hamMenu() {
  var menu = document.getElementById("menu_mobile");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
