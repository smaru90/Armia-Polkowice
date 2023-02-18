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


const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
