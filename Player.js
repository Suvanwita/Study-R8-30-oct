class User{
    constructor(){
        this.name=null;
        this.email=null;
        this.goal=null;
    }

    getUserCount(){
        var userCountRef=database.ref("userCount");
        userCountRef.on("value",function(data){
            userCount=data.val();     
        });
    }
   
    updateUserCount(count){
        database.ref('/').update({
            userCount:count
        })    
        console.log(userCount);
    }

    updateUserDetails(){
        var userIndex="User"+userCount;
       
        database.ref("Users/"+userIndex).update({
            name:this.name,
            email:this.email,
            goal:this.goal
        })
    }

  //goal setting      
    readGoal(data){
    userGoal=database.ref("Users/UserIndex/Goal");
    userGoal.on("value",function(data){
        userGoal=data.val();
    });
   }
     writeGoal(data){
        database.ref("Users/UserIndex/Goal").set({
            Goal:goalvalue
        })            
     }
    /*
   //library
   readBook1(data){
    userGoal=database.ref("Users/UserIndex/Book1");
    userGoal.on("value",function(data){
        userGoal=data.val();
    });
   }
   writeBook1(data){
    database.ref("Users/UserIndex/Book1").set({
        Book1:book1Input.value()
    })            
    }
  */ 
     
   
    }


