
function render(data){
    var html = "<div class='commentBox'><div class='leftPaneImg'></div> <div class='rightPanel'><span>"+data.Queries+"</span></div>";
    $('#form').append(html);

}

$(document).ready(function(){
    //ready all the html components.
    var comment = [
        { "name": "Ayush Acharya", "Queries":"Hey There Can we be Friends?"}
    ];
    for(var i=0; i<comment.length;i++){
      render(comment[i]);
    }
    $('#addComment').click(function(){
        var addobj ={
            "Queries":$('#Queries').val()
        };
        console.log(addobj);
        comment.push(addobj);
        render(addobj); 
    });
});