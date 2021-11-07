class Cat{
constructor(){
    this.title = createElement('h1')
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
}
display(){
    this.title.html("cat quize");
    this.title.position(350, 0);

    this.question.html("Question:- what does a cat eat?" );
    this.question.position(150, 80);
    this.option1.html("1: chocolates " );
    this.option1.position(150, 100);
    this.option2.html("2: cooked meat and fish " );
    this.option2.position(150, 120);
    this.option3.html("3: Citrus fruits " );
    this.option3.position(150, 140);
    this.option4.html("4: Dairy products " );
    this.option4.position(150, 160);
}
}