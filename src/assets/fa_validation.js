(function($) {

  var validated = false;
  var checked_email = '';

  $('#tfa_2').on('change', function() {
    let email = $(this).val();
    fetch(theme.ARIA_API_URL + '/salesforce/get_lead_by_email?email=' + email)
    .then(data => {return data.json()})
    .then(res => {
      validated = !!res.valid;
      checked_email = email;
    })
    .catch(error => console.error(error));
  })

  $('form#3').on('submit', function() {
    if (!validated && (checked_email == $('#tfa_2').val())) {
      location.href = "/products/aria-free";
      return false;
    }
  });

})(jQuery);
