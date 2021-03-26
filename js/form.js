class Form{
    Constructor(){

    }
    display(){
        var title= createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("");
        input.position(130,150);

        var button = createButton("Play");
        button.position(160,200);

        var greeting=createElement("h3");

       button.mousePressed(function(){
           input.hide();
           button.hide();
           var name = input.value();
           playerCount = playerCount+1;
           player.update(name);
           player.updateCount(playerCount);

           greeting.html(" HELLO "+name);
           greeting.position(130,160);

       })
    }
}