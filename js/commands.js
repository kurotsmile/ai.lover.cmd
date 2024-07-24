class AI_Command{

    url_data_chat="";
    all_cmd=[];
    url_data={
        ar:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-ar.json",
            "https://www.googleapis.com/drive/v3/files/1zlh7PtfQc_LsBzGR4DkqNPb-RD0Z7cDq?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        cs:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-cs.json",
            "https://www.googleapis.com/drive/v3/files/1zra2HfD7E9gvsiunRsLP1Yo7Mv-tuCZn?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        da:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-da.json",
            "https://www.googleapis.com/drive/v3/files/1zwGy0OnnE35kcUSKihtN_S-ZzLoClI5o?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        de:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-de.json",
            "https://www.googleapis.com/drive/v3/files/1zxFXx43nZeb7wo0TXErR0UpyVZ9Z8l-i?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        en:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-en.json",
            "https://www.googleapis.com/drive/v3/files/1UcqXrwNE3pcWdK9y7tsXVOGXCEcVrcgl?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        es:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-es.json",
            "https://www.googleapis.com/drive/v3/files/1-iha3byGYX3wToCfSFY7axSA0yVwcNAr?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        fi:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-fi.json",
            "https://www.googleapis.com/drive/v3/files/10PHF0OQiuA2oC00A411hRdiXfBtHUIo2?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        fr:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-fr.json",
            "https://www.googleapis.com/drive/v3/files/1-C7DgKVa7PoHYX-VcAtzBrzJjGXPn_gc?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        hi:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-hi.json",
            "https://www.googleapis.com/drive/v3/files/1-OUzEbiCO7qOm0NhRmlHsiX_okoMsqaK?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        id:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-id.json",
            "https://www.googleapis.com/drive/v3/files/1-OcJHaA49esPnR0ps2C-fooLH2Ft5C9u?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        it:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-it.json",
            "https://www.googleapis.com/drive/v3/files/1-SIiLXmLFl3IvaWhKm_3WOgvxTzocS5G?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        ja:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-ja.json",
            "https://www.googleapis.com/drive/v3/files/1-TTgeSJ8QP4VNojrenz8WVE0htuRt1ub?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        ko:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-ko.json",
            "https://www.googleapis.com/drive/v3/files/1-TypURcgmc7nED9bER3XM2t1I5Y_Shdk?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        nl:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-nl.json",
            "https://www.googleapis.com/drive/v3/files/1-YNkyupRxOyxvoAQZMNQwtNpLvvYo-w7?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        pl:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-pl.json",
            "https://www.googleapis.com/drive/v3/files/1-gptQ7uL6aHf_4-j5NPGWCOQMHCFucDn?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        pt:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-pt.json",
            "https://www.googleapis.com/drive/v3/files/1-OKQ0KXNu4tlUkx96_dHNM1wn4GEwKbV?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        th:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-th.json",
            "https://www.googleapis.com/drive/v3/files/1-kyV7ifzJpoqDszIQcySheJk0sOAeYfe?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        tr:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-tr.json",
            "https://www.googleapis.com/drive/v3/files/1-phdn5jyniehzsyYPop-PnKptYVgrqsz?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        ru:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-ru.json",
            "https://www.googleapis.com/drive/v3/files/1TwMjmIbUOGZH5o19PMYci2zKNaR89K4L?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        vi:
        [
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-vi.json",
            "https://www.googleapis.com/drive/v3/files/1-8SaVFOA2wt1zm7MgGFXlu8IpC8saGRb?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ],
        zh:[
            "https://raw.githubusercontent.com/kurotsmile/Database-Store-Json/main/chat-zh.json",
            "https://www.googleapis.com/drive/v3/files/1-wORo14u6JYB5v68i2uURWU0mWltrQto?alt=media&key=AIzaSyDKcjH_bDJz3EcqPdV5i62IZNVQ6EkyOFg"
        ]
    }

    type_show="grid";

    show(){
        $("#ai_content").html('');
        $("#ai_content").append(ai.loading());
        if(this.all_cmd.length==0){
            this.url_data_chat=cr.random(this.url_data[cr.lang]);
            cr.get_json(this.url_data_chat,(data)=>{
                ai.cmd.all_cmd=data["all_item"];
                ai.cmd.load_data(ai.cmd.all_cmd);
            },(error)=>{
                swal.fire({
                    icon:"error",
                    title:"Error",
                    text: error
                });
                ai.cmd.show();
            });
        }else{
            ai.cmd.load_data(ai.cmd.all_cmd);
        }
    }

    show_by_lang(key_lang){
        $("#ai_content").html('');
        $("#ai_content").append(ai.loading());
        if(this.all_cmd.length==0){
            this.url_data_chat=cr.random(this.url_data[key_lang]);
            cr.get_json(this.url_data_chat,(data)=>{
                ai.cmd.all_cmd=data["all_item"];
                ai.cmd.load_data(data);
            },(error)=>{
                swal.fire({
                    icon:"error",
                    title:"Error",
                    text: error
                });
                ai.cmd.show();
            });
        }else{
            ai.cmd.load_data(ai.cmd.all_cmd);
        }
    }

    load_data(data){
        var html='';
        html+='<div class="container mt-5">';
            html+='<h1 class="mb-4">'+cr.l("cmd_list","AI Lover Command List");
                if(cr.dev) html+='<button class="btn btn-light btn-sm  float-right m-1 btn-type-show" onclick="ai.download();return false;"><i class="fas fa-download"></i> Download</button>';
                if(cr.dev) html+='<button class="btn btn-light btn-sm  float-right m-1 btn-type-show" onclick="ai.cmd.add();return false;"><i class="fas fa-plus-circle"></i> Add</button>';
                html+='<button class="btn btn-light btn-sm '+(this.type_show==="list" ? "active" : "")+' float-right m-1 btn-type-show" onclick="ai.cmd.show_list()" id="btn-show-list"><i class="fas fa-list-alt"></i> '+cr.l("btn_list","List")+'</button>';
                html+='<button class="btn btn-light btn-sm '+(this.type_show==="grid" ? "active" : "")+'  float-right m-1 btn-type-show" onclick="ai.cmd.show_grid()" id="btn-show-grid"><i class="fas fa-th"></i> '+cr.l("btn_grid","Grid")+'</button>';
            html+='</h1>';

            html+='<div class="command-section">';
                html+='<h2>'+cr.l("cmd_chat","Basic Commands")+'</h2>';
                html+='<div class="row" id="list_cmd_basic"></div>';
            html+='</div>';

            html+='<div class="command-section">';
                html+='<h2>'+cr.l("cmd_control","Advanced Commands")+'</h2>';
                html+='<div class="row" id="list_cmd_advanced"></div>';
            html+='</div>';

        html+='</div>';

        $("#ai_content").html(html);
        $("#cm_length").html(data.length);
        $.each(data,function(index,c){
            c["index"]=index;
        });
        ai.cmd.load_grid(data);
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
        $("#list_cmd_basic").html('<div class="col-12"><table class="table table-striped table-hover table-sm"><tbody id="all_item_basic"></tbody></table></div>');
        $.each(cr.shuffle(this.filter_data(data,'basic',63)),function(index,c){
            var empC=ai.cmd.box_item_list(c);
            $(empC).click(function(){
                cr_data.info(c,ai.cmd.get_field_customer());
            });
            $("#all_item_basic").append(empC);
        });
        
        $("#list_cmd_advanced").html('');
        $("#list_cmd_advanced").html('<div class="col-12"><table class="table table-striped table-hover table-sm"><tbody id="all_item_advanced"></tbody></table></div>');
        $.each(cr.shuffle(this.filter_data(data,'advanced',63)),function(index,c){
            var empC=ai.cmd.box_item_list(c);
            $(empC).click(function(){
                cr_data.info(c,ai.cmd.get_field_customer());
            });
            $("#all_item_advanced").append(empC);
        });
    }

    box_item_list(c){
        var empItem=$(`
            <tr role="button">
                <td>${c.key}</td>
                <td><small>${c.msg}</small></td>
            </tr>
        `);
        return empItem;
    }

    show_grid(){
        this.type_show="grid";
        this.load_grid(this.all_cmd);
        this.check_btn_show_type("btn-show-grid");
    }

    show_list(){
        this.type_show="list";
        this.load_list(this.all_cmd);
        this.check_btn_show_type("btn-show-list");
    }

    check_btn_show_type(id_btn_show){
        $(".btn-type-show").removeClass("active");
        $("#"+id_btn_show).addClass("active");
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

    show_all(){
        var html='';
        html+='<div class="container mt-5">';
            html+='<div class="command-section">';
                html+='<h2>'+cr.l("cmd_list","All Commands")+'</h2>';
                html+='<table id="table_cmd_ai" class="table table-striped table-hover table-sm"><thead><tr><th>Key</th><th>Msg</th></tr></thead><tbody id="list_all_cmd"></tbody></table>';
            html+='</div>';
        html+='</div>';
        $("#ai_content").html(html);
        $.each(this.all_cmd,function(index,c){
            $("#list_all_cmd").append(ai.cmd.box_item_list(c));
        });

        setInterval(()=>{
            let table = new DataTable('#table_cmd_ai');
            table.stateSave=true;
        },1000);
    }
    
    add(){
        var objOld=this.all_cmd[0];
        var id_new=cr.create_id();
        var dataNew=cr_data.clear_value(objOld);
        dataNew["user"]=this.all_cmd[0].user;
        dataNew["id"]=id_new;
        dataNew["id_import"]=id_new;
        cr_data.add(dataNew,(data)=>{
            ai.cmd.add_data(data);
        },this.get_field_customer());
    }

    add_data(data){
        ai.cmd.all_cmd.push(data);
        ai.cmd.show();
    }

    get_field_customer(){
        var fieldCustomer={};
        var faces=[];
        for(var i=0;i<=18;i++){
            faces.push({value:i,label:"Face "+i});
        }
        var sex={type:"list",datas:[{value:0,label:"Boy"},{value:1,label:"Girl"}]};
        fieldCustomer["face"]={"type":"list",datas:faces};
        fieldCustomer["sex_user"]=sex;
        fieldCustomer["sex_character"]=sex;
        return fieldCustomer;
    }

    delete_cmd(index){
        ai.cmd.all_cmd.splice(index,1);
        ai.cmd.show();
    }
}
var cmd=new AI_Command();
ai.cmd=cmd;
