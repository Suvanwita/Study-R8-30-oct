class YourProgress{
    constructor(){
        this.text=createElement("h2");

        this.label1=createElement("h2");
        this.label2=createElement("h2");
        this.label3=createElement("h2");
        this.label4=createElement("h2");
        
        this.test1=createInput("");
        this.test2=createInput("");
        this.test3=createInput("");
        this.test4=createInput("");
        this.test5=createInput("");
        this.subject1=createInput("");
        this.subject2=createInput("");
        this.subject3=createInput("");
        this.subject4=createInput("");
        this.subject5=createInput("");
        this.fullmarks1=createInput("");
        this.fullmarks2=createInput("");
        this.fullmarks3=createInput("");
        this.fullmarks4=createInput("");
        this.fullmarks5=createInput("");
        this.marks1=createInput("");
        this.marks2=createInput("");
        this.marks3=createInput("");
        this.marks4=createInput("");
        this.marks5=createInput("");
        
        this.BackButton=createButton("BACK");

        this.fullScore=this.fullmarks1.value()+this.fullmarks2.value()+this.fullmarks3.value()+this.fullmarks4.value()+this.fullmarks5.value();
        this.userScore=this.marks1.value()+this.marks2.value()+this.marks3.value()+this.marks4.value()+this.marks5.value();
        this.percentage=(this.userScore*100)/this.fullScore;
 
        
    }

    display(){
        this.text.position(200,100);
        this.text.html("YOUR PROGRESS");
        this.BackButton.position(700,830);
        
        this.label1.position(240,240);
        this.label1.html("Test");
        this.label2.position(490,240);
        this.label2.html("Subject");
        this.label3.position(740,240);
        this.label3.html("Full marks");
        this.label4.position(990,240);
        this.label4.html("Your marks");

        this.test1.position(240,340);
        this.test2.position(240,440);
        this.test3.position(240,540);
        this.test4.position(240,640);
        this.test5.position(240,740);

        this.subject1.position(490,340);
        this.subject2.position(490,440);
        this.subject3.position(490,540);
        this.subject4.position(490,640);
        this.subject5.position(490,740);

        this.fullmarks1.position(740,340);
        this.fullmarks2.position(740,440);
        this.fullmarks3.position(740,540);
        this.fullmarks4.position(740,640);
        this.fullmarks5.position(740,740);

        this.marks1.position(990,340);
        this.marks2.position(990,440);
        this.marks3.position(990,540);
        this.marks4.position(990,640);
        this.marks5.position(990,740);


        this.BackButton.mousePressed(()=>{
          clear();
          game.update(2);
          this.text.hide();
          this.BackButton.hide();
          this.label1.hide();
          this.label2.hide();
          this.label3.hide();
          this.label4.hide();
          this.test1.hide();
          this.test2.hide();
          this.test3.hide();
          this.test4.hide();
          this.test5.hide();
          this.subject1.hide();
          this.subject2.hide();
          this.subject3.hide();
          this.subject4.hide();
          this.subject5.hide();
          this.fullmarks1.hide();
          this.fullmarks2.hide();
          this.fullmarks3.hide();
          this.fullmarks4.hide();
          this.fullmarks5.hide();
          this.marks1.hide();
          this.marks2.hide();
          this.marks3.hide();
          this.marks4.hide();
          this.marks5.hide();         
           game.displayChoose();
        });
    }

    hide(){
      this.text.hide();
      this.BackButton.hide();
      this.label1.hide();
      this.label2.hide();
      this.label3.hide();
      this.label4.hide();
      this.test1.hide();
      this.test2.hide();
      this.test3.hide();
      this.test4.hide();
      this.test5.hide();
      this.subject1.hide();
      this.subject2.hide();
      this.subject3.hide();
      this.subject4.hide();
      this.subject5.hide();
      this.fullmarks1.hide();
      this.fullmarks2.hide();
      this.fullmarks3.hide();
      this.fullmarks4.hide();
      this.fullmarks5.hide();
      this.marks1.hide();
      this.marks2.hide();
      this.marks3.hide();
      this.marks4.hide();
      this.marks5.hide(); 
    }
}
