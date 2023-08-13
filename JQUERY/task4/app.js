// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того,
// як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

$(document).ready(function() {
    let count = 0;
    $('input[type="checkbox"]').change( function(){
        count += 1;
       if(count === 3) {
        $('input[type="checkbox"]').attr("disabled",true)
       };
    });
 });