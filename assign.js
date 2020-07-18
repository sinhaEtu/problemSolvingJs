//feet to mile solve

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
    }
    
    var result = feetToMile(12456);
    console.log(result);
    
    var result = feetToMile(3440);
    console.log(result);
    
    
    //wood Calculator Solve
    
    function woodCalculator(chair,table,cot){
        var furniture = (1*chair)+(3*table)+(5+cot);
        return furniture;
    }
    
    var price = woodCalculator(3,4,5);
    console.log(price);
    
    //Bric calculator solve
    
    function brickCalculator(brick){
        
    }
    
    
    
      //tiny friend solve
    
        function tinyFriend(names){
    
        var tinyNam = names[0];
        for (var i=0;i<names.length;i++){
            var newNam= names[i];
            if(newNam.length<tinyNam.length){
                tinyNam = newNam;
            }
        }
        return tinyNam;
    }
    
    var larje = tinyFriend["Sinha", "Akib", "Al Amin","Shaila","Eva"];
    console.log(larje);
    
    