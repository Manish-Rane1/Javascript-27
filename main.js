const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']

//Function #1:
function arraySlice(foods){
    modified=foods
    console.log(foods)
    console.log(modified.slice(1,4))
}

//Function #2:
function arraySplice(foods){
    modified=foods
    console.log(foods)
    modified.splice(2,0,'noodles','icecream')
    console.log(modified)
}

const numberArray = [12,324,213,4,2,3,45,4234];

//Function #3:
function filter(numberArray){
    console.log(numberArray)
    console.log(numberArray.filter((val)=>{
        return (val%2)==0
    }))
}

//Function #4:
function isPrime(numberArray){
    console.log(numberArray)
    console.log(numberArray.filter((val)=>{
        if (val>=2){
        let state=false
        for (var i=2;i<=Math.abs(Math.sqrt(val));i++){
            if (val%i==0){
                state=true
                break
            }
        } 
        if (state==false){
            return val
        }
    }
}))
}


const myArray = [11, 34, 20, 5, 53, 16]

//Function #5:
function map(Arr){
    console.log(myArray)
    console.log(Arr.map((val)=> val*val))
}

const Array=[2,3,5,10]

//Function #6:
function Reduce(Arr){
    console.log(Array)
    console.log(Arr.reduce((init,item)=> init*item))
}

function clean(){
    console.clear()
}
