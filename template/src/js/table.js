/**
 * Created by fazekasda on 2016.06.13..
 */

$(document).ready(function() {
    $.getJSON(
        "data/net.json",
        function(json) {
            table_data = json;
        }
    );
    $('#browsetable').DataTable( {
        data: table_data,
        scrollY:        200,
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true
    } );
} );