M.AutoInit();

$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });
});

$(document).ready(function(){
  $('.tabs').tabs();
});

$(document).ready(function(){
  $('select').formSelect();
});

$(document).ready(function(){
  $('.datepicker').datepicker();
});
