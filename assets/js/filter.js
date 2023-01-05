$(".item_wrap").each(function () {
  $(".item_wrap").addClass("d-none"); /* Hide all price list onload */
});
$(".tabs_wrap:first-child").each(function (e,d) {
  $(".item_list li:first-child").removeClass("d-none").delay(0).queue(function (next) { /* Show 1st price list onload */
    $(`.item_list li:first-child .container .row`).children(".price-tags").children(".card").toggleClass("animation")
    next();
  });
});
const filterTabs = (tab) => {
  $(".item_wrap").addClass("d-none"); /* OnClick hide all price list */
  $(".tabs_wrap li").removeClass("active"); /* Inactive all tabs */
  $(`.tabs_wrap [data-tabs="${tab}"]`).addClass("active"); /* Active current tab */
  $(".tabs_wrap").each(function (e) {
    $(`.item_wrap.${tab}`).removeClass("d-none").delay(0).queue(function (next) { /* OnClick show current tab price list */
      $(`.item_wrap.${tab} .container .row`).children(".price-tags").children(".card").toggleClass("animation") /* Animation current tab price list with delay */
      next();
    });
  });
}