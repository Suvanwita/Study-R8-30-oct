class Cocurricular {
    constructor(){
        this.cocurricularText=createElement("h1");
        this.l1=createElement("h2");
        this.l2=createElement("h2");
        this.l3=createElement("h2");
        this.l4=createElement("h2");
        this.l5=createElement("h2");
        this.c1=createInput("");
        this.c2=createInput("");
        this.c3=createInput("");
        this.c4=createInput("");
        this.c5=createInput("");
        this.c6=createInput("");
        this.c7=createInput("");
        this.c8=createInput("");
        this.d1=createInput("");
        this.d2=createInput("");
        this.d3=createInput("");
        this.d4=createInput("");
        this.d5=createInput("");
        this.d6=createInput("");
        this.d7=createInput("");
        this.d8=createInput("");
        this.t1=createInput("");
        this.t2=createInput("");
        this.t3=createInput("");
        this.t4=createInput("");
        this.t5=createInput("");
        this.t6=createInput("");
        this.t7=createInput("");
        this.t8=createInput("");
        this.g1=createInput("");
        this.g2=createInput("");
        this.g3=createInput("");
        this.g4=createInput("");
        this.g5=createInput("");
        this.g6=createInput("");
        this.g7=createInput("");
        this.g8=createInput("");
        this.r1=createInput("");
        this.r2=createInput("");
        this.r3=createInput("");
        this.r4=createInput("");
        this.r5=createInput("");
        this.r6=createInput("");
        this.r7=createInput("");
        this.r8=createInput("");
        this.BackButton=createButton("Return");
        
    }
    display(){
        this.cocurricularText.position(250,100);
        this.cocurricularText.html("COCURRICULAR ACTIVITIES"+"</br>"+"You can plan your cocurricular activities.");
   
        this.l1.position(260,230);
        this.l1.html("Activity/Event");

        this.l2.position(460,230);
        this.l2.html("Day & Time-slot");

        this.l3.position(670,230);
        this.l3.html("Teacher/Trainer");

        this.l4.position(860,230);
        this.l4.html("Your Goal/Target");

        this.l5.position(1050,230);
        this.l5.html("Remarks");
   
        this.c1.position(260,310);
        this.c2.position(260,370);
        this.c3.position(260,430);
        this.c4.position(260,490);
        this.c5.position(260,550);
        this.c6.position(260,610);
        this.c7.position(260,670);
        this.c8.position(260,730);

        this.d1.position(460,310);
        this.d2.position(460,370);
        this.d3.position(460,430);
        this.d4.position(460,490);
        this.d5.position(460,550);
        this.d6.position(460,610);
        this.d7.position(460,670);
        this.d8.position(460,730); 

        this.t1.position(660,310);
        this.t2.position(660,370);
        this.t3.position(660,430);
        this.t4.position(660,490);
        this.t5.position(660,550);
        this.t6.position(660,610);
        this.t7.position(660,670);
        this.t8.position(660,730);

        this.g1.position(860,310);
        this.g2.position(860,370);
        this.g3.position(860,430);
        this.g4.position(860,490);
        this.g5.position(860,550);
        this.g6.position(860,610);
        this.g7.position(860,670);
        this.g8.position(860,730);

        this.r1.position(1060,310);
        this.r2.position(1060,370);
        this.r3.position(1060,430);
        this.r4.position(1060,490);
        this.r5.position(1060,550);
        this.r6.position(1060,610);
        this.r7.position(1060,670);
        this.r8.position(1060,730);

        this.BackButton.position(792,775);

        this.BackButton.mousePressed(()=>{
            clear();
            game.update(2);
            this.cocurricularText.hide();
            this.l1.hide();
            this.l2.hide();
            this.l3.hide();
            this.l4.hide();
            this.l5.hide();

            this.c1.hide();
            this.d1.hide();
            this.t1.hide();
            this.g1.hide();
            this.r1.hide();
            
            this.c2.hide();
            this.d2.hide();
            this.t2.hide();
            this.g2.hide();
            this.r2.hide();
            
            this.c3.hide();
            this.d3.hide();
            this.t3.hide();
            this.g3.hide();
            this.r3.hide();
            
            this.c4.hide();
            this.d4.hide();
            this.t4.hide();
            this.g4.hide();
            this.r4.hide();
            
            this.c5.hide();
            this.d5.hide();
            this.t5.hide();
            this.g5.hide();
            this.r5.hide();
            
            this.c6.hide();
            this.d6.hide();
            this.t6.hide();
            this.g6.hide();
            this.r6.hide();

            this.c7.hide();
            this.d7.hide();
            this.t7.hide();
            this.g7.hide();
            this.r7.hide();

            this.c8.hide();
            this.d8.hide();
            this.t8.hide();
            this.g8.hide();
            this.r8.hide();
            
            this.BackButton.hide();
            game.displayChoose();
            
        })

     //   this.create
    }

    hide(){
        this.cocurricularText.hide();
        this.l1.hide();
        this.l2.hide();
        this.l3.hide();
        this.l4.hide();
        this.l5.hide();

        this.c1.hide();
        this.d1.hide();
        this.t1.hide();
        this.g1.hide();
        this.r1.hide();
        
        this.c2.hide();
        this.d2.hide();
        this.t2.hide();
        this.g2.hide();
        this.r2.hide();
        
        this.c3.hide();
        this.d3.hide();
        this.t3.hide();
        this.g3.hide();
        this.r3.hide();
        
        this.c4.hide();
        this.d4.hide();
        this.t4.hide();
        this.g4.hide();
        this.r4.hide();
        
        this.c5.hide();
        this.d5.hide();
        this.t5.hide();
        this.g5.hide();
        this.r5.hide();
        
        this.c6.hide();
        this.d6.hide();
        this.t6.hide();
        this.g6.hide();
        this.r6.hide();

        this.c7.hide();
        this.d7.hide();
        this.t7.hide();
        this.g7.hide();
        this.r7.hide();

        this.c8.hide();
        this.d8.hide();
        this.t8.hide();
        this.g8.hide();
        this.r8.hide();
        
        this.BackButton.hide();
    }
}