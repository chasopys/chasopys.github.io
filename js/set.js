function Set(start) {
    this.values = start||[];
    this.add= function(value) {
            var index = this.values.indexOf(value);
            if (!~index) {
                this.values.push(value);
            }
        };
        this.has= function(value) {
            var index = this.values.indexOf(value);
            return !!~index;
        }
}
var set = new Set(['tomato','burger']);

set.add('pizza');
//console.log(set.has('pizza'));
set.add('pepper');

console.dir(set);