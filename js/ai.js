class AI{

    onLoad(){
        cr.setColor("#a02bc9");
        cr.loadJs("js/commands.js","cmd","show");
        cr.add_btn_top();
    }

    show_contact(){
        cr.show_contact();
    }

    show_about(){
        cr.get("about/"+cr.lang+".html",(data)=>{
            $("#ai_content").html(data);
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
}

var ai;

$(document).ready(function() {
    ai=new AI();
    ai.onLoad();
    cr.onLoad();
});

