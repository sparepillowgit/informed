var catSwitch = [];

$(document).ready(function() {
  prepVars();
  clicks();
})

var prepVars = function() {
  catSwitch = [true, true, true, true, true, true, true];
}

var clicks = function() {
  $('#cat-film').on('click', function() {
    fade(this, '.film', 0);
  })

  $('#cat-sport').on('click', function() {
    fade(this, '.sport', 1);
  })

  $('#cat-tv').on('click', function() {
    fade(this, '.tv', 2);
  })

  $('#cat-tech').on('click', function() {
    fade(this, '.tech', 3);
  })

  $('#cat-business').on('click', function() {
    fade(this, '.business', 4);
  })

  $('#cat-uk').on('click', function() {
    fade(this, '.uk', 5);
  })

  $('#cat-music').on('click', function() {
    fade(this, '.music', 6);
  })
}

var fade = function(id, cls, arr) {
  if (catSwitch[arr] == true) {
    catSwitch[arr] = false;
    $(cls).css('opacity', '0.05');
    if ($(window).width() < 768) {
      $(cls).slideToggle(1000);
    }
    switch(arr) {
      case 0:
      $(id).html('Film <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 1:
      $(id).html('Sport <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 2:
      $(id).html('TV <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 3:
      $(id).html('Tech <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 4:
      $(id).html('Business <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 5:
      $(id).html('UK <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
      case 6:
      $(id).html('Music <i class="fa fa-toggle-off fa-lg" aria-hidden="true"></i>');
      break;
    }
  } else {
    catSwitch[arr] = true;
    $(cls).css('opacity', '1.0');
    if ($(window).width() < 768) {
      $(cls).slideToggle(1000);
    }
    switch(arr) {
      case 0:
      $(id).html('Film <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 1:
      $(id).html('Sport <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 2:
      $(id).html('TV <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 3:
      $(id).html('Tech <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 4:
      $(id).html('Business <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 5:
      $(id).html('UK <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
      case 6:
      $(id).html('Music <i class="fa fa-toggle-on fa-lg" aria-hidden="true"></i>');
      break;
    }
  }
}
