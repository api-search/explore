    ///##############
    ///This is an intentionally crude search engine, exploring what is possible with a network of independent search nodes. 
    ///We are working on a cloud version, allowing users to switch between network or cloud search.
    ///The goal is to redefine API search with federated, cloud, localized, and any other type of search possible using APIs.json.
    ///If you have a better way to write a search -- let's see it!!    
    ///##############

    function slugify(str) {
        return String(str)
            .normalize('NFKD') // split accented characters into their base characters and diacritical marks
            .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
            .trim() // trim leading or trailing whitespace
            .toLowerCase() // convert to lowercase
            .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
            .replace(/\s+/g, '-') // replace spaces with hyphens
            .replace(/-+/g, '-'); // remove consecutive hyphens
        }   

    function displaySearchJSON(){
        var search_json = JSON.parse(document.getElementById("search_json").value);
        var rows = '';
        for (let j = 1; j < search_json.length; j++) {

            var nodeUrl = search_json[j].nodeUrl;
            if(search_json[j].aid){
                var aid = search_json[j].aid;
                var aid_array = aid.split(":");
                var index_slug = aid_array[0];
                var api_slug = aid_array[1];
                }
            else{
                var api_slug = slugify(search_json[j].name);
                }
            nodeUrl = nodeUrl.replace("apis.json","");
            rows += '<tr>';
            rows += '<th scope="row"></th>';
            rows += '<td style="text-align:left; vertical-align: middle;">' + search_json[j].name + '</td>';
            rows += '<td style="width: 50px;"><a href="' + search_json[j].humanURL + '" target="_blank"><button type="button" class="btn btn-outline-primary">API</button></a></td>';
            rows += '<td style="width: 50px;"><a href="' + nodeUrl + 'apis/' + index_slug + '/apis/#' + search_json[j].name + '" target="_blank"><button type="button" class="btn btn-outline-success">INFO</button></a></td>';
            rows += '</tr>';
        }
        document.getElementById('search-results').innerHTML = rows;
    }

    function pullNode(node_url,query,network_url){

        const options = {
                method: 'get'
            };	

        fetch(node_url,options)
            .then(function(response) {
                if (!response.ok) {
                    console.log('Error with Status Code: ' + response.status);
                    return;
                }
                response.text().then(function(yaml) {	

                    yaml = yaml.replace("---","");
                    yaml = yaml.replace("---","");

                    try {

                        const doc = jsyaml.load(yaml);
                        node_url = node_url.replace("apis.md","overlays/apis-io-search.yml");

                        fetch(node_url,options)
                            .then(function(response) {
                                if (!response.ok) {
                                    //console.log('Error with Status Code: ' + response.status);
                                    return;
                                }
                                response.text().then(function(overlay_yaml) {	

                                    overlay_yaml = overlay_yaml.replace("---","");
                                    overlay_yaml = overlay_yaml.replace("---","");

                                    try {

                                        const overlay_doc = jsyaml.load(overlay_yaml);
                                        
                                        var query_search = query.toLowerCase(); 

                                        // BEGIN API INDEX
                                        if(doc.apis){
                                            for (let i = 0; i < doc.apis.length; i++) {

                                                var api = overlay_doc.apis[i];

                                                var api_name_match = false;
                                                var api_description_match = false;
                                                var api_tag_match = false;                                            
                                                                        
                                                var api_name = overlay_doc.apis[i].name;
                                                var api_description = overlay_doc.apis[i].description;
                                                var api_tags = overlay_doc.apis[i].tags;
                    
                                                if(api_name){                                   
                                                    var api_name_search = api_name.toLowerCase();
                                                    if(api_name_search.includes(query_search)){
                                                        api_name_match = true;
                                                    }
                                                }
                                                if(api_description){ 
                                                    var api_description_search = api_description.toLowerCase();
                                                    if(api_description_search.includes(query_search)){
                                                        api_description_match = true;
                                                    }  
                                                }
                                                if(api_tags){                  
                                                    for (let j = 1; j < api_tags.length; j++) {
                                                        if(api_tags[j].name){
                                                            var tag_search = api_tags[j].name.toLowerCase();    
                                                            if(tag_search == query_search){                                                
                                                                api_tag_match = true;                       
                                                            }
                                                        }
                                                    } 
                                                } 
                        
                                                if(api_name_match == true || api_description_match == true || api_tag_match == true){

                                                    api.nodeUrl = network_url;
                                                    var search_json = JSON.parse(document.getElementById("search_json").value);
                                                    search_json.push(api);
                                                    document.getElementById("search_json").value = JSON.stringify(search_json);

                                                    displaySearchJSON();

                                                    }                                            


                                            }
                                        }

                                        // END API INDEX

                                    } catch (e) {
                                        console.log(e);
                                    }                    
                                        
                                });
                            })
                            .catch(function(err) {
                                console.log('Error: ' + err);
                        });                                         

                    } catch (e) {
                        console.log(e);
                    }                    
                        
                });
            })
            .catch(function(err) {
                console.log('Error: ' + err);
        }); 

    }

    function searchNode(network_url,query){

        const options = {
                method: 'get'
            };	

        fetch(network_url,options)
            .then(function(response) {
                if (!response.ok) {
                    //console.log('Error with Status Code: ' + response.status);
                    return;
                }
                response.json().then(function(search) {	

                    ////console.log(search.name); 

                    for (let i = 0; i < search.includes.length; i++) {
                        ////console.log(search.includes[i].name + ' - ' + search.includes[i].url);
                        pullNode(search.includes[i].url,query,network_url);
                        }                    
                        
                });
            })
            .catch(function(err) {
                //console.log('Error: ' + err);
        }); 

    }

    function search(){

        document.getElementById('search-results').innerHTML = '';
        document.getElementById("search_json").value = '[]';

        let query = 'api';

        if(document.getElementById('api-search').value != ''){                        
            query = document.getElementById('api-search').value;
        }
        
        {% assign apis = site.data.apis %}
        {% for node in apis.network %}      
            // Search Network
            searchNode('{{ node.url }}',query);
        {% endfor %}         
              
    }