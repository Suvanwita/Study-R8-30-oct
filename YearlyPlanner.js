class YearlyPlanner{
    constructor(){
        this.Text=createElement("h2");
        this.YearLabel=createElement("h2");
        this.YearGoalLabel=createElement("h2");
        this.YearInp1=createInput();
        this.YearInp2=createInput();
        this.YearInp3=createInput();
        this.YearGoal1=createInput();
        this.YearGoal2=createInput();
        this.YearGoal3=createInput();

        this.back=createButton("BACK");

               
    }
    display(){
        this.Text.position(200,100);
        this.Text.html("YEARLY PLANNER"+"</br>"+"Make a list of goals you need to accomplish in a particular year.");
         
        this.YearLabel.position(320,300);
        this.YearLabel.html("Year");

        this.YearGoalLabel.position(620,300);
        this.YearGoalLabel.html("Goal");

        this.YearInp1.position(320,400);
        this.YearInp2.position(320,500);
        this.YearInp3.position(320,600);
        this.YearGoal1.position(620,400);
        this.YearGoal2.position(620,500);
        this.YearGoal3.position(620,600);

        this.YearInp1.size(250,50);
        this.YearInp2.size(250,50);
        this.YearInp3.size(250,50);

        this.YearGoal1.size(570,50);
        this.YearGoal2.size(570,50);
        this.YearGoal3.size(570,50);
        
        this.back.position(650,700);
        this.back.mousePressed(()=>{
            clear();
            game.update(2);
            this.Text.hide();
            this.YearGoalLabel.hide();
            this.YearLabel.hide();
            this.YearInp1.hide();
            this.YearInp2.hide();
            this.YearInp3.hide();
            this.YearGoal1.hide();
            this.YearGoal2.hide();
            this.YearGoal3.hide(); 
            this.back.hide();         
            game.displayChoose();
        });

    }

    hide(){
        this.Text.hide();
        this.YearGoalLabel.hide();
        this.YearLabel.hide();
        this.YearInp1.hide();
        this.YearInp2.hide();
        this.YearInp3.hide();
        this.YearGoal1.hide();
        this.YearGoal2.hide();
        this.YearGoal3.hide();
        this.back.hide();       
    }
}