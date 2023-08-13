$(document).ready(function() {
    $("h3 + div").each(function() {
        $(this).insertBefore($(this).prev("h3"));
    });
});