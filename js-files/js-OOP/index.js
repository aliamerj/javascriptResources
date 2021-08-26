console.log("my name is OOP basic");
// make private properties : replace this with let
function User(name , password){
    this.name = name;
    this.password = password;
    
    // this private method
    let makePass = function(){
      return `password is : ${password}`
    }
    this.password = function (){
        console.log(makePass());
    }

}

const ali = new User("ali" , "123a" );
ali.password();