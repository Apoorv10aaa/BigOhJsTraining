var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User_email;
var User = /** @class */ (function () {
    function User(name, email) {
        _User_email.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User_email, email, "f");
    }
    return User;
}());
_User_email = new WeakMap();
var u1 = new User("Apoorv", "hfhghg");
console.log(u1.email);
