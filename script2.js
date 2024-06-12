

let computer='';

function function1(){
    const randomNumber= Math.random();
   
    if(randomNumber>=0 && randomNumber<1/3){
        computer='Rock';
    }
    else if(randomNumber>1/3 && randomNumber<2/3){
        computer='Paper';
    }
    else if(randomNumber>2/3 && randomNumber<=1){
        computer='Scissor';
    }
    return computer;
}

function function2(playermove){
    const computer=function1();
    
    let results='';
    if(playermove==='Rock'){
        if(computer=== 'Rock'){
            results='Its a tie. Try Again.';
        }
        else if(computer=== 'Paper'){
            results='You loose. Try Again.';
        }
        else if(computer=== 'Scissor'){
            results='You win';
        }
    }
    else if(playermove==='Paper'){
        if(computer=== 'Rock'){
            results='You win';
        }
        else if(computer=== 'Paper'){
            results='Its a tie.Try Again.';
        }
        else if(computer=== 'Scissor'){
            results='You loose. Try Again.';
        }
    }
    else if(playermove==='Scissor'){
        if(computer=== 'Rock'){
            results='You loose. Try Again';
        }
        else if(computer=== 'Paper'){
            results='You win';
        }
        else if(computer=== 'Scissor'){
            results='Its a tie. Try Again';
        }  
    }

    
    document.querySelector('.results').innerHTML=results;
    alert(`You pickede ${playermove}. Computer picked ${computer} . ${results}`);

    if(results='You win'){
        document.querySelector(".box").style.backgroundColor= "green";
    }
}

function function3(){
    document.querySelector('.box').style.backgroundColor="rgb(132, 132, 237)";
}
