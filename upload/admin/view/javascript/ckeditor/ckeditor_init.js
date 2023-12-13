function ckeditorInit(node, token) {
  CKEDITOR.replace(node);
  CKEDITOR.on('dialogDefinition', function (ev) {
    for (i = 0; i < ev.data.definition.contents.length; i++) {
      var button = ev.data.definition.contents[i].get('browse');

      if (button !== null) {
        button.hidden = false;
        button.onClick = function() {
          $('#modal-image').remove();
          $.ajax({
            url: 'index.php?route=common/filemanager&ckeditor=' + this.filebrowser.target + '&token=' + token,
            dataType: 'html',
            success: function(html) {
              $('body').append('<div id="modal-image" style="z-index: 10020;" class="modal">' + html + '</div>');

              $('#modal-image').modal('show');
            }
          });
        }
      }
    }
  });
}