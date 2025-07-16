export const fetchCars = async () => {
  const headers = {
    'x-rapidapi-key': 'd8c4f15f8amshbc53e5806d7c232p172dc8jsn5e9b993aabe5',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  })

  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number): number => {
  const basePricePerDay = 50 // base price in $
  const mileageFactor = 0.1 // additional $ per MPG
  const ageFactor = 0.05 // $ discount per year of age

  const currentYear = new Date().getFullYear()
  const carAge = currentYear - year

  const mileageRate = city_mpg * mileageFactor
  const ageRate = carAge * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate - ageRate

  return Math.round(rentalRatePerDay)
}

// const getEstimatedMPG = (carClass: string): number => {
//   switch (carClass.toLowerCase()) {
//     case 'compact car':
//       return 25
//     case 'midsize car':
//       return 22
//     case 'suv':
//       return 18
//     case 'electric':
//       return 100
//     default:
//       return 20 // base fallback
//   }
// }

// const calculateCarRent = (carClass: string, year: number): number => {
//   const basePricePerDay = 50
//   const mileageFactor = 0.1
//   const ageFactor = 0.05

//   const mpg = getEstimatedMPG(carClass)
//   const currentYear = new Date().getFullYear()
//   const carAge = currentYear - year

//   const mileageRate = mpg * mileageFactor
//   const ageRate = carAge * ageFactor

//   const rentalRatePerDay = basePricePerDay + mileageRate - ageRate

//   return Math.round(rentalRatePerDay)
// }
