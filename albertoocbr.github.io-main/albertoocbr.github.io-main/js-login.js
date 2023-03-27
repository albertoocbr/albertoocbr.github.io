$(document).ready(function(){

  // Este trecho é bloqueado no CodePen
  // ele apenas altera a classe do icone
  // e o tipo do input conforme necessidade
  $('#show-password').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $('#login-password').attr('type', 'text');
      $(this).removeClass('fa-eye');
      $(this).addClass('fa-eye-slash');
    } else {
      $('#login-password').attr('type', 'password');
      $(this).removeClass('fa-eye-slash');
      $(this).addClass('fa-eye');
    }
  })
});