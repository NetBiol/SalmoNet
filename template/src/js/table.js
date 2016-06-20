/**
 * Created by fazekasda on 2016.06.13..
 */

$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": 'data/net.json',
        scrollY:        200,
            deferRender:    true,
            scrollY:        200,
            scrollCollapse: true,
            scroller:       true
    } );
} );