import { Hero } from '@/components'
import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars()
  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-y mx-auto max-w-[1440px] px-6 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map(car => (
                // <CarCard {...car} key={car.id} />
                // or 👇

                <CarCard
                  make={car.make}
                  model={car.model}
                  year={car.year}
                  city_mpg={car.city_mpg}
                  transmission={car.transmission}
                  drive={car.drive}
                  key={car.id}
                  class={car.class}
                  combination_mpg={car.combination_mpg}
                  cylinders={car.cylinders}
                  displacement={car.displacement}
                  fuel_type={car.fuel_type}
                  highway_mpg={car.highway_mpg}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Oops, no results</h2>
            <p className="text-gray-500 mt-2">No cars found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </main>
  )
}
