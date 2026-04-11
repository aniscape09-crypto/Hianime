async function doSearch() {
    const input = document.getElementById('anime-search').value.toLowerCase();
    const resultBox = document.getElementById('predict-results');
    
    if (input.length < 2) {
        resultBox.style.display = 'none';
        return;
    }

    const response = await fetch('/search-data.json');
    const data = await response.json();

    const filtered = data.filter(item => 
        item.title.toLowerCase().includes(input)
    ).slice(0, 6); // Limits to 6 suggestions

    if (filtered.length > 0) {
        resultBox.innerHTML = filtered.map(item => 
            `<a href="${item.url}">${item.title}</a>`
        ).join('');
        resultBox.style.display = 'block';
    } else {
        resultBox.style.display = 'none';
    }
}
