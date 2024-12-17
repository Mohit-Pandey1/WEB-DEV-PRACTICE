class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}mohit`
    }

    set password(value){
        this._password = value
    }
}

const m = new User("m@gmail.ai", "abc")
console.log(m.password);
