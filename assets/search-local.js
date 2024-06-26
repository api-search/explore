
function search(){

    let query = 'api';
    if(document.getElementById('api-search').value != ''){                        
        query = document.getElementById('api-search').value;
    }

    let limit = document.getElementById('api-limit').value;
    if(limit == ''){ limit = 10; }

    const options = {
            method: 'get',
            headers: {
                "Accept": "application/json"
            }
        };	

    fetch('{{ site.search_url }}?search=' + query + '&limit=' + limit + '&page=0',options)
        .then(function(response) {
            if (!response.ok) {
                //console.log('Error with Status Code: ' + response.status);
                return;
            }
            response.json().then(function(search) {	
            
                if(prime == 0){
                    
                    let rows = '';
                    if(search.data.length > 0){
                        for (let i = 1; i < search.data.length; i++) {
                            rows += '<tr>';
                            rows += '<th scope="row"></th>';
                            rows += '<td style="text-align:left; vertical-align: middle;">' + search.data[i].name + '</td>';
                            rows += '<td style="width: 50px;"><a href="' + search.data[i].humanURL + '" target="_blank"><button type="button" class="btn btn-outline-primary">API</button></a></td>';
                            rows += '<td style="width: 50px;"><a href="https://apis.io/' + search.data[i].slug + '" target="_blank"><button type="button" class="btn btn-outline-success">INFO</button></a></td>';
                            rows += '</tr>';
                        }
                        document.getElementById('search-results').innerHTML = rows;
                    }
                    else{
                        document.getElementById('search-results').innerHTML = '<tr><th scope="row"></th><td style="padding: 25px;">No Results</td></tr>';
                    }
                    
                    
                }
            });
        })
        .catch(function(err) {
            //console.log('Error: ' + err);
    });               
}