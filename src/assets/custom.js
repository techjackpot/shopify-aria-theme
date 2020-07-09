/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


function choosePayment (payment_method) {
  if (customer.tags.includes('PAY-' + payment_method.toUpperCase())) return;
  document.querySelectorAll('.pay_via_selector').forEach(el => {
    el.disabled = true;
  });
  document.querySelectorAll('.pay_via_shopify, .pay_via_partially').forEach(el => {
    el.remove();
  });
  (async () => {
    try {
      const rawResponse = await fetch(theme.ARIA_API_URL + '/shopify/change_payment_method', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: customer.available && customer.id || '',
          payment_method,
        }),
      });
      const response = await rawResponse.json();
      location.href = '';
    } catch(error) {
      console.log(error);
    };
  })();
};

(function($) {
  $('body').on('click', '.has-content-more', function() {
    var $el = $(this).parents('.shopify-section');
    var scrollTo = $el.offset().top + $el.height();
    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth',
    });
  });
})(jQuery);
