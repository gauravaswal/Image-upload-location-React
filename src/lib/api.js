class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    static fileHeadertpions = {
        'Authorization': localStorage.userJWT
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        let host = process.env.REACT_APP_API_URL
        const url = `${host}${route}`;
        let formData;
        let options = Object.assign({ method: verb });
        // if (params && (params.file || params.logo)) {
        if (params && (params.image)) {
            options.headers = Api.fileHeadertpions;
            formData = new FormData();
            // for(let name in params) {
            //     formData.append(name, params[name]);
            // }
            for (let name in params) {
                if (name === 'specificArea' || name === 'commonArea') {
                    for (let values of params[name]) {
                        formData.append(name, values);
                    }
                } else {
                    formData.append(name, params[name]);
                }
            }
        } else {
            options.headers = Api.headers();
            params && delete params.file
            formData = JSON.stringify(params)
        }
        options = Object.assign(options, params ? { body: formData } : null);
        if (localStorage.userJWT) {
            options.headers = {
                ...options.headers,
                'Authorization': localStorage.userJWT
            }
        }
        return fetch(url, options).then(resp => {
            let json
            if (resp.status === 401) {
                localStorage.clear()
                // window.location.assign('/')
                json = resp
                return json
            } else {
                json = resp.json();
                if (resp.ok) {
                    return json
                }
            }
            return json.then(err => { throw err });
        }).then(json => json);
    }
}

export default Api;
