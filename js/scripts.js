/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });



  // Running sentence effect
  const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Automation Engineer",
  ];
  let index = 0;
  const dynamicTextElement = document.getElementById("dynamic-text");

  function updateText() {
    dynamicTextElement.textContent = roles[index];
    index = (index + 1) % roles.length;
  }

  setInterval(updateText, 2000); // Change text every 2 seconds

//------------------------------------------------------------------------------

  const roles_2 = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Automation Engineer",
  ];
  let index_2 = 0;
  const dynamicTextElement_2 = document.getElementById("dynamic-text-2");

  function updateText_2() {
    dynamicTextElement_2.textContent = roles_2[index];
    index_2 = (index_2 + 1) % roles_2.length;
  }

  setInterval(updateText_2, 2000); // Change text every 2 seconds

  updateRole();
})(jQuery); // End of use strict
