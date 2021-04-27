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

  function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0].toLowerCase());
      vars[hash[0].toLowerCase()] = hash[1];
    }
    return vars;
  }
  var queryStringArr = getUrlVars();

  $('#tfa_107').val(queryStringArr['utm_medium'] || '');
  $('#tfa_109').val(queryStringArr['utm_source'] || '');
  $('#tfa_111').val(queryStringArr['utm_campaign'] || '');
  $('#tfa_116').val(queryStringArr['utm_term'] || '');
  $('#tfa_117').val(queryStringArr['utm_content'] || '');
  $('#tfa_118').val(window.location.href);

  $('#tfa_96').val(queryStringArr['utm_medium'] || '');
  $('#tfa_97').val(queryStringArr['utm_source'] || '');
  $('#tfa_98').val(queryStringArr['utm_campaign'] || '');
  $('#tfa_99').val(queryStringArr['utm_term'] || '');
  $('#tfa_100').val(queryStringArr['utm_content'] || '');
  $('#tfa_101').val(window.location.href);

})(jQuery);
