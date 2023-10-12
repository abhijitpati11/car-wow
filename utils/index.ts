
import { CarProps, FilterProps } from "@/types";


// API for car details
export async function fetchCars(filters: FilterProps) {

	const { manufacturer, year, model, limit, fuel } = filters;

 const headers = {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

 const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
  headers: headers,
 });

 const result = await response.json();

 return result;

}



// algorithm for calculating car rent 
export const calculateCarRent = (city_mpg: number, year: number) => {

	// base rent per day
	const basePricePerDay = 50; 

	// additional rate per mile driven
	const mileageFactor = 0.1;
	
	// additional rate per year of vehicle age
	const ageFactor = 0.05;

	// final rate based on mileage and car age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// final rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
} 



// API for car images
export const generateCarImageUrl = (car: CarProps, angle?:string) => {
		const url = new URL('https://cdn.imagin.studio/getImage');

		const { make, year, model } = car;

		url.searchParams.append('customer', 'hrjavascript-mastery');
		url.searchParams.append('make', make);
		url.searchParams.append('modelFamily', model.split(' ')[0]);
		url.searchParams.append('zoomType', 'fullscreen');
		url.searchParams.append('modelYear', `${year}`);
		url.searchParams.append('angle', `${angle}`);

		return `${url}`;
}


// getting data to pass and fetch from the API
export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);
 searchParams.set(type, value);

 const newPathName = `${window.location.search}?${searchParams.toString()}`;

	return newPathName;
}