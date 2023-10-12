import { Hero, CustomFilter, SearchBar, CarCard } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'


export default async function Home({ searchParams }: any) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;



  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* Car catalogue  */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore The Cars You Want</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => <CarCard car={car}  />)}
          </div>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>OOps no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
