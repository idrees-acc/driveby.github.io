var tabs = document.querySelectorAll(".tabs_wrap ul li");
var hatch = document.querySelectorAll(".hatch");
var sedan = document.querySelectorAll(".sedan");
var suv = document.querySelectorAll(".suv");
var l_hatch = document.querySelectorAll(".l-hatch");
var l_sedan = document.querySelectorAll(".l-sedan");
var l_suv = document.querySelectorAll(".l-suv");
var all = document.querySelectorAll(".item_wrap");

all.forEach((item) => {
  item.classList.add("d-none");
});

hatch.forEach((male) => {
  male.classList.remove("d-none");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.classList.add("d-none");
    });

    if (tabval == "hatch") {
      hatch.forEach((male) => {
        male.classList.remove("d-none");
      });
    } else if (tabval == "sedan") {
      sedan.forEach((female) => {
        female.classList.remove("d-none");
      });
    } else if (tabval == "suv") {
      suv.forEach((suv) => {
        suv.classList.remove("d-none");
      });
    } else if (tabval == "l-hatch") {
      l_hatch.forEach((l_hatch) => {
        l_hatch.classList.remove("d-none");
      });
    } else if (tabval == "l-sedan") {
      l_sedan.forEach((l_sedan) => {
        l_sedan.classList.remove("d-none");
      });
    } else if (tabval == "l-suv") {
      l_suv.forEach((l_suv) => {
        l_suv.classList.remove("d-none");
      });
    }
  });
});
