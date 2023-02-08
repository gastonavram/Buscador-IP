const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd589f5d56bmsh4d80a6352d05b6ap179ba0jsn252feb506162',
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const $ = selector => document.querySelector(selector);
const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');


$form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value } = $input;
    if (!value) return;

    $submit.setAttribute('disable', '');
    $submit.setAttribute('aria-busy', 'true');

    
    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    $submit.removeAttribute('disable', '');
    $submit.removeAttribute('aria-busy', 'true');

})