class MonthlyPlanner{
    constructor(){
        this.Text=createElement("h2");
        this.week1=createInput("WEEK1");
        this.week2=createInput("WEEK2");
        this.week3=createInput("WEEK3");
        this.week4=createInput("WEEK4");
        this.goal1=createInput("");
        this.goal2=createInput("");
        this.goal3=createInput("");
        this.goal4=createInput("");
        this.back=createButton("GO BACK");

    
    }
    display(){
        this.Text.position(300,180);
        this.Text.html("MONTHLY PLANNER"+"</br>"+"Here you can make your monthly study plans."+"Make a list of dates to accomplish a task.");

        this.week1.position(300,300);
        this.week2.position(300,400);
        this.week3.position(300,500);
        this.week4.position(300,600);

        this.week1.size(270,50);
        this.week2.size(270,50);
        this.week3.size(270,50);
        this.week4.size(270,50);
        
        this.goal1.position(600,300);
        this.goal2.position(600,400);
        this.goal3.position(600,500);
        this.goal4.position(600,600);

        this.goal1.size(600,50);
        this.goal2.size(600,50);
        this.goal3.size(600,50);
        this.goal4.size(600,50);

        this.back.position(740,690);
        this.back.size(100,40);
        
        this.back.mousePressed(()=>{
            clear();
            game.update(2);
            this.Text.hide();
            this.week1.hide();
            this.week2.hide();
            this.week3.hide();
            this.week4.hide();
            this.goal1.hide();  
            this.goal2.hide(); 
            this.goal3.hide(); 
            this.goal4.hide(); 
            this.back.hide();   
            game.displayChoose();
            //hide();

        });
    }
   hide(){
        this.week1.hide();
        this.week2.hide();
        this.week3.hide();
        this.week4.hide();
        this.goal1.hide();  
        this.goal2.hide(); 
        this.goal3.hide(); 
        this.goal4.hide(); 
        this.back.hide(); 
        this.Text.hide(); 
    }
    
}