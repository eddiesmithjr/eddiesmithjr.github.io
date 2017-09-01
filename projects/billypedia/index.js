/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('background-color', 'grey').css('border-radius', '4px');
        
        $('#section-quotes').css('background-color', 'tan').css('border-radius', '4px');
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        
        _.map(topRated, function(album, i, a) {
            
           var $list = $('<li>');
           $('<li>');
           $('<li>');
           $('<li>');
           $list.text(album.title);
           
           $('<li>').text(album.title).appendTo($('#list-top-rated'));
        });
        
        $('#sidebar').append($('<section>').attr('id', 'section-recordings'));
        
        $('#section-recordings').append($('<div>')
            .attr('id', 'image-container-recording')
            .attr('class', 'image-container'));
            
        $('#image-container-recording').append($('<img>')
            .attr('src', 'images/album/eastern-rebellion.jpg') 
            .attr('id', 'recording-image')
            .attr('class', 'image'));
            
        $('#section-recordings')
            .append($('<ul>').attr('id', 'list-recordings')
            .css('font-style', 'italic'));    
        
        let recordings = data.discography.recordings;
        
        _.map(recordings, function(recEntry, i, a) {
            
            var $listItem = $('<li>').attr('class', 'recording');
            
            
            $('#list-recordings').append($listItem);
            $listItem.append($('<div>').attr('class', 'title').text('Title: ' + recEntry.title));
            $listItem.append($('<div>').attr('class', 'artist').text('Artist: ' + recEntry.artist));
            $listItem.append($('<div>').attr('class', 'release').text('Release: ' + recEntry.release));
            $listItem.append($('<div>').attr('class', 'year').text('Year: ' + recEntry.year));

        });
        
         $('.title-recordings').on('click', function(event) {
                let elem = $(event.currentTarget);
                $('#image-recordings').fadeOut('fast', function() {
                    $('#image-recordings').attr('src', elem.attr('art'));
                }).fadeIn('fast');
            });
            

                
            
            $('#image-billy').on('click', function(event) {
                
                let elem = $(event.currentTarget);
                let i = elem.attr('i');
                if (i < data.images.billy.length - 1) {
                    var src = data.images.billy[i++];
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-" + i + ".jpg")
                            .attr('i', i);
                    }).fadeIn('fast');
                }
                else {
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-0.jpg")
                            .attr('i', '0');
                    }).fadeIn('fast');
                }
            });
            
            
            var createTable = function(equipment) {
                var createRow = function(instrument) {
                    var $row = $("<tr>");
                    var $type = $("<td>").text(instrument.type);
                    var $desc = $("<td>").text(instrument.desc)
                        .attr('class', 'instrument-desc');
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                };
                var $table = $("<table>");
                var $rows = equipment.map(createRow);
                $table.append($rows);
                return $table;
            };
            
            
            $('#sidebar')
                .append($('<section>').attr('id', 'section-rider'));
            createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider');
            
            
            $('#section-rider')
                .prepend($('<header>')
                .text("Billy's Rider")
                .attr('class', 'header'));
            
            
            $('#table-rider').prepend($('<th>').text('Description'));
            $('#table-rider').prepend($('<th>').text('Instrument'));
        
         
            
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


