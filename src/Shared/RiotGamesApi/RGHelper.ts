import { Region } from "./RGRegion";
import { FreeChampRotation } from "./Models/FreeChampRotation";
import { HttpClient } from "../HttpClient";
import RGApi from "./RGApi";

export default class RiotGamesHelper {
    region: Region;
    apiKey: string;
    rgHttpClient: HttpClient;

    constructor(_region: Region, _apikey: string) {
        this.region = _region;
        this.apiKey = _apikey;

        let headers = {
            'X-Riot-Token': this.apiKey
        };
        this.rgHttpClient = new HttpClient(`https://${this.region}.api.riotgames.com`, headers);
    }

    public async FreeChampRotation(): Promise<FreeChampRotation> {

        const result = await this.rgHttpClient.GetRequestAsync(RGApi.freeChampRotation);
        var obj = this.Map<FreeChampRotation>(result);

        return new Promise<FreeChampRotation>((resolve, reject) => {
            setTimeout(() => {
                console.log("FreeChampRotation HttpRequest Complete");
                resolve();
            },
            1500)
        });
    }

    private Map<T>(result: string) {
        var a: T = JSON.parse(result);
        return a;
    }
}