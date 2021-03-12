$(document).ready(function() {
    let spinner = $('.spinner-grow');
    let text = $('.btn-text');
    let input = $('#catName');
    spinner.hide();

    $('#add-tech-cat').on('submit', function(e) {
        e.preventDefault();
        text.hide();
        spinner.show();
        
        let formData = $(this).serializeArray();

        $.ajax({
            type: $(this).attr('method'),
            data: formData,
            url: $(this).attr('action'),
            dataType: 'json',
            success: function(data) {

                if( data.response === 'success' ) {
                    Swal.fire(
                        'Success!',
                        'The category has successfully saved!',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Error!',
                        'Something went wrong!',
                        'error'
                    );
                }

                input.val('');
                spinner.hide();
                text.show();
            }
        });
    });
});