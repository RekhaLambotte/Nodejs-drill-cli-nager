#!/usr/bin/env node


console.log("Hello, Node.JS!");

const axios = require ('axios');

// country-list va changer le nom du pays en code (ex: iso 3166-1:2013 )
// getCode est une fonction qui existe déjà dans country-list https://www.npmjs.com/package/country-list
const { getCode } = require('country-list'); 

// process.argv permet de dire de prendre le pays noté dans le perminal comme argument. node . France -> France devient l'argument.
// slice() permet de supprimer des éléments . Le 2 dit qu'on supprime les 2 premiers élément 
let country = process.argv.slice(2);

// getCode est la fonction déjà existante de country-list et il a pour argument 
let code = getCode(country[0]);

console.log(country)

axios.get('https://date.nager.at/api/v2/publicholidays/2021/'+code)
    .then((response)=>{  //success
        console.log(response.data); 
        //console.log(` \nDuring the year ${year} there are holidays in ${country}.`)
        
    })
    .catch((error)=>{ //error
        console.log(error);
    })
    
// "sudo npm link" permet de fixer les packages pour faire fonctionner le package
// npm version patch + npm publish permet de faire un update du readme sur npm
