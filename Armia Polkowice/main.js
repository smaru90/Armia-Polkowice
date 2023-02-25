//function to display more news on the homepage
$(document).ready(function () {
  $(".articlesThumbnail").hide();
  $(".articlesThumbnail").slice(0, 4).show();
  $("#loadMore").click(function (e) {
    // click event for load more
    e.preventDefault();
    $(".articlesThumbnail:hidden").slice(0, 4).slideDown();
    if ($(".articlesThumbnail:hidden").length == 0) {
      $("#loadMore").text("Brak więcej wydarzeń").fadOut("slow");
    }
  });
});

//button for display menu on mobile version
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});






