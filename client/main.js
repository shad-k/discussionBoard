import '../imports/ui/body.js';

import { Discussions } from '../imports/api/discussions.js';

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight() - 69;
    
	$('.container').css('min-height', windowHeight);

	$('.container-fluid').css('min-height', $('.container').css('min-height'));
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

