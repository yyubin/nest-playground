const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// const age = profile.age;
const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number }} = profile;
// const { age, name }: { age: number; name: string } = profile;

