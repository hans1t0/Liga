const axios = require('axios');
const cheerio = require('cheerio');
const page_url = 'https://resultadosffcv.isquad.es/club_equipos.php?&id_temp=2122&id_club=206356';

async function main() {
    const { data } = await axios.get(page_url);
    const $ = cheerio.load(data);
    const equipos = [];

    $("body > div:nth-child(7) > div.col-xl-6.col-lg-8.col-md-12 > div > div:nth-child(2) > table > tbody > tr").each((i, element) => {
        const $element = $(element);
        const url = $($element).find('a').attr('href');
        console.log($element.text());
    });
}

main();