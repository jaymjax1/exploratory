var _this = this;
var driver = function (name) {
    drive: (function () { console.log('vroom vroom' + name); });
};
var person = function (name) {
    _this.name = name;
    return Object.assign({}, driver(name));
};
var justin = person('justin');
console.log(justin);
