class AI{

    onLoad(){
        cr.setSiteName("AI Lover Commands");
        cr.setSiteUrl("https://ai-lover-cmd.vercel.app");
        cr.setColor("#a02bc9");
        cr.loadJs("js/commands.js","cmd","show");
        cr.add_btn_top();
    }

    show_contact(){
        cr.show_contact();
    }

    show_about(){
        cr.get("about/"+cr.lang+".html?v="+cr.ver,(data)=>{
            $("#ai_content").html(data);
            cr.top();
        });
    }

    box_item(data){
        var empItem=$(`<div class="col-lg-3 col-md-6 mb-4">
                    <div class="card animate__flipInX animate__animated">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-comment"></i> ${data.key}</h5>
                            <p class="card-text">${data.msg}</p>
                        </div>
                    </div>
                </div>`);
        return empItem;
    }

    show_setting(){
        cr.show_setting();
    }

    show_pp(){
        cr.show_pp("#ai_content");
        cr.top();
    }

    show_tos(){
        cr.show_tos("#ai_content");
        cr.top();
    }
}

var ai;

$(document).ready(function() {
    ai=new AI();
    ai.onLoad();
    cr.onLoad();
});

