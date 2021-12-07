var source = "http://127.0.0.1:8080/api"
    
function getTasks(url){
    var table = $('#tasks')
    $.ajax({
        url: url,
        type: "GET",
        success: function(tasks){
            tasks = JSON.parse(tasks)
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
                        "<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aspernatur!</td>"+
                        "<td bgcolor='"+ color +"'></td>"+
                        "<td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>"+
                        "<td>Lorem ipsum dolor sit amet.</td>"+
                    "</tr>"
                )
            })
        },
        error: function(data){
            alert('Жопа')
        }
    })
}


$(document).ready(function(){
    getTasks(source + "/tasks")
})