const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://fvbcv.com/competiciones/rendimiento-infantil-femenino-preferente-2021-2022";

fetchData(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const statsTable = $('table > tbody > tr');
    statsTable.each(function (i, element) {
        let title = $(this).find('td').text().trim();
        console.log(title);
    });
})
async function fetchData(url) {
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));

    if (response.status !== 200) {
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}