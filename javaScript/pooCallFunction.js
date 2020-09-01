var User = (function () {
  var _id, _name
  function User(id, name) {
    _id = id
    _name = name
    //os atributos id e nome fazem parte apenas do Objeto criado
    //mas não fazem parte do protótipo 
  }
  //as funções atribuídas desta forma passam a integra o prototipo User
  User.prototype.getId = function () {
    return _id
  }

  User.prototype.getName = function () {
    return _name
  }
  return User
}())

var user1 = new User('1', "Junior")
var AccountUser = (function () {
  var _login, _password
  function AccountUser(id, name, login, password) {
    //chama o construtor de User pelo método Call que faz um cópia do objeto
    //utilizando Herança entre os 2 prototipos
    User.call(this, id, name)
    //desta forma o objeto gerado a partir de AccountUser tera acesso às 
    //funções e atributos de User como getId() e getName()
    _login = login;
    _password = password;
  }

  AccountUser.prototype = new User()

  //adiona a classe getLogin no prototype de AccountUser
  AccountUser.prototype.getLogin = function () {
    return _login
  }

  //adiona a classe getPassword no prototype de AccountUser
  AccountUser.prototype.getPassword = function () {
    return _password
  }
  //Sobrecarrega o método herdado (User.getId())
  AccountUser.prototype.getId = function () {
    return User.prototype.getId.call(this) + this.getName()
  }
  return AccountUser
}())
var accountUser = new AccountUser(2, 'Alex', 'aruiz', 'abcd1234')
console.log(accountUser)
console.log(accountUser.getId())


