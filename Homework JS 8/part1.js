$(document).ready(function(){
    $('#button').click(function () {
        let getName = $('input#name').val();
        if(!$('h1').length){
          $('body').append('<h1 class="greeting-title"></h1>');
        }
        $("h1").text('Hello '+getName)
      });
})