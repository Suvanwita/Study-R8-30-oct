class FeesPayments{
  constructor(){
  this.Text=createElement("h2");
  this.label1=createElement("h3");
  this.label2=createElement("h3");
  //months
  this.Jan=createElement("h3");
  this.Feb=createElement("h3");
  this.Mar=createElement("h3");
  this.Apr=createElement("h3");
  this.May=createElement("h3");
  this.June=createElement("h3");
  this.July=createElement("h3");
  this.Aug=createElement("h3");
  this.Sept=createElement("h3");
  this.Oct=createElement("h3");
  this.Nov=createElement("h3");
  this.Dec=createElement("h3");
  
  this.BackButton=createButton("BACK");
  this.BackButton.size(100,30);

  this.i1=createInput("");
  this.i2=createInput("");
  this.i3=createInput("");
  this.i4=createInput("");
  this.i5=createInput("");
  this.i6=createInput("");
  this.i7=createInput("");
  this.i8=createInput("");
  this.i9=createInput("");
  this.i10=createInput("");
  this.i11=createInput("");
  this.i12=createInput("");
  this.i13=createInput("");
  this.i14=createInput("");
  this.i15=createInput("");
  this.i16=createInput("");
  this.i17=createInput("");
  this.i18=createInput("");
  
 
   
  }
  
display(){
  for (var feeCheckY = 245; feeCheckY < 760; feeCheckY += 30) {
    for (var feeCheckX = 360; feeCheckX < 1280; feeCheckX += 80) {
    var check=createCheckbox("",false)
    check.position(feeCheckX, feeCheckY);
     checks.push(check);
    }
  }
 
this.i1.position(130,240);
this.i2.position(130,275);
this.i3.position(130,305);
this.i4.position(130,335);
this.i5.position(130,365);
this.i6.position(130,395);
this.i7.position(130,425);
this.i8.position(130,455);
this.i9.position(130,485);
this.i10.position(130,515);
this.i11.position(130,545);
this.i12.position(130,575);
this.i13.position(130,605);
this.i14.position(130,635);
this.i15.position(130,665);
this.i16.position(130,695);
this.i17.position(130,725);
this.i18.position(130,755);

this.i1.size(180,20);
this.i2.size(180,20);
this.i3.size(180,20);
this.i4.size(180,20);
this.i5.size(180,20);
this.i6.size(180,20);
this.i7.size(180,20);
this.i8.size(180,20);
this.i9.size(180,20);
this.i10.size(180,20);
this.i11.size(180,20);
this.i12.size(180,20);
this.i13.size(180,20);
this.i14.size(180,20);
this.i15.size(180,20);
this.i16.size(180,20);
this.i17.size(180,20);
this.i18.size(180,20);




 
  this.Text.position(120,90);
  this.Text.html("FEES PAYMENT"+"</br>"+"Keep a record of the fees paid to school or other tutors.")
 
  this.label1.position(130,200);
  this.label1.html("School/Teacher");
  this.label2.position(265,200);
  this.label2.html("Amount");

  this.Jan.position(345,200);
  this.Jan.html("Jan");
  this.Feb.position(425,200);
  this.Feb.html("Feb");
  this.Mar.position(505,200);
  this.Mar.html("Mar");
  this.Apr.position(585,200);
  this.Apr.html("Apr");
  this.May.position(665,200);
  this.May.html("May");
  this.June.position(745,200);
  this.June.html("June");
  this.July.position(825,200);
  this.July.html("July");
  this.Aug.position(905,200);
  this.Aug.html("Aug");
  this.Sept.position(985,200);
  this.Sept.html("Sept");
  this.Oct.position(1065,200);
  this.Oct.html("Oct");
  this.Nov.position(1145,200);
  this.Nov.html("Nov");
  this.Dec.position(1225,200);
  this.Dec.html("Dec");

  this.BackButton.position(780,800); 

  this.BackButton.mousePressed(()=>{
    clear();
    for (var i=0;i<checks.length; i++){
      checks[i].hide();
    }
    game.update(2);
    this.Text.hide();
    this.label1.hide();
    this.label2.hide();
    this.Jan.hide();
    this.Feb.hide();  
    this.Mar.hide();
    this.Apr.hide();
    this.May.hide();
    this.June.hide();  
    this.July.hide();
    this.Aug.hide();
    this.Sept.hide();
    this.Oct.hide();  
    this.Nov.hide();
    this.Dec.hide();
    this.i1.hide();
    this.i2.hide();
    this.i3.hide();
    this.i4.hide();
    this.i5.hide();
    this.i6.hide();
    this.i7.hide();
    this.i8.hide();
    this.i9.hide();
    this.i10.hide();
    this.i11.hide();
    this.i12.hide();
    this.i13.hide();
    this.i14.hide();
    this.i15.hide();
    this.i16.hide();
    this.i17.hide();
    this.i18.hide();
    this.BackButton.hide();
    /*for(feej=1;feej<=216;feej++){
      check.hide();
      }*/
    game.displayChoose();
    //hide();

    });
  }
  hide(){
    this.Text.hide();
    this.label1.hide();
    this.label2.hide();
    this.Jan.hide();
    this.Feb.hide();  
    this.Mar.hide();
    this.Apr.hide();
    this.May.hide();
    this.June.hide();  
    this.July.hide();
    this.Aug.hide();
    this.Sept.hide();
    this.Oct.hide();  
    this.Nov.hide();
    this.Dec.hide();  
    this.BackButton.hide();
    this.i1.hide();
    this.i2.hide();
    this.i3.hide();
    this.i4.hide();
    this.i5.hide();
    this.i6.hide();
    this.i7.hide();
    this.i8.hide();
    this.i9.hide();
    this.i10.hide();
    this.i11.hide();
    this.i12.hide();
    this.i13.hide();
    this.i14.hide();
    this.i15.hide();
    this.i16.hide();
    this.i17.hide();
    this.i18.hide();

    for(var feej=1;feej<=216;feej++){
    check[i].hide();
    }



}


  

}






/*
class FeesPayments{
    constructor(){
    this.Text=createElement("h2");
    this.label1=createElement("h3");
    this.label2=createElement("h3");
    //months
    this.Jan=createElement("h3");
    this.Feb=createElement("h3");
    this.Mar=createElement("h3");
    this.Apr=createElement("h3");
    this.May=createElement("h3");
    this.June=createElement("h3");
    this.July=createElement("h3");
    this.Aug=createElement("h3");
    this.Sept=createElement("h3");
    this.Oct=createElement("h3");
    this.Nov=createElement("h3");
    this.Dec=createElement("h3");
    
    this.BackButton=createButton("Return");
    this.BackButton.size(100,30);
    }
    
    display(){
    this.Text.position(120,90);
    this.Text.html("FEES PAYMENT"+"</br>"+"Keep a record of the fees paid to school or other tutors.")
   
    this.label1.position(130,200);
    this.label1.html("School/Teacher");
    this.label2.position(265,200);
    this.label2.html("Amount");

    this.Jan.position(345,200);
    this.Jan.html("Jan");
    this.Feb.position(425,200);
    this.Feb.html("Feb");
    this.Mar.position(505,200);
    this.Mar.html("Mar");
    this.Apr.position(585,200);
    this.Apr.html("Apr");
    this.May.position(665,200);
    this.May.html("May");
    this.June.position(745,200);
    this.June.html("June");
    this.July.position(825,200);
    this.July.html("July");
    this.Aug.position(905,200);
    this.Aug.html("Aug");
    this.Sept.position(985,200);
    this.Sept.html("Sept");
    this.Oct.position(1065,200);
    this.Oct.html("Oct");
    this.Nov.position(1145,200);
    this.Nov.html("Nov");
    this.Dec.position(1225,200);
    this.Dec.html("Dec");

    this.BackButton.position(780,800);

    for (var feeCheckY = 245; feeCheckY < 760; feeCheckY += 30) {
      for (var feeCheckX = 360; feeCheckX < 1280; feeCheckX += 80) {
          // createCheckbox(feeCheckX,feecheckY);
          check = createCheckbox("", false);
          check.position(feeCheckX, feeCheckY);
         checks.push(check);
      }     
  }

     

    this.BackButton.mousePressed(()=>{
      clear();
      game.update(2);
      this.Text.hide();
      this.label1.hide();
      this.label2.hide();
      this.Jan.hide();
      this.Feb.hide();  
      this.Mar.hide();
      this.Apr.hide();
      this.May.hide();
      this.June.hide();  
      this.July.hide();
      this.Aug.hide();
      this.Sept.hide();
      this.Oct.hide();  
      this.Nov.hide();
      this.Dec.hide();
      this.BackButton.hide();

      var checks=[];
      for(var j=0;j<=checks.length;j++){
        checks[j].hide();
        }
      game.update(2);
      game.displayChoose();
      //hide();

      });
    }
    hide(){
      this.Text.hide();
      this.label1.hide();
      this.label2.hide();
      this.Jan.hide();
      this.Feb.hide();  
      this.Mar.hide();
      this.Apr.hide();
      this.May.hide();
      this.June.hide();  
      this.July.hide();
      this.Aug.hide();
      this.Sept.hide();
      this.Oct.hide();  
      this.Nov.hide();
      this.Dec.hide();  
      this.BackButton.hide();
      for(var j=0;j<=216;j++){
        checks[j].hide();
        }


    }


    

}
*/