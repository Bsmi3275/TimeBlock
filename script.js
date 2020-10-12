var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
var currentHour = moment().format('h')
console.log('currentHour:', currentHour)
var presentTime = $('#currentDay').text(currentDate);
var zeroHour = $('#hour-zero').val(9);
var firstHour = $('#hour-one').val(10);
var secondHour = $('#hour-two').val(11);
var thirdHour = $('#hour-three').val(12);
var fourthHour = $('#hour-four').val(13);
var fifthHour = $('#hour-five').val(14);
var sixthHour = $('#hour-six').val(15);
var seventhHour = $('#hour-seven').val(16);
var eighthHour = $('#hour-eight').val(17);
var saveBTN = $('.saveBtn');


var timeBlocks = [zeroHour, firstHour, secondHour, thirdHour, fourthHour, fifthHour, sixthHour, seventhHour, eighthHour]
console.log('currentHour:', currentHour)

checkTime()
//savedata();
//task three:
  // (.addclass) use to add class to change color based on time (past, present, future)


//User comment:
//I initially started with future, then past, then present. Then, I figured out that this sequence was illogical and counterproductive to the necessary order:
//past phases out,
//present is in 
//(in CSS, I came to the conclusion that leaving present white would isolate it from the past, since the hour is still relevant for the full 60 minutes after the first minute of the hour),
//and future is still to come (green). 

//I made the mistake of equating 'hour' to 'timeBlocks[i],' 
//This may have also been a mistake in Hwk 4.
  function checkTime() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].val())
    if (currentHour > hour) {
      $(timeBlocks[i]).addClass('past');
    console.log(timeBlocks[i].val());
    }
    else if (currentHour === hour)  {
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('present');
    } else {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('future');
    }
//these squirley then brackets are tricky
    }
  };

  //Trying to use as little code as possible here
  $('.saveBtn').on('click', function(){
      var findInput = $(this).parent().prev().children('.description').val();
      var key = $(this).parent().parent().attr("id").split("-")[1]
      console.log('findInput:', findInput)
      localStorage.setItem(key, findInput);

  }
  )

  for (let i = 9; i < 18; i++) {
    $("hour-" + i + ".description").val(localStorage.getItem(i))
  }

    