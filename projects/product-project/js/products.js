/* global $ */
/* global _ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(data){
    $('h1').text('EDDIE\'S CRAZY WAGON CELLPHONE FIRE SALE!!')
        .css('font-weight', 'bold')
        .css('text-align', 'center')
        .css('color', 'red');
    
    $('<div>')
        .appendTo($('main'))
        .attr('class', 'mainDiv')
        .attr('id', 'mainDiv');
    
    $('<ul>')
        .appendTo($('#mainDiv')
        .attr('class', 'product-list')
        .attr('id', 'product-list'));
        
    $('#product-list').append($('<div>')
        .attr('id', 'image-container')
        .attr('class', 'image-container'));
        
    _.map(data, function(e, i, a) {
            
        var $listItem = $('<li>').attr('class', 'product');
        var $thumbs = $('<img>').attr('class', 'img');
        
        $thumbs.appendTo($('#product-list'));
        $('#product-list').append($listItem);
        
        
        $thumbs.attr('src', 'img/product/thumbs/' + e.image);
        
        $listItem
            .append($('<div>')
            .attr('class', 'type')
            .text('Type: ' + e.type));
            
        $listItem
            .append($('<div>')
            .attr('class', 'desc') 
            .text('Description: ' + e.desc));
        
        $listItem
            .append($('<div>')
            .attr('class', 'color')
            .text('Color: ' + e.color));
        
        $listItem
            .append($('<div>')
            .attr('class', 'specs')
            .text('Features: ' + e.specs));
            
        $listItem
            .append($('<div>') 
            .attr('class', 'price')
            .text('Price: $' + e.price)
            .css('color', 'red')
            .css('font-weight', 'bold')
            .css('font-size', '30 px'));
    
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////modal on img click/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    
    $('img').on('click', function(){
        var src= $(this).attr('src', 'img/product');
        //alert (src)
        // $('.imagetesting123').remove();
        ($('#myModal').modal('show'));
        $('.modal-body').append($('<img>').attr('src', src).attr('class', 'imagetesting123').attr("width", 350));
        
        
    });
    
    
    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////<!-- Trigger the modal with a button -->///////////////////
    ////////////////////////////////////////////////////////////////////////////////
    // $('main').append($('<button>').attr('type' ,'button')
    //                                 .attr('class','"btn btn-info btn-lg"')
    //                                 .attr('data-toggle','modal')
    //                                 .attr('data-target','#myModal'));
    ///////////////////<!-- Modal -->//////////////////////////////////////////////
    $('main').append($('<div>')
                        .attr('id', 'myModal')
                        .attr('class','modal fade')
                        .attr('role', 'dialog'));
        $('#myModal').append($('<div>').attr('class', 'modal-dialog'));
    ///////////////////<!-- Modal content-->////////////////////////////////////////
            $('.modal-dialog').append($('<div>').attr('class','modal-content'));
                $('.modal-content').append($('<div>').attr('class','modal-header'));
                    $('.modal-header').append($('<button>')
                                                .attr('class','close')
                                                .attr('data-dismiss','modal')
                                                .text('close'));
                    $('.modal-header').append($('<h4>').attr('class','modal-title').text('not actual size').css({color: 'red',
                                                                                                                fontSize: '30px'
                    }));
                $('.modal-content').append($('<div>').attr('class','modal-body'));
                    // $('.modal-body').text('product goes here')
                    //                 .append($('<img>').attr('src',''));
                $('.modal-content').append($('<div>').attr('class','modal-footer'));
                
                    // $('.modal-footer').append($('<button>').attr('class', 'btn btn-default')
                    //                                         .attr('data-dismiss','modal')
                    //                                         .text('close bottom right'));
    ////////////////////////////////////////////////////////////////////////////////////////////
    /////////////nav bar///////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
     $('nav').append($('<section>').attr('id', 'navbar').append($('<div>').attr('class','dropdown')));
            
            $('.dropdown').append($('<button>').attr('onclick','myFunction()').attr('class','dropbtn').text('Menu'));
            $('.dropdown').append($('<div>').attr('id','type').attr('class','dropdown-content'));
                $('#type').append(' <a href="#">PHONES</a>');
                $('#type').append(' <a href="#">CASES</a>');
            
    ////////////////////////////////////////////////////////////////////////
    ////////////////search function//////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
           
            // $('#navbar').append($('<button>').attr('type', 'text').attr('id','search').text('SEARCH'));
            
            
            
            
            $('#navbar').append($('<input>').attr('type', 'text')
                                            .attr('id','query'))
                                            .append($('<button>')
                                                        .attr('type', 'submit')
                                                        .attr('id','search')
                                                        .attr('value', 'Search')
                                                        .text('SEARCH'));
    
    //   <input type="text" id="link-box"/>
    //  <input type="button" id="search-button" value="Search" 
    //         onclick="window.location = document.getElementById('.product').value;"/>
    //////////////////////////////////////////////
      ////////////////working search///////////////
      ///////////////////////////////////////////////
    //   $('#navbar').append($('<input>').attr('type', 'text')
    //                                      .attr('id','query')
    //                                      .attr('placeholder', 'enter search here'));
                // function contains(text_one, text_two) {
                //     if(text_one.indexOf(text_two) != -1)
                //         return true;
                // }
                // $('#query').keyup(function(){
                //      var query = $('#query').val().toLowerCase();
                //     $('div li').each(function(){
                //         if(!contains($(this).text().toLowerCase(), query))
                //             $(this).hide();
                //         else
                //             $(this).show();
                //     });;
                // });
    
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////search recursion///////////////////////////
    ////////////////////////////////////////////////////////////////
    $('#search').on('click',function(){
        var input = $('#query').val().toLowerCase();
        $('.product').each(function(){
        var searched = $(this).text().toLowerCase();
        $(this).closest('.product')[searched.indexOf(input) !== -1 ?'show': 'remove']();
     });
    });
    $('#query').keypress(function(e){
        if(e.which == -1){
            $('#search').click();
        }
    });

	// ALL YOUR CODE GOES ABOVE HERE //
    });
});