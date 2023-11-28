// jQuery
$(function () {
  //Avatar
  $(".avatar").click(function () {
    $(this).toggleClass("offline");
  });

  //Notifications
  $(".notifications").click(function () {
    $(".notifications-container").fadeToggle(400);
  });

  //Hover on notifications (focus)
  $(".message-box").hover(function () {
    $(this).css({
      'opacity': '1'
    });
  },

    function () {
      $(this).css({
        'opacity': '0.5'
      });
    });

  //Tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  //Clone card and append to offcanvas
  $(".bookmark-icon").click(function () {
    var card = $(this).closest(".card");
    card.clone().appendTo(".offcanvas-body");
  });

  // Handle click on bookmark icon link
  $(".bookmark-icon").click(function (e) {
    e.preventDefault(); // Prevent the default behavior of the link
    $('#offcanvasBottom').offcanvas('show'); // Show the offcanvas
  });
});