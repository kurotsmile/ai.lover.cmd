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
        this.loadApps();
        cr.act_done_pay=this.pay_success;
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
        var html='';

        if(cr.dev){
            html+='<div class="form-group">';
                html+='<label for="btn_site_mapp_file"><i class="fas fa-sitemap"></i> Site Map</label>';
                html+='<div class="d-block mt-1 mb-1" id="btn_site_mapp_file"><button class="btn btn-sm btn-dark" onclick="ai.download_site_map();return false;"><i class="fas fa-download"></i> Download Site Map</button></div>';
            html+='</div>';
        }

        cr.show_setting((setting)=>{
            ai.cmd.all_cmd=[];
            ai.reload();
        },html);
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
        ai.loadApps();
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

    download_site_map(){
        var list_link=[];
        $.each(ai.cmd.all_cmd,function(index,c){
            list_link.push(cr.site_url+"/?c="+c.id_import);
        });
        cr.download_sitemap(list_link);
    }

    box_app(data){
        var appEmp=$(`
            <div class="col-6 col-lg-3 col-md-6 mb-4">
                <div class="app_ai card bg-dark text-white mb-2" style="background-color:${data.color} !important">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src="${data.icon}" class="img-fluid" alt="${data.name}">
                        </div>
                        <div class="col">
                            <div class="card-block px-2">
                                <div class="card-body">
                                    <h4 class="card-title">${data.name}</h4>
                                    <div class="card-text text-white fs-6"><small><i class="fas fa-cloud-download-alt"></i> ${cr.l("download","Download")}</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        `);
        var links=data.links;
        $(appEmp).click(function(){
            window.open(links[0].link,"_blank");
        });
        return appEmp;
    }

    loadApps(){
        $("#apps").html('');
        cr.get_json("apps.json",function(data){
            $.each(data,function(index,app){
                var emp=ai.box_app(app);
                $("#apps").append(emp);
            });
        });
    }

    pay_success(){
        ai.chat.buy_chat="true";
    }
}

var ai;

$(document).ready(function() {
    ai=new AI();
    ai.onLoad();
});

