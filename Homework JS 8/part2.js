$(document).ready(function(){
    $('#button').click(function () {
        let getName = $('input#name').val();
        let getColor = $('input#color').val();
        if(!$('h1').length){
          $('body').append('<h1 class="greeting-title"></h1>');
          $("h1").text('Hello '+getName)
        }
        else{
            $("#errorMessage").css({ "color": "red" }).text(`Invalid input or color!`);
            $("#generatedMessage").text("")
        }
      });
})