class TuitionClass{
    constructor(){
     this.Text=createElement("h2");
     this.l1=createElement("h2");
     this.l2=createElement("h2");
     this.l3=createElement("h2");
     this.l4=createElement("h2");
     this.l5=createElement("h2");
     this.l6=createElement("h2");

     this.s1=createInput("");
     this.s2=createInput("");
     this.s3=createInput("");
     this.s4=createInput("");
     this.s5=createInput("");
     this.s6=createInput("");
     this.s7=createInput("");
     
     this.t1=createInput("");
     this.t2=createInput("");
     this.t3=createInput("");
     this.t4=createInput("");
     this.t5=createInput("");
     this.t6=createInput("");
     this.t7=createInput("");

     this.ti1=createInput("");
     this.ti2=createInput("");
     this.ti3=createInput("");
     this.ti4=createInput("");
     this.ti5=createInput("");
     this.ti6=createInput("");
     this.ti7=createInput("");
     
     this.d1=createInput("");
     this.d2=createInput("");
     this.d3=createInput("");
     this.d4=createInput("");
     this.d5=createInput("");
     this.d6=createInput("");
     this.d7=createInput("");

     this.lo1=createInput("");
     this.lo2=createInput("");
     this.lo3=createInput("");
     this.lo4=createInput("");
     this.lo5=createInput("");
     this.lo6=createInput("");
     this.lo7=createInput("");

     this.c1=createInput("");
     this.c2=createInput("");
     this.c3=createInput("");
     this.c4=createInput("");
     this.c5=createInput("");
     this.c6=createInput("");
     this.c7=createInput("");

     this.back=createButton("Back");
     
    }
    display(){
        this.Text.html("Tuition Class"+"</br>"+"Make a record of your tuitions.")
        this.l1.html("Tuition:Subject");
        this.l2.html("Tutor");
        this.l3.html("Timing");
        this.l4.html("Days of the week");
        this.l5.html("Location");
        this.l6.html("Comments");

        this.Text.position(94,100);
        this.l1.position(95,200);
        this.l2.position(280,200);
        this.l3.position(480,200);
        this.l4.position(655,200);
        this.l5.position(880,200);
        this.l6.position(1050,200);
     
         this.s1.position(90,300);
         this.s2.position(90,380);
         this.s3.position(90,460);
         this.s4.position(90,540);
         this.s5.position(90,620);
         this.s6.position(90,700);
         this.s7.position(90,780);

         this.t1.position(280,300);
         this.t2.position(280,380);
         this.t3.position(280,460);
         this.t4.position(280,540);
         this.t5.position(280,620);
         this.t6.position(280,700);
         this.t7.position(280,780);

         this.ti1.position(470,300);
         this.ti2.position(470,380);
         this.ti3.position(470,460);
         this.ti4.position(470,540);
         this.ti5.position(470,620);
         this.ti6.position(470,700);
         this.ti7.position(470,780);

         this.d1.position(660,300);
         this.d2.position(660,380);
         this.d3.position(660,460);
         this.d4.position(660,540);
         this.d5.position(660,620);
         this.d6.position(660,700);
         this.d7.position(660,780);

         this.lo1.position(850,300);
         this.lo2.position(850,380);
         this.lo3.position(850,460);
         this.lo4.position(850,540);
         this.lo5.position(850,620);
         this.lo6.position(850,700);
         this.lo7.position(850,780);

         this.c1.position(1040,300);
         this.c2.position(1040,380);
         this.c3.position(1040,460);
         this.c4.position(1040,540);
         this.c5.position(1040,620);
         this.c6.position(1040,700);
         this.c7.position(1040,780);

        this.back.position(500,850);
        this.back.mousePressed(()=>{
            clear();
            game.update(2);
            this.Text.hide();
            this.back.hide();
            this.l1.hide();
            this.l2.hide();
            this.l3.hide();
            this.l4.hide();
            this.l5.hide();
            this.l6.hide();
       
            this.s1.hide();
            this.s2.hide();
            this.s3.hide();
            this.s4.hide();
            this.s5.hide();
            this.s6.hide();
            this.s7.hide();
            
            this.t1.hide();
            this.t2.hide();
            this.t3.hide();
            this.t4.hide();
            this.t5.hide();
            this.t6.hide();
            this.t7.hide();
       
            this.ti1.hide();
            this.ti2.hide();
            this.ti3.hide();
            this.ti4.hide();
            this.ti5.hide();
            this.ti6.hide();
            this.ti7.hide();
            
            this.d1.hide();
            this.d2.hide();
            this.d3.hide();
            this.d4.hide();
            this.d5.hide();
            this.d6.hide();
            this.d7.hide();
       
            this.lo1.hide();
            this.lo2.hide();
            this.lo3.hide();
            this.lo4.hide();
            this.lo5.hide();
            this.lo6.hide();
            this.lo7.hide();
       
            this.c1.hide();
            this.c2.hide();
            this.c3.hide();
            this.c4.hide();
            this.c5.hide();
            this.c6.hide();
            this.c7.hide();
              
            game.displayChoose();
        })
    }

    hide(){
        this.Text.hide();
        this.back.hide();
        this.l1.hide();
        this.l2.hide();
        this.l3.hide();
        this.l4.hide();
        this.l5.hide();
        this.l6.hide();
   
        this.s1.hide();
        this.s2.hide();
        this.s3.hide();
        this.s4.hide();
        this.s5.hide();
        this.s6.hide();
        this.s7.hide();
        
        this.t1.hide();
        this.t2.hide();
        this.t3.hide();
        this.t4.hide();
        this.t5.hide();
        this.t6.hide();
        this.t7.hide();
   
        this.ti1.hide();
        this.ti2.hide();
        this.ti3.hide();
        this.ti4.hide();
        this.ti5.hide();
        this.ti6.hide();
        this.ti7.hide();
        
        this.d1.hide();
        this.d2.hide();
        this.d3.hide();
        this.d4.hide();
        this.d5.hide();
        this.d6.hide();
        this.d7.hide();
   
        this.lo1.hide();
        this.lo2.hide();
        this.lo3.hide();
        this.lo4.hide();
        this.lo5.hide();
        this.lo6.hide();
        this.lo7.hide();
   
        this.c1.hide();
        this.c2.hide();
        this.c3.hide();
        this.c4.hide();
        this.c5.hide();
        this.c6.hide();
        this.c7.hide();
          
    }
}