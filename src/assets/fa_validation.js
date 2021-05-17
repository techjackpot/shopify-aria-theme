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

(function($) {

  $(document).on('submit', 'form#9', function(e) {
    let invalid = 0;
    $('form#9 .errMsg').remove();
    if ($('#tfa_4 input:checked').length == 0) {
      $('#tfa_4').parents('.oneField').append('<div class="errMsg"><span>This field is required.</span></div>');
      invalid++;
    }
    if ($('#tfa_16 input:checked').length == 0) {
      $('#tfa_16').parents('.oneField').append('<div class="errMsg"><span>This field is required.</span></div>');
      invalid++;
    }
    if (invalid > 0) {
      alert('The form is not complete and has not been submitted yet. There are ' + invalid + ' problems with your submission.');
      return false;
    }
  });

})(jQuery);
