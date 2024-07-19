class AI_Command{

    url_data_chat="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json";

    show(){
        $.getJSON(this.url_data_chat,(data)=>{
            
            var html='';
            html+='<div class="container mt-5">';
                html+='<h1 class="mb-4">AI Lover Command List';
                    html+='<button class="btn btn-light btn-sm float-right m-1"><i class="fas fa-list-alt"></i> List</button>';
                    html+='<button class="btn btn-light btn-sm float-right m-1"><i class="fas fa-th"></i> Grid</button>';
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

            var all_item=data["all_item"];
            $.each(cr.shuffle(cr.limitItem(all_item,50)),function(index,c){
                $("#list_cmd_basic").append(ai.box_item(c));
            });
            
            $.each(cr.shuffle(cr.limitItem(all_item,50)),function(index,c){
                $("#list_cmd_advanced").append(ai.box_item(c));
            });

        });
    }
}
var cmd=new AI_Command();
ai.cmd=cmd;
