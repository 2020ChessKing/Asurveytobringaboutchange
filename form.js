class Form
{
    constructor()
    {
      this.input = createInput(" ");
      this.input2 = createInput(" ");
      this.input3 = createInput(" ");
      this.input4 = createInput(" ");

      this.button = createButton("-------------------------|Submit|--------------------------");

      this.greeting1 = createElement('h1');
      this.greeting2 = createElement('h1');
      this.greeting3 = createElement('h2');
      this.greeting4 = createElement('h4');

      this.i = 0;
      this.it = [];
    }

    update()
    {
    
      var add = "VoterEmail/" + this.input2.value();
      database.ref(add).update(
        {
         Email : this.input.value(),
         Name : this.input2.value(),
         DateOfBirth : this.input3.value(),
         Opinion : this.input4.value()
        }
      )
    }


    display()
    {
      this.input.position(200, 200);   
      this.button.position(150, 870);
      
      this.greeting1.html("Please Enter Your Email");
      this.greeting1.position(130, 100);
    //   this.array.push(this.greeting1);
    //   this.greeting1.hide();

      this.greeting2.html("Please Enter Your Name");
      this.greeting2.position(130, 300);
      this.input2.position(200, 400);   

    //   this.array.push(this.greeting2);
    //   this.greeting2.hide();

      this.greeting3.html("Please Enter Your Birthdate in dd/mm/yyyy");
      this.greeting3.position(110, 500);
      this.input3.position(200, 600);   

    //   this.array.push(this.greeting3);
    //   this.greeting3.hide();

      this.greeting4.html("Do you or do you not that that schools should hold online chess classes?");
      this.greeting4.position(80, 700);
      this.input4.position(200, 800);   
    //   this.array.push(this.greeting4);
    //   this.greeting4.hide();


      this.button.mousePressed(()=>
      {
         this.update(); 
      })

      
    }
}