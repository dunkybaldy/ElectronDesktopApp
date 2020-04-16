import RGHelper from '../../src/Shared/RiotGamesApi/RGHelper'
import { Region } from '../../src/Shared/RiotGamesApi/RGRegion';

it('Calls an api method from Riot Games', async () => {
    console.log(process.env.REACT_APP_RIOT_GAMES_APIKEY);
    let h = new RGHelper(Region.euw1, process.env.REACT_APP_RIOT_GAMES_APIKEY);
    var result = await h.FreeChampRotation();

    if (result === null) {
        fail("result is null");
    }
});