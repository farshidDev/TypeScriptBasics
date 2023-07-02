

let nameVal: string | null = null;

nameVal = 'test'


function addTax(price: number, tax: number): number | boolean{
    return price + tax;
}


console.log(addTax(50, 5));

