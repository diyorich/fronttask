var source = "http://127.0.0.1:8080/api"
    
function getTasks(url){
    var table = $('#tasks')
    $.ajax({
        url: url,
        type: "GET",
        success: function(tasks){
            tasks = JSON.parse(tasks)
            alert(JSON.stringify())
            tasks.forEach(function(task){
                var color;
                if(task.done){
                    color = "green"
                }else{
                    color = "red"
                }
                table.append(
                    "<tr>" +
                        "<td>"+ task.id +"</td>" +
                        "<td>"+ task.title +"</td>" +
                        "<td bgcolor='"+ color +"'></td>"+
                        "<td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>"+
                        "<td>Lorem ipsum dolor sit amet.</td>"+
                    "</tr>"
                )
            })
        },
        error: function(data){
            alert('error')
        }
    })
}

// function getTags(url) {
//     $.ajax({
//         url: url,
//         type: "GET",
//         success: function(tags){
//             tags = JSON.parse(tags)
//             tags.forEach
//         }
//     })



$(document).ready(function(){
    getTasks(source + "/tasks"),
    getTasks(source + "/tags")
})