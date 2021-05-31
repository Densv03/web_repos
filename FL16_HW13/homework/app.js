const appRoot = document.getElementById('app-root');

/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/

// Creating inputs to choose
const app_root = document.querySelector('#app-root');
let head_text = document.createElement('h1'),
    paragraph = document.createElement('p'),
    form = document.createElement('form');
head_text.textContent = 'Countries Search';
paragraph.textContent = 'Please choose type of search'
form.className = 'regionOrLanguageChoose';
app_root.append(head_text);
app_root.append(paragraph);
app_root.append(form);
let input_radio_region = document.createElement('input'),
    input_radio_language = document.createElement('input'),
    label_region = document.createElement('label'),
    label_language = document.createElement('label');
input_radio_region.type = 'radio';
input_radio_region.name = 'regionOrLanguage';
input_radio_region.value = 'region';
label_region.textContent = 'By region';
form.appendChild(input_radio_region);
form.appendChild(label_region);
input_radio_language.type = 'radio';
input_radio_language.name = 'regionOrLanguage';
input_radio_language.value = 'language';
label_language.textContent = 'By language';
form.appendChild(input_radio_language);
form.appendChild(label_language);
let list_div = document.createElement('div');
list_div.className = 'list';
app_root.appendChild(list_div);

function table_print(arr) {
    let table = document.createElement('table');
    table.className = 'tab';
    app_root.append(table);

    let headers_arr = ['Country name', 'Capital', 'World Region', 'Languages', 'Area', 'Flag'];
    for (let i in headers_arr) {
        let temp = document.createElement('th');
        temp.textContent = headers_arr[i];
        temp.className = headers_arr[i];
        table.appendChild(temp);
    }
    for (let i in arr) {
        let temp_tr = document.createElement('tr'),
            temp_td = document.createElement('td');
        table.appendChild(temp_tr);

        temp_td.textContent = arr[i]['name'];
        temp_tr.appendChild(temp_td);

        temp_td = document.createElement('td');
        temp_td.textContent = arr[i]['capital'];
        temp_tr.appendChild(temp_td);

        temp_td = document.createElement('td');
        temp_td.textContent = arr[i]['region'];
        temp_tr.appendChild(temp_td);

        let languages = arr[i]['languages'],
            temp_str_arr = [];
        for (keys in languages) {
            temp_str_arr.push(languages[keys]);
        }
        temp_str_arr = temp_str_arr.join(', ');
        temp_td = document.createElement('td');
        temp_td.textContent = temp_str_arr;
        temp_tr.appendChild(temp_td);

        temp_td = document.createElement('td');
        temp_td.textContent = arr[i]['area'];
        temp_tr.appendChild(temp_td);

        let temp_img = document.createElement('img');
        temp_img.src = arr[i]['flagURL'];
        temp_tr.appendChild(temp_img);
    }
}

// Creating changes for list regions or languages
// depending on user choose

document.querySelector('.regionOrLanguageChoose').addEventListener('change', (event) => {
    const list = document.querySelector('.list');
    list.textContent = '';
    let select = document.createElement('select');
    list.appendChild(select);
    let none_el = document.createElement('option');
    none_el.textContent = 'Select value';
    select.appendChild(none_el);
    if (event.target.value === 'region') {
        select.name = 'regions';
        select.id = 'region-select';
        countriesList = externalService.getRegionsList();
        for (let i in countriesList) {
            let temp = countriesList[i];
            temp = document.createElement('option');
            temp.value = countriesList[i];
            temp.textContent = countriesList[i];
            select.appendChild(temp);
        }
        try {
            const table = document.querySelector('.tab');
            app_root.removeChild(table);
        } catch {
            console.log('Success');
        }
    } else if (event.target.value === 'language') {
        select.name = 'languages';
        select.id = 'language-select';
        let languagesList = externalService.getLanguagesList();
        for (let i in languagesList) {
            let temp = languagesList[i];
            temp = document.createElement('option');
            temp.value = languagesList[i];
            temp.textContent = languagesList[i];
            select.appendChild(temp);
        }
        try {
            const table = document.querySelector('.tab');
            app_root.removeChild(table);
        } catch {}
    }
    let used = false;
    try {
        document.querySelector('#region-select').addEventListener('change', (event) => {
            console.log('region selected');
            if (used) {
                let tt = document.querySelector('.tab');
                app_root.removeChild(tt);
            }
            used = true;
            let countryByRegion = externalService.getCountryListByRegion(event.target.value);
            table_print(countryByRegion);
            let country_counter = 0;
            document.querySelector('.Country').addEventListener('click', e => {
                console.log('country clicked');

                function sortByCountry(arr) {
                    arr.sort((a, b) => a.name > b.name ? 1 : -1);
                }

                function sortByCountry_reversed(arr) {
                    arr.sort((a, b) => a.name < b.name ? 1 : -1);
                }
                // try {
                //     const table = document.querySelector('.tab');
                //     app_root.removeChild(table);
                // } catch {}
                let countryByRegion_sorted = countryByRegion,
                    // countryByRegion_default = countryByRegion,
                    countryByRegion_reversed = countryByRegion;
                sortByCountry(countryByRegion_sorted);
                sortByCountry_reversed(countryByRegion_reversed);
                console.log(countryByRegion_sorted);
                console.log(countryByRegion_reversed);
                // table_print(countryByRegion_sorted);
                // if (country_counter % 3 === 0) {
                //     table_print(countryByRegion_sorted);
                // } else if (country_counter % 3 === 1) {
                //     table_print(countryByRegion_reversed);
                // }
                // else if(country_counter % 3 === 2){
                //     table_print(countryByRegion_default);
                // }
                country_counter++;
                // table_print(countryByRegion);
                console.log(countryByRegion);
            });
        });
    } catch {
        document.querySelector('#language-select').addEventListener('change', (event) => {
            console.log('language selected');
            if (used) {
                let tt = document.querySelector('.tab');
                app_root.removeChild(tt);
            }
            used = true;

            let countryByLanguage = externalService.getCountryListByLanguage(event.target.value);
            table_print(countryByLanguage);
        });
    }
});