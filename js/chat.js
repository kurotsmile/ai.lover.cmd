class Ai_Chat{

    chat(){
        var txt_chat=$("#inp_chat").val();
        $("#inp_chat").val('');

        var list_return=[];
        $.each(ai.cmd.all_cmd,function(index,c){
            if(txt_chat.trim().toLowerCase()==c.key.trim().toLowerCase()){
                list_return.push(c);
            }
        });

        if(list_return.length>0){
            var c=cr.random(list_return);
            if(c.link!="") window.open(c.link,"_blank");
            $("#txt_banner").html(c.msg);
        }else{
            $("#txt_banner").html("None Chat!");
        }
    }
}
var chat=new Ai_Chat();
ai.chat=chat;