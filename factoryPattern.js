// The Factory Design Pattern allows you to create objects dynamically during runtime based on specific criteria. It encourages loose coupling between objects, which grants your code more flexibility and maintainability.

// Factory function:
function CarFactory(model, year) {
  return {
    model: model,
    year: year,
    displayInfo: function () {
      console.log(`Model: ${this.model}, Year: ${this.year}`);
    },
  };
}

// Create objects: Car objects can be created without explicit class instantiation with the CarFactory function.

const car1 = CarFactory('Suzuki Swift', 2020);
const car2 = CarFactory('Toyota Corolla', 2022);

car1.displayInfo(); // Output: Model:  Suzuki Swift, Year: 2020
car2.displayInfo(); // Output: Model: Toyota Corolla, Year: 2022
