const cars = [
  {
    id: 'car1',
    fuel: 3
  },
  {
    id: 'car2',
    fuel: 3.5
  },
  {
    id: 'car3',
    fuel: 4
  }
] 

const getAll = () => {
  return cars
}

const carsService = { getAll }

export default carsService