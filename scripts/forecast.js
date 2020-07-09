const key = 'O7cEctBeU8ZMfd33x3qDOBqj4e6xqU4O';

const getWeather = async(id) =>{
    const link = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const addIn = `${id}?apikey=${key}`;

    const response = await fetch(link + addIn);
    const data = await response.json();

    return data[0];
};

const getCity = async(city) => {
    const link = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const addIn = `?apikey=${key}&q=${city}` ;

    const response = await fetch(link + addIn);
    const data = await response.json();

    return data[0];
};
