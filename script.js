$(document).ready(function() {
    $('#button').click(function() {
       let toAdd1 = $('input[name=checkListAnimal]').val();
       let toAdd2 = $('input[name=checkListCity]').val();
       let toAdd3 = $('input[name=checkListTeam]').val();
       let toAdd4 = $('input[name=checkListAthlete]').val();
       $('.list').append('<div class="item">' + toAdd1 + '</div>');
       $('.list').append('<div class="item">' + toAdd2 + '</div>');
       $('.list').append('<div class="item">' + toAdd3 + '</div>');
       $('.list').append('<div class="item">' + toAdd4 + '</div>');
    });

});
