$(function(){
    $(document).on('keypress',function(e) {
        // console.log(e);
        if(e.which == 13) {
            //alert('You pressed enter!');
            $('#input').focus();
            //console.log($('#input').focus());
            // document.getElementById('input').focus();
        }
    });

    $('#shell').click(function(){
        $('#input').focus();
    });
})
