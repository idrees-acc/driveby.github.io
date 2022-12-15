
$(".item_wrap").each(function () {
  $(".item_wrap").addClass("d-none");
});
$(".hatch").each(function () {
  $(".hatch").removeClass("d-none");
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