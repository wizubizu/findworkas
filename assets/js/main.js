 var app = {
 imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler

}

var apps = {
 imageHandler:function() {
        $("#upload1").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload1")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview1").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}

var appz = {
 imageHandler:function() {
        $("#upload2").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload2")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview2").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}




// findworka js///

// slide in and out

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
});


// end

// only number

    $(document).ready(function () {
      //called when key is pressed in textbox
      $("#quantity").keypress(function (e) {
         //if the letter is not digit then display error and don't type anything
         if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#errmsg").html("Numbers Only").show().fadeOut("slow");
                   return false;
        }
       });
    });

// end


//for the next and previous form 



$("#continuebtn").click(function (){
    var ownerType = $('.__selectind').val();
    if (ownerType === 'developer') {
        $('#Third-Div').hide();
        $('#First-Div').hide();
        $('#Second-Div').hide();
        $('#Forth-Div').show();
        $('#Five-Div').hide();
    }else if(ownerType === 'designer'){
        $('#Forth-Div').hide();
        $('#Third-Div').hide();
        $('#Second-Div').show();
        $('#First-Div').hide();
        $('#Five-Div').hide();
    }else if(ownerType === "select"){
        alert('Please select Designer or Developer');
        $('#First-Div').show();
        $('#Third-Div').hide();
        $('#Second-Div').hide();
    }
});




function showNextForm() {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
    };

    function showNextForm1() {
        $("#Second-Div").css("display", "none");
        $("#Third-Div").css("display", "block");
    };

    function showNextForm2() {
        $("#Third-Div").css("display", "none");
        $("#Five-Div").css("display", "block");
    };

    function showNextForm3() {
        $("#Forth-Div").css("display", "none");
        $("#Five-Div").css("display", "block");
    };

    // previous 
    function showPrevForm() {
        $("#Second-Div").css("display", "none");
        $("#First-Div").css("display", "block");
        $("#Forth-Div").css("display", "none");
    };

    function showPrevForm1() {
        $('#Third-Div').css("display", "none");
        $('#Second-Div').css("display", "block");
        $('#First-Div').css("display", "none");
        $("#Five-Div").css("display", "none");
        $("#Forth-Div").css("display", "none");
    };

    function showPrevForm2() {
        $("#Forth-Div").css("display", "block");
        $("#Third-Div").css("display", "none");
         $("#Five-Div").css("display", "none");
    };


    function showPrevForm3() {
        var ownerType = $('.__selectind').val();
        if (ownerType === 'developer') {
            $('#First-Div').css("display", "none");
            $('#Second-Div').css("display", "none");
            $('#Forth-Div').css("display", "none");
            $("#Five-Div").css("display", "none");
            $("#Third-Div").css("display", "block");
        }else if(ownerType === 'designer'){
            $('#Third-Div').css("display", "none");
            $('#Second-Div').css("display", "none");
            $('#First-Div').css("display", "none");
            $("#Five-Div").css("display", "none");
            $("#Forth-Div").css("display", "block");
        }
    };


    //fileupload for individual
        $('input[id=base-input4]').change(function() {
        $('#fake-input4').val($(this).val().replace("C:\\fakepath\\", ""));
        });

        //fileupload for both
        $('input[id=base-input5]').change(function() {
        $('#fake-input5').val($(this).val().replace("C:\\fakepath\\", ""));
        });
// end



// tooltip

$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });


        $(function () {
          $('[data-toggle="popover"]').popover()
        })

// end


// clock js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = function () {
  function Clock(id) {
    _classCallCheck(this, Clock);

    this.timezone = parseInt(document.getElementById(id).dataset.timezone);

    if (this.isDST(new Date())) {
      this.timezone += 1;
    }

    this.handSeconds = document.querySelector("#" + id + " .hand.seconds");
    this.handMinutes = document.querySelector("#" + id + " .hand.minutes");
    this.handHours = document.querySelector("#" + id + " .hand.hours");

    this.getTime();
    this.cycle();
  }

  _createClass(Clock, [{
    key: "isDST",
    value: function isDST(now) {
      var jan = new Date(now.getFullYear(), 0, 1);
      var jul = new Date(now.getFullYear(), 6, 1);
      var dst = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());

      return now.getTimezoneOffset() < dst;
    }
  }, {
    key: "draw",
    value: function draw(hours, minutes, seconds) {
      var drawSeconds = seconds / 60 * 360 + 90;
      var drawMinutes = minutes / 60 * 360 + 90;

      if (hours >= 12) {
        drawHours = hours - 12;
      }

      var drawHours = hours / 12 * 360 + 90;

      this.handSeconds.style.transform = "rotate(" + drawSeconds + "deg)";
      this.handMinutes.style.transform = "rotate(" + drawMinutes + "deg)";
      this.handHours.style.transform = "rotate(" + drawHours + "deg)";

      // fix for animation bump on when clock hands hit zero
      if (drawSeconds === 444 || drawSeconds === 90) {
        this.handSeconds.style.transition = "all 0s ease 0s";
      } else {
        this.handSeconds.style.transition = "all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s";
      }
    }
  }, {
    key: "getTime",
    value: function getTime() {
      var now = new Date();

      var hours = now.getUTCHours() + this.timezone;
      var minutes = now.getUTCMinutes();
      var seconds = now.getUTCSeconds();

      this.draw(hours, minutes, seconds);
    }
  }, {
    key: "cycle",
    value: function cycle() {
      setInterval(this.getTime.bind(this), 1000);
    }
  }]);

  return Clock;
}();

new Clock('fwka');
new Clock('fwka1');
new Clock('fwka2');

// this is just a rough draft for some effects
// const shadowOkinawa = document.querySelector("#okinawa .shadow");
// const shadowSeattle = document.querySelector("#seattle .shadow");
// const shadowAmalfi = document.querySelector("#amalfi .shadow");

// const handleMouseMove = (event) => {
//   const percent = parseInt((100 * event.pageX) / window.innerWidth);
//   const drawShadow = (0.22 * percent) - 50;

//   shadowOkinawa.style.transform = `rotate(${drawShadow}deg)`;
//   shadowSeattle.style.transform = `rotate(${drawShadow}deg)`;
//   shadowAmalfi.style.transform = `rotate(${drawShadow}deg)`;
// };

// document.onmousemove = handleMouseMove;

// end

// end



