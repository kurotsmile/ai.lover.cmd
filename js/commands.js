class AI_Command{

    url_data_chat="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json";

    show(){
        $.getJSON(this.url_data_chat,(data)=>{
            var html='<h1 class="mb-4">AI Lover Command List</h1>';
            var all_item=data["all_item"];

            html+='<div class="command-section">';
                html+='<h2>Basic Commands</h2>';
                html+='<div class="row" id="list_cmd_basic"></div>';
            html+='</div>';
            $("#ai_content").html(html);
            $.each(all_item,function(index,c){
                $("#list_cmd_basic").append(ai.box_item(c));
            })
            
        });
    }
}
var cmd=new AI_Command();
ai.cmd=cmd;
