// your code here
const name=document.getElementById("name");
const year=document.getElementById("year");
const url=document.getElementById("url");

function handleSubmit() {
	let newUrl=`https://localhost:8080/`;
	if (name.value && year.value) {
		newUrl+=`?name=${name.value}&year=${year.value}`
	}else if (name.value) {
		newUrl+=`?name=${name.value}`
	}else if (year.value) {
		newUrl+=`?year=${year.value}`
	} 
	url.innerText=newUrl
}
