import * as Request from "request-promise-native";

export class HttpClient {
    headers: any;
    baseUrl: string;

    constructor(pBaseUrl: string, pHeaders: any) {
        this.headers = pHeaders;
        this.baseUrl = pBaseUrl;
    }

    public async GetRequestAsync(apiMethod: string): Promise<string> {
        var options = {
            uri: this.baseUrl + apiMethod,
            headers: this.headers
        };
        
        const result = await Request.get(options);

        return new Promise<string>(result);
    }

    // public async PostRequestAsync(url: string, headers: any, object: any): Promise<string> {
    //     var options = {
    //         uri: url,
    //         headers
    //     };
      
    //     const result = await Request.post(options)

    //     return new Promise<string>(result);
    // }

    // private GetOptions() {
    //     var options: {
    //         this.baseUrl,
    //         headers
    //     };

    //     return options;
    // }
}