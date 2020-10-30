class GoalSetting{   
    constructor(){
        this.Text2=createElement("h2");
        this.BackButton2=createButton("Go back");
        this.BackButton2.size(100,30);
        this.Text3=createElement("h2");
        this.submitButton=createButton("Submit");  
        this.goalInput = createInput("Enter your goal...    ");
     
    
        // this.Text3=createElement("h2");
      //  this.submitButton=createButton("Submit");      
    }

    display(){       
        //var Text2=createElement("h2");
        this.Text2.position(width/3,(height-44)/8);
        this.Text2.html("Here are six reasons why setting goals is important.:"
        +"<br/>"+"<br/>"+
        "Goals Give You Focus. Without a goal, your efforts can become"+"<br/>"+
        " disjointed and often confusing...."+"<br/>"+
        "Goals Help You Measure Progress. ..."+"<br/>"+
        "Goals Help You Stay Motivated. ..."+"<br/>"+
        "They Help You Beat Procrastination. ..."+"<br/>"+
        "You Achieve Even More. ... "+"<br/>"+
        " Goals Help You Determine What You Want in Life."+"<br/>"+"<br/>"+
        " THEREFORE, IT IS EXTREMELY IMPORTANT TO SET A GOAL."
        +"<br/>");
        
        this.BackButton2.position(width/2+30,height-44);      
        this.submitButton.position(width/2+20,(height-44)/2+135); 
        this.goalInput.position(width/2, (height-44)/2+100);
 
    this.submitButton.mousePressed(()=>{
          
        user.goal = this.goalInput.value();
         this.Text3.position(width/2-50,(height-44)/2+150);            
         this.Text3.html("Your current goal is: " + user.goal);
         this.goalInput.hide();
         this.submitButton.hide();
         user.updateUserDetails(user.name,user.email,user.goal);
        })
               
        
/*
        this.goalInput=createInput("Enter your goal...    ");
        this.goalInput.position(750,500);

        if(this.submitButton.mousePressed(()=>{
            var goalvalue=this.goalInput.value();
            this.Text3.html("Your current goal is: " + goalvalue);       
        }));
*/
        this.BackButton2.mousePressed(()=>{
            clear();
            game.update(2);
            this.Text2.hide();
            this.Text3.hide();
            this.submitButton.hide();
            this.BackButton2.hide();
            this.goalInput.hide();  
            game.displayChoose();
            //hide();

        });
    }
   hide(){
        this.Text2.hide();
        this.Text3.hide();
        this.submitButton.hide();
        this.BackButton2.hide();
        this.goalInput.hide();   
    }
    
}
