export const exerciseoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",

    "X-RapidAPI-Key": "35a2cd5336msh23982ed88e80ac3p1e183ajsnab555c30d999",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
