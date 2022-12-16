
$(".item_wrap").each(function () {
  $(".item_wrap").addClass("d-none");
});
$(".tabs_wrap:first-child").each(function (e,d) {
  $(".item_list li:first-child").removeClass("d-none").delay(0).queue(function (next) {
    $(`.item_list li:first-child .container .row`).children(".col-lg-4").children(".card").toggleClass("animation")
    next();
  });
});
const filterTabs = (tab) => {
  $(".item_wrap").addClass("d-none");
  $(".tabs_wrap li").removeClass("active");
  $(`.tabs_wrap [data-tabs="${tab}"]`).addClass("active")
  $(".tabs_wrap").each(function (e) {
    $(`.item_wrap.${tab}`).removeClass("d-none").delay(0).queue(function (next) {
      $(`.item_wrap.${tab} .container .row`).children(".col-lg-4").children(".card").toggleClass("animation")
      next();
    });
  });
}