/* 
////////No DRY////////

type Size = '' | 's' | 'm' | 'l' | 'xl';

class Product {
  constructor(
    public name: string,
    public price: number,
    public size: Size = '',

  ) {}

  toString() {
    //no dry
    if (this.name.length <= 0) throw new Error('Name is required');
    if (this.price <= 0) throw new Error('Price is required');
    if (this.size.length <= 0) throw new Error('Size is required');

    return `${this.name} - ${this.price} - ${this.size}`;
}
}

(()=>{
    const bluePants = new Product("blue pants", 20, 'm');
    console.log(bluePants);
})(); */

type Size = '' | 's' | 'm' | 'l' | 'xl';

class Product {
  constructor(
    public name: string,
    public price: number,
    public size: Size = '',
  ) {
    this.validate();
  }

  private validate() {
    if (this.name.length <= 0) throw new Error('Name is required');
    if (this.price <= 0) throw new Error('Price is required');
    if (this.size.length <= 0) throw new Error('Size is required');
  }

  toString() {
    return `${this.name} - ${this.price} - ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("blue pants", 20);
  console.log(bluePants.toString());
})();
