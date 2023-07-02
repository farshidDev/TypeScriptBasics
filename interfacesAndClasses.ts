
interface IUser{
    name: string,
    phoneNumber: string,
    isActive: boolean,
    activate?: () => void
}


const person : IUser = {
    name: 'Farshid',
    phoneNumber: '09111111111',
    isActive: false
}

let people: IUser[];


class Suppervisour implements IUser{

    constructor(public name, public phoneNumber, public isActive)
    {

    }

    private Deactivate()
    {
        
    }

}

