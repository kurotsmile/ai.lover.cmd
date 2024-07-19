class AI_Command{

    url_data_chat="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json";

    all_cmd=[];

    show(){
        $.getJSON(this.url_data_chat,(data)=>{
            
            var html='';
            html+='<div class="container mt-5">';
                html+='<h1 class="mb-4">AI Lover Command List';
                    html+='<button class="btn btn-light btn-sm float-right m-1" onclick="ai.cmd.show_list()"><i class="fas fa-list-alt"></i> List</button>';
                    html+='<button class="btn btn-light btn-sm float-right m-1" onclick="ai.cmd.show_grid()"><i class="fas fa-th"></i> Grid</button>';
                html+='</h1>';

                html+='<div class="command-section">';
                    html+='<h2>Basic Commands</h2>';
                    html+='<div class="row" id="list_cmd_basic"></div>';
                html+='</div>';

                html+='<div class="command-section">';
                    html+='<h2>Advanced Commands</h2>';
                    html+='<div class="row" id="list_cmd_advanced"></div>';
                html+='</div>';

            html+='</div>';

            $("#ai_content").html(html);

            ai.cmd.all_cmd=data["all_item"];
            ai.cmd.load_grid(ai.cmd.all_cmd);

        });
    }

    load_grid(data){
        $("#list_cmd_basic").html('');
        $.each(cr.shuffle(cr.limitItem(data,50)),function(index,c){
            $("#list_cmd_basic").append(ai.box_item(c));
        });
        
        $("#list_cmd_advanced").html('');
        $.each(cr.shuffle(cr.limitItem(data,50)),function(index,c){
            $("#list_cmd_advanced").append(ai.box_item(c));
        });
    }

    load_list(data){
        $("#list_cmd_basic").html('');
        var html='<div class="col-12"><table  class="table table-striped table-hover table-sm"><tbody>';
        $.each(cr.shuffle(cr.limitItem(data,50)),function(index,c){
            html+='<tr>';
                html+='<td>'+c.key+'</td>';
                html+='<td>'+c.msg+'</td>';
            html+='</tr>';
        });
        html+='</tbody></table></div>';
        $("#list_cmd_basic").html(html);
        
        $("#list_cmd_advanced").html('');
        html='<div class="col-12"><table  class="table table-striped table-hover table-sm"><tbody>';
        $.each(cr.shuffle(cr.limitItem(data,50)),function(index,c){
            html+='<tr>';
                html+='<td>'+c.key+'</td>';
                html+='<td>'+c.msg+'</td>';
            html+='</tr>';
        });
        $("#list_cmd_advanced").html(html);
    }

    show_grid(){
        this.load_grid(this.all_cmd);
    }

    show_list(){
        this.load_list(this.all_cmd);
    }
}
var cmd=new AI_Command();
ai.cmd=cmd;
