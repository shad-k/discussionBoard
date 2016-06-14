import '../imports/ui/body.js';

//Importing the collection
import { Discussions } from '../imports/api/discussions.js';

//Resizing the height of the container divs according to the content on the page
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

