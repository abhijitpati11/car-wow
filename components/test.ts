// export const apiCall = async () => {
//  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
//  const options = {
//    method: "GET",
//    headers: {
//      "X-RapidAPI-Key": "31f30b790cmsh424b37afbf2912dp17155cjsne86c2c170b31",
//      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//    },
//  };

//  try {
//    const response = await fetch(url, options);
//    const result = await response.text();
//    console.log(result);
//  } catch (error) {
//    console.error(error);
//  }
// };


export async function fetchCars() {
 const headers = {
		'X-RapidAPI-Key': '31f30b790cmsh424b37afbf2912dp17155cjsne86c2c170b31',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

 const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  headers: headers
 });

 const result = await response.json();

 return result;

}