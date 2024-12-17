function User(email, password){
    this._email = email;
    this._passwrod = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function(){
            return this._passwrod.toUpperCase()
        },

        set: function(value){
            this._passwrod = value
        }
    })
}

const chai = new User("chai@xchai.com", "chai")
console.log(chai.email);
