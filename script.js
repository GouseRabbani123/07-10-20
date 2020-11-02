var available_pets = {
    Dog: [{ name: 'chandha', color: 'white' }, { name: 'chandini', color: 'pink' }, { name: 'heraa', color: 'black' }],
    Cat: [{ name: 'roshan', color: 'white' }, { name: 'sonu', color: 'blue' }, { name: 'monu', color: 'green' }],
    Bird: [{ name: 'mittu', color: 'green' }, { name: 'kittu', color: 'orange' }, { name: 'king', color: 'white'}]
};
var petShop = /** @class */ (function () {
    function petShop(pets) {
        this.available_pets = pets;
        this.printAvailability();
    }
    petShop.prototype.printAvailability = function () {
        var tab = document.getElementById('available');
        tab.innerHTML = '';
        var a = Object.keys(this.available_pets);
        for (var i = 0; i < a.length; i++) {
            var b = this.available_pets[a[i]];
            console.log(b);
            for (var j = 0; j < b.length; j++) {
                var tr = document.createElement('tr');
                var th = document.createElement('td');
                th.innerHTML = a[i];
                var th2 = document.createElement('td');
                th2.innerHTML = b[j].name;
                var th3 = document.createElement('td');
                th3.innerHTML = b[j].color;
                tr.appendChild(th);
                tr.appendChild(th2);
                tr.appendChild(th3);
                var t = document.getElementById('available');
                t.appendChild(tr);
            }
        }
    };
    petShop.prototype.checkAvailability = function () {
        var _this = this;
        return function () {
            var blah = document.getElementById('animal').value;
            if (blah in _this.available_pets && _this.available_pets[blah].length > 0) {
                var k = document.getElementById('is_it_there');
                k.innerHTML = 'yes, available';
                _this.available_pets[blah].shift();
                _this.printAvailability();
            }
            else {
                var k = document.getElementById('is_it_there');
                k.innerHTML = 'Not available';
            }
        };
    };
    return petShop;
}());
var news = new petShop(available_pets);
var but = document.getElementById('button');
but.onclick = news.checkAvailability();