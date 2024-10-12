/*
October 4, 2024

Extract The Domain Name From A URL

https://www.codewars.com/kata/514a024011ea4fb54200004b

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"

function -> URL as a str -> domain name as a string

standard url --> no empty str
Return the domain name of the website as a string w/o https:// or .com
An example would be: url = "http://www.zombie-bites.com"-> domain name = "zombie-bites"

*/

function domainName(url) {
  //replace things we don't know with an empty str
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0]; //split and grab domain from rest of str
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
