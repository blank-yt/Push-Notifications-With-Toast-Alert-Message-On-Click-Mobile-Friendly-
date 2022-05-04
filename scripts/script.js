$(document).ready(function() {
  let i = 0;
  $("#addInformation").click(function() {
    $('.toast_container').append('<div onclick="remove('+i+')" id="toast'+i+'" class="toast toast-active" role="alert" aria-live="assertive" aria-atomic="true">\
      <div class="toast_icon">\
        <i class="fas fa-info-circle"></i>\
      </div>\
      <div class="toast_content">\
        <h2>Information</h2>\
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere magna quam, quis pellentesque nisi cursus vitae. Nam congue justo sollicitudin, vehicula libero vel, tempor nunc. Nullam quis pulvinar turpis.</p>\
      </div>\
    </div>');
    wait(i);
    i++;
  });

  $("#addWarning").click(function() {
    $('.toast_container').append('<div onclick="remove('+i+')" id="toast'+i+'" class="toast toast-warning toast-active" role="alert" aria-live="assertive" aria-atomic="true">\
      <div class="toast_icon">\
        <i class="fas fa-exclamation-circle"></i>\
      </div>\
      <div class="toast_content">\
        <h2>Danger!</h2>\
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere magna quam, quis pellentesque nisi cursus vitae. Nam congue justo sollicitudin, vehicula libero vel, tempor nunc. Nullam quis pulvinar turpis.</p>\
      </div>\
    </div>');
    wait(i);
    i++;
  });

  $("#addSuccess").click(function() {
    $('.toast_container').append('<div onclick="remove('+i+')" id="toast'+i+'" class="toast toast-success toast-active" role="alert" aria-live="assertive" aria-atomic="true">\
      <div class="toast_icon">\
        <i class="fas fa-check-circle"></i>\
      </div>\
      <div class="toast_content">\
        <h2>Success</h2>\
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere magna quam, quis pellentesque nisi cursus vitae. Nam congue justo sollicitudin, vehicula libero vel, tempor nunc. Nullam quis pulvinar turpis.</p>\
      </div>\
    </div>');
    wait(i);
    i++;
  });
});

function wait(i) {
  setTimeout(function() {
    remove(i);
  }, 3500);
}

function remove(i) {
  $("#toast"+i+"").removeClass("toast-active");
}
