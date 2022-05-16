import {extendObservable} from 'mobx'

class UserState{
    constructor(){
        extendObservable(this,{
            name: '',
            secondName: '',
            email: 'asdaswe2qe@gmail.com',
            setName: (name) => {
                this.name = name;
            },
            setSecondName: (secondName) => {
                this.secondName = secondName;
            },
            setEmail: (email) => {
                this.email = email;
            }
        });
    }
}

export default new UserState;