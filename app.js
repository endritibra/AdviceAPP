const card=document.querySelector(".card");
const quote=document.querySelector(".quote");

//advice obj
const adv = {

id:'https://api.adviceslip.com/advice',
callAdv:async function(){
    const response= await fetch(this.id);
    const  data= await response.json();
    console.log(data)
    const {id}=data.slip
    const {advice}=data.slip
    
    this.showAdv(advice,id)
},
showAdv:function(advice,id){
    //kto dyja krijon plot objekte paragrafa 1 mas 1 per tjeter arste perdoren
    //let para=document.createElement("p");
    
    document.querySelector('.here').innerHTML=`"  ${advice} "`;
    document.querySelector('.idi').innerHTML=`Quote #${id}`;
    //console.log(para)
   //quote.appendChild(para);
    
}

}

const butoni=document.querySelector('#buti');
butoni.addEventListener('click',function(){

    adv.callAdv()

})

//Other test without Obj.....
/*
async function QuoteGen(){
    const response= await fetch(this.id);
    const  data= await response.json();
    const {advice}=data.slip


}*/