import $ from 'jquery';

export default function promo() {
  const $promoTrigger = $('.js-promo-trigger');

  // @TODO: add animation to mobile menu
  $promoTrigger.on('click', function (e) {
    e.preventDefault();
    const $t = $(this);
    $t.closest('.js-promo-side').addClass('active');
  });

}
