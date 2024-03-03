export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.React_App_Rapid_Api_Key,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async(url, option)=>{
    const res = await fetch(url, option);
    const data = await res.json();

    return data;
}