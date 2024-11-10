class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const veh = new Vehicle('orange');
console.log(veh.color);


class MyCar extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const mycar = new MyCar(4, 'red');
mycar.startDrivingProcess();
