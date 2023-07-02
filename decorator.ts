
function MenuItem(itemId: string)
{
    return (target: Function) => {
        target.prototype.id = itemId;
    }
}


@MenuItem("abc")
class Pizza{
    id: string;
}

@MenuItem("efg")
class Hamburger
{
    id: string;
}


console.log(new Pizza().id);

