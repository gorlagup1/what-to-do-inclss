/* B"H
*///no export becouse to hidden to access for login or registeing it
const Users = [
    { Name: 'Moshe', Password: '2020', Email: 'plotkinm@newpaltz.edu' },
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu' },

];
module.exports={
//make one object and put into json
 currentUser = null,


 Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return this.currentUser = user;
} 
}