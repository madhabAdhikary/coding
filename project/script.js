// make random value 
// give rock paper scissor to that random value
// compare our value to that random value 


    function playgame(params){
        let randomValue = Math.floor(Math.random()*90+1);
        let botPlay = '' ;
        let yourMove = '';
        
            if(randomValue <= 30){
                botPlay= 'rock';
            }
            else if(randomValue > 30 && randomValue <= 60){
                botPlay = 'paper';
            }
            else if(randomValue > 60 && randomValue <= 90){
                botPlay = 'scissor';
            }
            let  wins =0;
               let  lose = 0;
               let draw  = 0;
            let main;


            if( botPlay === params){
                yourMove ='its draw';
        
            }
            else if(botPlay === 'scissor' && params === 'rock' || botPlay === 'paper' && params === 'scissor' || botPlay === 'rock' && params=== 'paper'   ){
                yourMove ='you won';       
                 }
            else if(botPlay === 'scissor' && params ==='paper' || params === 'scissor' && botPlay ==='rock' || params === 'rock' && botPlay ==='paper' ){
                yourMove ='you lost';
            } 
            let result = `youMove ${params} and opositionMOve = ${botPlay} result = ${yourMove}`;

            console.log(result)

            function rrr(){
                console.log(score)
                if(yourMove === 'win'){
                    main = wins++;
                    
                }
                else if(yourMove === 'lose'){
                    main = lose++
                }
                else{
                    main = draw++
                }
                console.log(main)
                console.log(wins)
                

            }

            
           
   }




