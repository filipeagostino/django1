$(document).ready(function() {
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');


    $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Really want to delete this taks?');

        if(result) {
            window.location.href = delLink;
        }

    });

    $(searchBtn).on('click', function() {
        searchForm.submit();

    });

});