class AI{

    onLoad(){
        cr.setColor("#a02bc9");
        cr.loadJs("js/commands.js","cmd","show");
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
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${data.key}</h5>
                            <p class="card-text">${data.msg}</p>
                        </div>
                    </div>
                </div>`);
        return empItem;
    }
}

var ai;

$(document).ready(function() {
    ai=new AI();
    ai.onLoad();
    cr.onLoad();
});

