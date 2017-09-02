'use strict';

const NASA_GEN_URL="https://eonet.sci.gsfc.nasa.gov/api/v2.1/"

// ***** STORE *****

const STORE = {
  results: []
};

// ^^^^^ STORE ^^^^^

function getApiData(){
  let apiUrl = NASA_GEN_URL+'events';
  const query = {
    limit: 5,
    days:7
  }
  
  $.getJSON(apiUrl,query,render);
}

function main(){
  getApiData();
}


$(main);