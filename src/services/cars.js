const cars = [
  {
    id: 1,
    fuel: 3
  },
  {
    id: 2,
    fuel: 3.5
  },
  {
    id: 3,
    fuel: 4
  }
] 

const getAll = () => {
  return cars
}

const carsService = { getAll }

export default carsService