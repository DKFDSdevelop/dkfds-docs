const limit = 10;

document.addEventListener("DOMContentLoaded", function() {
    let url_queries = window.location.search.substr(1).split('&');
    if(url_queries.length !== 0) {
        let start = 0;
        let query = null;
        for(let q in url_queries){
            let loop_query = url_queries[q].split('=');

            if(loop_query[0] === "start"){
                start = parseInt(loop_query[1]);
            }
            if (loop_query[0] === "q") {
                query = loop_query[1];
            }
        }
        if(query !== null) {
            let results = search(query);
            console.log('results', results);
            populateSearch(results, query, start);
        }
    }

});

function populateSearch (results, query, start){
    document.getElementById('search-input').value = query;
    document.getElementById('results-count').innerText = results.length;
    if(start !== 0){
        let nextStart = start - limit;
        document.getElementById('previous-page').href = "?q="+query+"&start="+nextStart;
        document.getElementById('previous-page').classList.remove('d-none');
    }
    if(results.length > limit){
        let nextStart = start + limit;
        document.getElementById('next-page').href = "?q="+query+"&start="+nextStart;
        document.getElementById('next-page').classList.remove('d-none');
    }
    let html = "";
    for (let r = start; r < start+limit; r++) {
        if(results[r] == undefined) {
            break;
        }
        html += '<div class="page-result">';
        html += '<h3 class="h4"><a href="' + results[r].url + '">' + results[r].title + '</a></h3>';
        html += '</div>';
    }
    document.getElementById('results').innerHTML = html;
    document.getElementById('results-container').classList.remove('d-none');
}

function search(query){
    let result = [];
    // search phrase
    searchIndex.forEach(function(page){
        let phrases = query.split(" ");
        let matched = false;
        if(page.title.indexOf(query) >= 0 || page.lead.indexOf(query) >= 0 || page.tags.indexOf(query) >= 0 || page.content.indexOf(query) >= 0){
            matched = true;
        } else{
            let phrasesMatched = [];
            for (let phrase in phrases){
                let currentPhrase = phrases[phrase];
                if(currentPhrase.length > 2) {
                    if (!matched && (page.title.indexOf(currentPhrase) >= 0 || page.lead.indexOf(currentPhrase) >= 0 || page.tags.indexOf(currentPhrase) >= 0 || page.content.indexOf(currentPhrase) >= 0)) {
                        matched = true;
                        phrasesMatched.push(currentPhrase);
                    }
                }
            }
            if(matched){
                page.phrasesMatched = phrasesMatched;
            }
        }

        if(matched) {
            result.push(page);
        }
    });
    return sort(result, query);
}

function sort(result, query){
    result.forEach(function (page) {
        let score = 0;
        // priority title
        if (page.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            score = score+25;
        }
        // priority lead
        if (page.lead.toLowerCase().indexOf(query.toLowerCase()) === -1 ) {
            score = score+15;
        }
        // priority lead
        if (page.tags.toLowerCase().indexOf(query.toLowerCase()) === -1 ) {
            score = score+15;
        }
        // priority subnav
        for(let subnav in page.subnav){
            if(page.subnav[subnav].toLowerCase().indexOf(query.toLowerCase()) >= 0){
                score = score+1;
            }
        }

        // priority category
        switch (page.category) {
            case "Komponenter_category":
                score = score+10;
                break;
            case "Design_category":
                score = score+9;
                break;
            case "Kom_i_gang_category":
                score = score+7;
                break;
            case "Om_designsystemet_category":
                score = score+6;
                break;
        }

        if(page.layout === "demo"){
            score = score+7;
        }
        if(page.phrasesMatched){
            let addedScore = page.phrasesMatched.length * 2;
            score = score+addedScore;
        } else{
            score = score+20;
        }

        // priority matching instances in content
        var regex = new RegExp(query,"g");
        let instances = page.content.match(regex);
        if(instances !== null){
            let countOfInstances = (instances).length;
            let scoreOfInstances = countOfInstances / 10;
            score = score+scoreOfInstances;
        }
        page.score = score;
    });

    return result.sort( function(a, b) {
        if(a.score > b.score){
            return -1;
        } else if(a.score < b.score){
            return 1;
        }
        return 0;
    });
}
