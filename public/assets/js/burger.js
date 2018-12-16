$(() => {

  $(".devour").on('click', (e) => {
    let id = $(e.currentTarget).data("id");

    $.ajax("/api", {
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ id, devoured: true })
    }).then(() => location.reload())
  });

  $(".create").on('submit', (e) => {
    e.preventDefault();
    
    let name = $('.create .name').val().trim();

    $.ajax("/api", {
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name })
    }).then(() => location.reload());
  });
});