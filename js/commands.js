class AI_Command{

    url_data_chat="https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json";

    all_cmd=[];

    url_data={
        en:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json",
            "https://www.googleapis.com/drive/v3/files/1UcqXrwNE3pcWdK9y7tsXVOGXCEcVrcgl?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        vi:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-vi.json",
            "https://www.googleapis.com/drive/v3/files/1-8SaVFOA2wt1zm7MgGFXlu8IpC8saGRb?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ]
    }

    show(){
        $("#ai_content").html('');
        $("#ai_content").append(ai.loading());
        cr.get_json(this.url_data_chat,(data)=>{
            ai.cmd.load_data(data);
        },(error)=>{
            swal.fire({
                icon:"error",
                title:"Error",
                text: error
            });
            ai.cmd.show();
        });
    }

    load_data(data){
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
    }

    load_grid(data){
        $("#list_cmd_basic").html('');
        $.each(cr.shuffle(this.filter_data(data,'basic',63)),function(index,c){
            $("#list_cmd_basic").append(ai.box_item(c));
        });
        
        $("#list_cmd_advanced").html('');
        $.each(cr.shuffle(this.filter_data(data,'advanced',63)),function(index,c){
            $("#list_cmd_advanced").append(ai.box_item(c));
        });
    }

    load_list(data){
        $("#list_cmd_basic").html('');
        $("#list_cmd_basic").html('<div class="col-12"><table  class="table table-striped table-hover table-sm"><tbody id="all_item_basic"></tbody></table></div>');
        $.each(cr.shuffle(this.filter_data(data,'basic',63)),function(index,c){
            var empC=ai.cmd.box_item_list(c);
            $(empC).click(function(){
                cr_data.info(c);
            });
            $("#all_item_basic").append(empC);
        });
        
        $("#list_cmd_advanced").html('');
        $("#list_cmd_advanced").html('<div class="col-12"><table  class="table table-striped table-hover table-sm"><tbody id="all_item_advanced"></tbody></table></div>');
        $.each(cr.shuffle(this.filter_data(data,'advanced',63)),function(index,c){
            var empC=ai.cmd.box_item_list(c);
            $(empC).click(function(){
                cr_data.info(c);
            });
            $("#all_item_advanced").append(empC);
        });
    }

    box_item_list(c){
        var empItem=$(`
            <tr role="button">
                <td>${c.key}</td>
                <td>${c.msg}</td>
            </tr>
        `);
        return empItem;
    }

    show_grid(){
        this.load_grid(this.all_cmd);
    }

    show_list(){
        this.load_list(this.all_cmd);
    }

    filter_data(data,type="basic",length=20){
        var list_cmd=[];
        var count=0;
        $.each(data,function(index,c){
            if(type=="basic"){
                if(c.link==""){
                    list_cmd.push(c);
                    count++;
                }
            }
            else{
                if(c.link!=""){
                    list_cmd.push(c);
                    count++;
                }
            }
            if(count>length) return false;
        });
        return list_cmd;
    }
}
var cmd=new AI_Command();
ai.cmd=cmd;
