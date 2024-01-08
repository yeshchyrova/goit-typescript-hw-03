class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature(): number {
    return this.signature;
  }
}

// qwqweqwe

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, public key: Key) {}

  comeIn() {
    if (this.door) {
      const tenant = new Person(this.key);
      this.tenants.push(tenant);
    }
  }

  abstract openDoor(key: Key);
}

class MyHouse extends House {
  // openDoor() {}
}

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
