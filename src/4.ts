class Key {
  constructor(private signature: number = Math.random()) { }
  
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  
  getKey():Key {
    return this.key;
  }
}

abstract class House {
  constructor(public door: boolean, public key: Key) { }
  
  comeIn() {
    if(this.door) {}
  }
}

class MyHouse extends House {
  openDoor() {};
}

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


export {};