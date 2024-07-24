class Ai_Chat{

    list_return=[];
    type_return="=";

    chat_limit_pay=10;
    chat_count_pay=0;

    chat(){
        var txt_chat=$("#inp_chat").val();
        $("#inp_chat").val('');

        this.list_return=[];
        $.each(ai.cmd.all_cmd,function(index,c){
            if(txt_chat.trim().toLowerCase()==c.key.trim().toLowerCase()){
                ai.chat.list_return.push(c);
            }
        });

        if(this.list_return.length>0){
            var c=cr.random(this.list_return);
            this.type_return="=";
            this.act_chat(c);
        }else{
            $.each(ai.cmd.all_cmd,function(index,c){
                var k_key=txt_chat.trim().toLowerCase();
                var k_chat=c.key.trim().toLowerCase();
                if(k_key.indexOf(k_chat)){
                    ai.chat.list_return.push(c);
                }
            });

            if(ai.chat.list_return.length>0){
                var c=cr.random(ai.chat.list_return);
                this.type_return="~";
                this.act_chat(c);
            }else{
                this.act_chat(null);
            }
        }
    }

    act_chat(data){
        this.chat_count_pay++;
        if(this.chat_count_pay>=this.chat_limit_pay){
            cr.show_pay("Continue chatting","Buy a chat package to use it forever without interruption","3.99","buy_chat","true");
            this.chat_count_pay=0;
        }

        if(data==null){
            $("#txt_banner").html("None Chat!");
            return false;
        }

        var html='';
        html+=data.msg;
        html+=' <button class="btn btn-sm btn-light" onclick="ai.chat.show_list_return();return false;"><i class="fas '+(this.type_return==="=" ? 'fa-comment-alt': 'fa-comments')+'"></i> '+ai.chat.list_return.length+'</button>';
        if(data.link!="") window.open(data.link,"_blank");
        $("#txt_banner").html(html);
    }

    show_list_return(){
        var html='';
        html='<table class="table table-striped table-hover table-sm">';
        html+='<tbody id="all_cmd_return"></tbody>';
        html+='<table>';

        swal.fire({
            title:"List Return",
            html:html,
            iconColor: cr.color_btn,
            confirmButtonColor: cr.color_btn,
            didOpen:()=>{
                $.each(ai.chat.list_return,function(index,c){
                    $("#all_cmd_return").append(ai.cmd.box_item_list(c));
                });
            }
        });
    }
}
var chat=new Ai_Chat();
ai.chat=chat;