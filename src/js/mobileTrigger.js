import $ from 'jquery';

export default function initMobileTrigger() {
  const $mobileNavTrigger = $('.js-mobile-nav-trigger');
  const $mobileMenu = $('.js-mobile-menu');

  // @TODO: add animation to mobile menu
  $mobileNavTrigger.on('click', function (e) {
    e.preventDefault();
    const $t = $(this);
    $t.toggleClass('active');
    $mobileMenu.toggleClass('visible');
  });

}
