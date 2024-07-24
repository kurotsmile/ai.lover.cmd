class Ai_Chat{

    list_return=[];
    type_return="=";

    chat_limit_pay=10;
    chat_count_pay=0;

    chat_cur=null;

    onLoad(){
        $('#inp_chat').on('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                ai.chat.chat();
            }
        });
    }

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
                if(k_chat.indexOf(k_key)){
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
        this.chat_cur=data;
        this.chat_count_pay++;
        if(this.chat_count_pay>=this.chat_limit_pay){
            cr.show_pay("Continue chatting","Buy a chat package to use it forever without interruption","3.99","true","buy_chat");
            this.chat_count_pay=0;
        }

        if(data==null){
            $("#txt_banner").html("None Chat!");
            ai.chat.chat_cur=null;
            return false;
        }

        var html='';
        html+='<div id="msg_chat_ai"></div>';
        html+='<br/><br/><button class="btn btn-sm btn-light m-1 animate__animated animate__bounceIn" onclick="ai.chat.show_list_return();return false;"><i class="fas '+(this.type_return==="=" ? 'fa-comment-alt': 'fa-comments')+'"></i> '+ai.chat.list_return.length+'</button>';
        html+='<button class="btn btn-sm btn-light m-1 animate__animated animate__bounceIn" onclick="ai.chat.clone();return false;"><i class="fas fa-clone"></i> Clone</button>';
        html+='<button class="btn btn-sm btn-light m-1 animate__animated animate__bounceIn" onclick="ai.chat.delete_chat();return false;"><i class="fas fa-backspace"></i> Delete</button>';
        html+='<button class="btn btn-sm btn-light m-1 animate__animated animate__bounceIn" onclick="ai.chat.close();return false;"><i class="fas fa-times-circle"></i> Close</button>';
        if(data.link!="") window.open(data.link,"_blank");
        $("#txt_banner").html(html);
        ai.typeEffect("#msg_chat_ai",data.msg,20);
    }

    show_list_return(){
        var html='';
        html='<table class="table table-striped table-hover table-sm text-left">';
        html+='<tbody id="all_cmd_return"></tbody>';
        html+='<table>';

        swal.fire({
            title:"List Return",
            html:html,
            iconColor: cr.color_btn,
            confirmButtonColor: cr.color_btn,
            didOpen:()=>{
                $.each(ai.chat.list_return,function(index,c){
                    var c_item=ai.cmd.box_item_list(c);
                    $(c_item).click(()=>{
                        Swal.close();
                        cr_data.info(c);
                    });
                    $("#all_cmd_return").append(c_item);
                });
            }
        });
    }

    clone(){
        var objClone= Object.assign({},this.chat_cur);
        var id_new=cr.create_id();
        objClone["id"]=id_new;
        objClone["id_import"]=id_new;
        cr_data.edit(objClone,(data)=>{
            ai.cmd.add_data(data);
        },ai.cmd.get_field_customer());
    }

    delete_chat(){
        ai.cmd.delete_cmd(parseInt(this.chat_cur["index"]));
        this.chat_cur=null;
        ai.banner_welcome();
    }

    close(){
        this.chat_cur=null;
        ai.banner_welcome();
        $("#inp_chat").val('');
    }
}
var chat=new Ai_Chat();
ai.chat=chat;