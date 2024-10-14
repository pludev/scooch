$(function () {
  // init
  var currentSection = '#home';

  // scroll on navi tap
  $('header a').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - 40,
      },
      400
    );
  });

  // scroll on masthead tap
  $('section.masthead').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#proyectos').offset().top - 40,
      },
      400
    );
  });

  // current section
  function setCurrentSection(section) {
    if (section != currentSection) {
      currentSection = section;
      $('header li a').removeClass('on');
      $('header li a[href="' + currentSection + '"]').addClass('on');
      if (section == '#home') {
        $('header').animate(
          {
            scrollLeft: 0,
          },
          200
        );
      } else if (section == '#proyecto') {
        $('header').animate(
          {
            scrollLeft: 0,
          },
          200
        );
      } else {
        $('header').animate(
          {
            scrollLeft: 188,
          },
          300
        );
      }
    }
  }

  // scroll detect
  var offsetBottomMasthead, offsetBottomProyecto, offsetBottomRomina; // init

  $(window).scroll(function () {
    offsetBottomMasthead =
      $('section.masthead:first').offset().top +
      $('section.masthead:first').outerHeight();
    offsetBottomProyecto =
      $('section.proyecto:first').offset().top +
      $('section.proyecto:first').outerHeight();
    offsetBottomRomina =
      $('section.romina:first').offset().top +
      $('section.romina:first').outerHeight();

    if (this.scrollY > offsetBottomRomina - 200) {
      setCurrentSection('#contactanos');
    } else if (this.scrollY > offsetBottomProyecto - 200) {
      setCurrentSection('#nosotros');
    } else if (this.scrollY > offsetBottomMasthead - 200) {
      setCurrentSection('#proyectos');
    } else {
      setCurrentSection('#home');
    }
  });
});
