document.addEventListener("DOMContentLoaded", function() {
    const filterInput = document.getElementById("filterInput");
    const countryTableBody = document.getElementById("countryTableBody");

    // Fetch data from API and populate the table
    fetchCountryData();

    filterInput.addEventListener("input", filterCountries);

    async function fetchCountryData() {
        try {
            const response = await fetch("http://localhost:3000/countries");
            const data = await response.json();
            populateTable(data);
        } catch (error) {
            console.error("Error fetching country data:", error);
        }
    }

    function populateTable(countries) {
        countryTableBody.innerHTML = "";
        countries.forEach(country => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${country.name}</td>
                <td>${country.native}</td>
                <td>${country.capital}</td>
                <td>${country.emoji}</td>
                <td>${country.currency}</td>
                <td>${country.languages.map(lang => lang.name).join(", ")}</td>
            `;
            countryTableBody.appendChild(row);
        });
    }
});
