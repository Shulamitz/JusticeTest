export default class FetchHandler {


    request(endpoint, options) {

        var url = `https://localhost:44301/${endpoint}`;
        const _options = Object.assign({}, {
            method: 'GET',
            headers: {}
        }, options);

        const successStatus = 200;

        var xhttp = new XMLHttpRequest();
        xhttp.responseType = 'json';
        xhttp.open(_options.method, url, true);
        Object.entries(_options.headers).forEach(([header, value]) => {
            xhttp.setRequestHeader(header, value);
        });
        xhttp.send(_options.body);

        return new Promise(function (resolve, reject) {
            xhttp.onload = function () {
                if (this.status === successStatus) {
                    resolve(this.response);
                }
                else {
                    reject(this.response);
                }
            };
        });
 
    }

}