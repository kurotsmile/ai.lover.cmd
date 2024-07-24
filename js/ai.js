class AI{

    cur_menu="home";

    onLoad(){
        cr.onLoad(true);
        cr.setColor("#a02bc9");
        cr.add_btn_top();
        cr.setSiteName("AI Lover Commands");
        cr.setSiteUrl("https://ai-lover-cmd.vercel.app");
        cr.loadJs("js/commands.js","cmd","show");
        cr.loadJs("js/chat.js","chat","onLoad");
        this.banner_welcome();
    }

    act_menu(id){
        this.cur_menu=id;
        $(".m-menu").removeClass("active");
        $("#m-"+id).addClass("active");
    }

    home(){
        this.act_menu("home");
        this.cmd.show();
    }

    show_contact(){
        cr.show_contact();
        this.act_menu("contact");
    }

    show_about(){
        cr.get("about/"+cr.lang+".html?v="+cr.ver,(data)=>{
            ai.act_menu("about");
            $("#ai_content").html(data);
            cr.top();
        });
    }

    box_item(data){
        var empItem=$(`<div class="col-6 col-lg-3 col-md-6 mb-4">
                    <div class="card animate__flipInX animate__animated">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-comment"></i> ${data.key}</h5>
                            <p class="card-text">${data.msg}</p>
                        </div>
                    </div>
                </div>`);

        $(empItem).click(function(){
            cr_data.info(data,ai.cmd.get_field_customer());
        });
        return empItem;
    }

    show_setting(){
        cr.show_setting((setting)=>{
            ai.cmd.all_cmd=[];
            ai.reload();
        });
    }

    show_pp(){
        this.act_menu("pp");
        cr.show_pp("#ai_content");
        cr.top();
    }

    show_tos(){
        this.act_menu("tos");
        cr.show_tos("#ai_content");
        cr.top();
    }

    loading(){
        var empLoading=$(`
            <div class="row text-center">
                <div class="col-12"><i class="fas fa-spinner fa-spin fa-3x"></i></div>
            </div>
        `);
        return empLoading;
    }

    ai_chat(){
        cr.loadJs("js/chat.js","chat","chat");
    }

    show_all_cmd(){
        ai.cmd.show_all();
    }

    download(){
        var data={
            "all_item":ai.cmd.all_cmd,
            "collection": "chat-"+cr.lang
        }
        cr.download(data,data.collection);
    }

    reload(){
        if(ai.cur_menu=="home") ai.cmd.show();
        if(ai.cur_menu=="about") ai.show_about();
    }

    banner_welcome(){
        $("#txt_banner").html('<span class="h1">AI <i class="fas fa-heart animate__heartBeat animate__animated animate__infinite"></i> Lover Command</span>');
    }

    typeEffect(element, text, speed) {
        let index = 0;
        const intervalId = setInterval(() => {
            $(element).text($(element).text() + text[index]);
            index++;
            if (index >= text.length) {
                clearInterval(intervalId);
            }
        }, speed);
    }
}

var ai;

$(document).ready(function() {
    ai=new AI();
    ai.onLoad();
});

