//Let DOM load before executing 
    $(document).ready(function() {

//Keep the page from refeshing after submit
    $('#submit-btn').click(function(){
      event.preventDefault();

//Get the city type value and convert to lower case
      var city = $('#city-type').val();
      $('#city-type').val('');
      city = city.toLowerCase().trim();

//For New York City change the class to nyc (New York City/NYC/Newy York/Manhattan/Brooklyn/Queens)
      if (city == 'new york city' || city == 'nyc' || city == 'new york' || city == 'manhattan' || city == 'brooklyn' || city == 'queens') {
        $('body').attr('class','nyc');
      }

//For San Francisco change the class to sf (San Francisco/SF/SFO/bay area/niners suck)
      if (city == 'san francisco' || city == 'sf' || city == 'sfo' || city == 'bay area' || city == 'niners suck' || city == 'giants sucks') {
        $('body').attr('class','sf');
      }

//For Austin change the class to austin (austin/atx/sxsw)
      if (city == 'austin' || city == 'atx' || city == 'sxsw') {
        $('body').attr('class','austin');
      }

//For Los Angeles change the class to la (los angeles/la/lax/city of angels/hollywood)
      if (city == 'los angeles' || city == 'la' || city == 'lax' || city == 'city of angels' || city == 'hollywood') {
        $('body').attr('class','la');
      }

//For Sydney change the class to sydney (sydney/syd/down under)
      if (city == 'sydney' || city == 'syd' || city == 'down under') {
        $('body').attr('class','sydney');
      }
    });
  });