class Form1{
    constructor(){}

    display(){
        var WelcomeLabel=createElement("h2");
        WelcomeLabel.position(width/3+50,(height-44)/8);
        WelcomeLabel.html("Let's plan everything regarding your studies with Study R8! ");
        //WelcomeLabel.style('font-style','Arial');

        var nameLabel=createElement("h3");
        nameLabel.position(width/3+50,(height-44)/4-10);
        nameLabel.html("Name:");

        var input1=createInput("");
        input1.position(width/3+150,(height-44)/4);
        input1.size(250,30);

        var emailLabel=createElement("h3");
        emailLabel.position(width/3+50,(height-44)/4+85);
        emailLabel.html("Email-Id:");

        var input2=createInput("");
        input2.position(width/3+150,(height-44)/4+90);
        input2.size(250,30);

        var NextButton=createButton("Next");
        NextButton.position(width/3+170,(height-44)/4+160);
        NextButton.size(100,30);

        NextButton.mousePressed(function(){

            user.name=input1.value();
            user.email=input2.value();
            
            input1.hide();
            input2.hide();
            nameLabel.hide();
            emailLabel.hide();
            NextButton.hide();
            WelcomeLabel.hide();

            game.update(1);
            game.displayInfo();

    
            user.updateUserCount(userCount+1);
            user.updateUserDetails(user.name,user.email);
                
          
        })
  
    }

}