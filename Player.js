class Player{

constructor(){
        this.access1 = createInput("what is your name?")
        this.access1.position(100,90);
        this.access1.style('background', 'blue');  

        this.button1 = createButton('play');
        this.button1.position(100,150);
        this.button1.style('background', 'red');    

        this.access2 = createInput("what is your age?")
        this.access2.position(100,120);
        this.access2.style('background', 'blue');  
        
        this.greeting = createElement('h1');
        

}
display(){
this.button1.mousePressed(() => {
        {
  this.button1.hide();
 this.access1.hide();
 this.access2.hide();

 this.greeting.html("WELCOME TO THE ANIMAL KINGDOM!! ")
 this.greeting.position(350, 150);
 image(catImg,100,100,50,50);
 //image(dogImg,780,300);
  }
});
}
}







