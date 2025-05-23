{
    //

function formatString(input:string,toUpper?:boolean):string{
    if(toUpper==false){
        return input.toLowerCase();
    }
    return input.toUpperCase();
}


    //
}





function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  const books = [
    { title: "Book A", rating: 4.5 },  
    { title: "Book B", rating: 3.2 },  
    { title: "Book C", rating: 5.0 }   
  ];
  const highRatedBooks = filterByRating(books);



{
    //
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.flat();
      }
      
      const result1 = concatenateArrays(["a", "b"], ["c"]);
      console.log(result1); 
      
      const result2 = concatenateArrays([1, 2], [3, 4], [5]);
      console.log(result2); 
      
    //
}




{
    //
    function processValue(value: string | number): number {
        if (typeof value === "string") {
          return value.length;
        } else {
          return value * 2;
        }
      }
      
      
        
      
    //
}


{//
    class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

}



{
    //
   
    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
          return null;
        }
      
        return products.reduce((max, current) => (current.price > max.price ? current : max));
      }
      
      
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      
      
    //
}
{
    //
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
      }
      
      

    //
}
{
    //
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          if (n < 0) {
            reject(new Error("Negative number not allowed"));
          } else {
            setTimeout(() => {
              resolve(n * n);
            }, 1000);
          }
        });
      }
      
     
//      
}