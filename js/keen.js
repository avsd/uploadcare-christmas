(function() {
    var QueryStringToJSON = function(pth) {
      var pairs = pth.split('&');
      var result = {};
      pairs.forEach(function(pair) {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      return JSON.parse(JSON.stringify(result));
    }

    window.post_keen = function(url, query) {
      var json = QueryStringToJSON(query);

      json.analytics_url = url;
      json.ip_address = '${keen.ip}';
      json.user_agent = '${keen.user_agent}';
      json.keen = {
         "addons" : [
            {
                "name" : "keen:ip_to_geo",
                "input" : {
                    "ip" : "ip_address"
                },
                "output" : "ip_geo_info"
            },
            {
                "name" : "keen:ua_parser",
                "input" : {
                    "ua_string" : "user_agent"
                },
                "output" : "parsed_user_agent"
            },
            {
                "name" : "keen:url_parser",
                "input" : {
                    "url" : "dl"
                },
                "output" : "parsed_dl"
            }
        ] 
      };

      keen_client.addEvent('google_analytics', json);
    }
})();
