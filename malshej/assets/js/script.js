$(document).ready(function(){

  $('#openMenu').click(function(){
    $('.menu').toggleClass('open');
  });

});

$(function(){

  $('#quickForm').submit(function(e){

    e.preventDefault();

    $('#submit-btn').attr('disabled', 'disabled');

    var formData = 'do=enq_form&' + $('#quickForm').serialize();

    $.ajax({
      url: 'ajax.php',
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function(rv){
        if(rv.msg == 'ok'){
          $('#return-msg').html('<p class="alert alert-success">Message has been sent!!!</p>');
          $('#submit-btn').removeAttr('disabled');
          $('#quickForm').trigger('reset');
        }else if(rv.msg == 'empty'){
          $('#return-msg').html('<p class="alert alert-danger">Name, Phone and Email are required Please fill required fields.</p>');
          $('#submit-btn').removeAttr('disabled');
        }else{
          $('#return-msg').html('<p class="alert alert-danger">Something went wrong, try again later.</p>');
          $('#submit-btn').removeAttr('disabled');
        }
      },
      error: function(){
        $('#return-msg').html('<p class="alert alert-danger">Something wrong at our end, try again later.</p>');
        $('#submit-btn').removeAttr('disabled');
      }
    });

  });

  $('#contactForm').submit(function(e){

    e.preventDefault();

    $('#submit-btn').attr('disabled', 'disabled');

    var formData = 'do=contact_form&' + $('#contactForm').serialize();

    $.ajax({
      url: 'ajax.php',
      type: 'POST',
      data: formData,
      dataType: 'json',
      success: function(rv){
        if(rv.msg == 'ok'){
          $('#return-msg').html('<p class="alert alert-success">Message has been sent!!!</p>');
          $('#submit-btn').removeAttr('disabled');
          $('#contactForm').trigger('reset');
        }else if(rv.msg == 'empty'){
          $('#return-msg').html('<p class="alert alert-danger">Name, Phone and Email are required Please fill required fields.</p>');
          $('#submit-btn').removeAttr('disabled');
        }else{
          $('#return-msg').html('<p class="alert alert-danger">Something went wrong, try again later.</p>');
          $('#submit-btn').removeAttr('disabled');
        }
      },
      error: function(){
        $('#return-msg').html('<p class="alert alert-danger">Something wrong at our end, try again later.</p>');
        $('#submit-btn').removeAttr('disabled');
      }
    });

  });

});