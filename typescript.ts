var available_pets = {
    Dog: [{name: 'Gimmy',color: 'white'},{name: 'Rock',color: 'black'},{name: 'Snoopy',color: 'dalmation'}],
    Cat: [{name: 'Oliver',color: 'white'},{name: 'Leo',color: 'black'},{name: 'kutty',color: 'brownish'}],
    Bird: [{name: 'ramu',color: 'green'},{name: 'seetha',color: 'black'},{name:'geetha',color:'yellow'}]
}
class petShop{
    available_pets;
    constructor(pets){
        this.available_pets = pets;
        this.printAvailability()
        
    }
    printAvailability(){
        let tab = document.getElementById('available');
        tab.innerHTML = '';
        let a = Object.keys(this.available_pets);
        for(let i=0;i<a.length;i++){
            let b = this.available_pets[a[i]]
            console.log(b);
            for(let j=0;j<b.length;j++){
                let tr = document.createElement('tr');
                let th = document.createElement('td');
                th.innerHTML = a[i];
                let th2 = document.createElement('td');
                th2.innerHTML = b[j].name;
                let th3 = document.createElement('td');
                th3.innerHTML = b[j].color;
                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                let t = document.getElementById('available');
                t.appendChild(tr);
            }
        }
    }
    checkAvailability(): ()=> void{
        return () =>{
            let blah = (<HTMLSelectElement>document.getElementById('animal')).value;
            if(blah in this.available_pets && this.available_pets[blah].length > 0){
                let k = document.getElementById('is_it_there');
                k.innerHTML = 'yes, available';
                this.available_pets[blah].shift();
                this.printAvailability();
            }else{
                let k = document.getElementById('is_it_there');
                k.innerHTML = 'Not available';
            }
        }
    } 
}
let news = new petShop(available_pets);
let but = document.getElementById('button');
but.onclick = news.checkAvailability();