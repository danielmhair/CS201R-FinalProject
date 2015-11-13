$(function(){

        $('*').hover(function(){
            $(this).data('hover',1); //store in that element that the mouse is over it
        },
        function(){
            $(this).data('hover',0); //store in that element that the mouse is no longer over it
        });


        window.isHovering = function (selector) {
            return $(selector).data('hover')?true:false; //check element for hover property
        }
    });