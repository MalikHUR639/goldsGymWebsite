export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'Exercise_DB_Key',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'youtube_key',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options)=>{
    const response= await fetch(url, options); 
    const data=await response.json();
     
    return data;
}
