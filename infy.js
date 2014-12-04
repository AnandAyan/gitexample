/**
 * Created by yksoftwaresolutions2 on 30/8/14.
 */
// ======================= Infinite Scroll  ===============================
$container.infinitescroll({
        navSelector  : 'a#navi:last',    // selector for the paged navigation
        nextSelector : 'a#navi:last',  // selector for the NEXT link (to page 2)
        itemSelector : '.item',     // selector for all items you'll retrieve
        loading: {
            finishedMsg: 'No more Images',
            img: 'res/icons/load.gif',
            msgText: "<em>Adding Images...</em>"
        },
        behavior : 'twitter',
        debug           : false,
        dataType        : 'json',
        errorCallback: function() {
            // fade out the error message after 2 seconds
            $('#infscr-loading').animate({opacity: 0.8},2000).fadeOut('normal');
        }
    },
    function( response ) {
        var _renderItem = function(data) {
            return "<div class='item'>Title :" + data.title + "</div>"
        }

        var jsonData = response.results;
        $theCntr = $("#container");
        var newElements = "";
        //var newItems = new Array();
        for(var i=0;i<jsonData.length;i++) {
            var item = $(_renderItem(jsonData[i]));
            $theCntr.append(item);

        }

    },


    // call Isotope as a callback
    function( newElements ) {

        $container.prepend( newElements ).isotope('reloadItems').isotope({ sortBy: 'original-order' });
    }
);

$('a#infiniteScroll').click(function(e){
    // call this whenever you want to retrieve the next page of content
    // likely this would go in a click handler of some sort
    e.preventDefault();
    $container.isotope('reLayout');
    $container.infinitescroll('retrieve');
    return false;
});