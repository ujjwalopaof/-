import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


        type TablistEntryData = {
            imageId: number;
            name: string;
            starColor?: string;
        };
    
// Component

        function TablistEntry({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                imageId,
                name,
                starColor
            }: TablistEntryData = getTablistEntryData(dataId);

            return (
                <div className={"tablist-entry"}>
                    <Img id={imageId} />
                    <span className={"tablist-name"}>
                        {starColor !== undefined && (
                            <span style={{color: starColor}}>
                                ★
                            </span>
                        )}
                        <span style={{color:"#ffffff"}}>
                            {name}
                        </span>
                    </span>
                    <span className={"tablist-ping"} style={{color:"rgb(85,85,85)"}}>
                        ?
                    </span>
                </div>
            );
        }
    

function getTablistEntryData(id): TablistEntryData  {
    switch (String(id)) {
    case "0":
        return ({
                    "imageId": 26,
                    "name": "Xyrk_",
                    "starColor": undefined
                });
    case "1":
        return ({
                    "imageId": 27,
                    "name": "archivePedro",
                    "starColor": "#A503FC"
                });
    case "2":
        return ({
                    "imageId": 28,
                    "name": "Munkerlich",
                    "starColor": "#00FC88"
                });
    case "3":
        return ({
                    "imageId": 29,
                    "name": "Auzzitech",
                    "starColor": "#00FC88"
                });
    case "4":
        return ({
                    "imageId": 30,
                    "name": "BobIsFound",
                    "starColor": "#00FC88"
                });
    case "5":
        return ({
                    "imageId": 31,
                    "name": "CryptoDaveYT",
                    "starColor": "#00FC88"
                });
    case "6":
        return ({
                  "imageId": 32,
                  "name": "Napooo_",
                  "starColor": "#00FC88"
                });
    case "7":
        return ({
                  "imageId": 33,
                  "name": "_Abolo",
                  "starColor": undefined
                });
    case "8":
        return ({
                  "imageId": 34,
                  "name": "_Gaara_",
                  "starColor": undefined
                });
    case "9":
        return ({
                  "imageId": 35,
                  "name": "06yyusuff",
                  "starColor": undefined
                });
    case "10":
        return ({
                  "imageId": 36,
                  "name": "0732k",
                  "starColor": undefined
                });
    case "11":
        return ({
                  "imageId": 37,
                  "name": "08zrixcyy",
                  "starColor": undefined
                });
    case "12":
        return ({
                    "imageId": 38,
                    "name": "0CLZ",
                    "starColor": undefined
                });
    case "13":
        return ({
                    "imageId": 39,
                    "name": "67aud",
                    "starColor": undefined
                });
    case "14":
        return ({
                    "imageId": 40,
                    "name": "6coins",
                    "starColor": undefined
                });
    case "15":
        return ({
                    "imageId": 41,
                    "name": "6D3_",
                    "starColor": undefined
                });
    case "16":
        return ({
                    "imageId": 42,
                    "name": "AbhayjotYT",
                    "starColor": undefined
                });
    case "17":
        return ({
                    "imageId": 43,
                    "name": "AdinMC15",
                    "starColor": undefined
                });
    case "18":
        return ({
                    "imageId": 44,
                    "name": "AmethystCPVP",
                    "starColor": undefined
                });
    case "19":
        return ({
                    "imageId": 45,
                    "name": "AmIFocused",
                    "starColor": undefined
                });
    case "20":
        return ({
                    "imageId": 46,
                    "name": "Arthurrrico",
                    "starColor": undefined
                });
    case "21":
        return ({
                  "imageId": 47,
                  "name": "AsianGPT",
                  "starColor": undefined
                });
    case "22":
        return ({
                  "imageId": 48,
                  "name": "ASPECT_TTV2",
                  "starColor": undefined
                });
    case "23":
        return ({
                  "imageId": 49,
                  "name": "Ayazkral31",
                  "starColor": undefined
                });
    case "24":
        return ({
                    "imageId": 50,
                    "name": "badhairnerd",
                    "starColor": undefined
                });
    case "25":
        return ({
                    "imageId": 51,
                    "name": "Baldrex",
                    "starColor": undefined
                });
    case "26":
        return ({
                    "imageId": 52,
                    "name": "BambyCZ",
                    "starColor": undefined
                });
    case "27":
        return ({
                  "imageId": 53,
                  "name": "barba354",
                  "starColor": undefined
                });
    case "28":
        return ({
                  "imageId": 54,
                  "name": "Bateater66",
                  "starColor": undefined
                });
    case "29":
        return ({
                  "imageId": 55,
                  "name": "bbluebox",
                  "starColor": undefined
                });
    case "30":
        return ({
                    "imageId": 56,
                    "name": "BENJIMOA",
                    "starColor": undefined
                });
    case "31":
        return ({
                    "imageId": 57,
                    "name": "BHC37",
                    "starColor": undefined
                });
    case "32":
        return ({
                    "imageId": 58,
                    "name": "Birdcpvp",
                    "starColor": undefined
                });
    case "33":
        return ({
                    "imageId": 59,
                    "name": "blazeTNT",
                    "starColor": undefined
                });
    case "34":
        return ({
                    "imageId": 60,
                    "name": "BlockForge_",
                    "starColor": undefined
                });
    case "35":
        return ({
                    "imageId": 61,
                    "name": "C0opZ",
                    "starColor": undefined
                });
    case "36":
        return ({
                    "imageId": 62,
                    "name": "C1nic",
                    "starColor": undefined
                });
    case "37":
        return ({
                    "imageId": 63,
                    "name": "Cartercombo",
                    "starColor": undefined
                });
    case "38":
        return ({
                    "imageId": 64,
                    "name": "cobhaa",
                    "starColor": undefined
                });
    case "39":
        return ({
                  "imageId": 65,
                  "name": "codysmile11",
                  "starColor": undefined
                });
    case "40":
        return ({
                  "imageId": 66,
                  "name": "CoffeRush",
                  "starColor": undefined
                });
    case "41":
        return ({
                  "imageId": 67,
                  "name": "coldjayz",
                  "starColor": undefined
                });
    case "42":
        return ({
                    "imageId": 68,
                    "name": "CycloneLwk",
                    "starColor": undefined
                });
    case "43":
        return ({
                    "imageId": 69,
                    "name": "Danger08",
                    "starColor": undefined
                });
    case "44":
        return ({
                    "imageId": 70,
                    "name": "DemonicAuras",
                    "starColor": undefined
                });
    case "45":
        return ({
                    "imageId": 71,
                    "name": "Doomed001",
                    "starColor": undefined
                });
    case "46":
        return ({
                    "imageId": 72,
                    "name": "Dream2ny",
                    "starColor": undefined
                });
    case "47":
        return ({
                    "imageId": 73,
                    "name": "DreamBoundd",
                    "starColor": undefined
                });
    case "48":
        return ({
              "imageId": 74,
              "name": "DrEHSAN_214",
              "starColor": undefined
            });
    case "49":
        return ({
              "imageId": 75,
              "name": "EitanFila",
              "starColor": undefined
            });
    case "50":
        return ({
              "imageId": 76,
              "name": "Eric23141",
              "starColor": undefined
            });
    case "51":
        return ({
                  "imageId": 77,
                  "name": "EtlotOff",
                  "starColor": undefined
                });
    case "52":
        return ({
                  "imageId": 78,
                  "name": "exocation",
                  "starColor": undefined
                });
    case "53":
        return ({
                  "imageId": 79,
                  "name": "Exterr_",
                  "starColor": undefined
                });
    case "54":
        return ({
                  "imageId": 80,
                  "name": "FauxSnow",
                  "starColor": undefined
                });
    case "55":
        return ({
                  "imageId": 81,
                  "name": "FelixHave",
                  "starColor": undefined
                });
    case "56":
        return ({
                  "imageId": 82,
                  "name": "Fire_Azure",
                  "starColor": undefined
                });
    case "57":
        return ({
                    "imageId": 83,
                    "name": "Freddyboi24",
                    "starColor": undefined
                });
    case "58":
        return ({
                    "imageId": 84,
                    "name": "gamerboi12",
                    "starColor": undefined
                });
    case "59":
        return ({
                    "imageId": 85,
                    "name": "gezxov",
                    "starColor": undefined
                });
    case "60":
        return ({
                  "imageId": 86,
                  "name": "GhostPulse_",
                  "starColor": undefined
                });
    case "61":
        return ({
                  "imageId": 87,
                  "name": "GodsSparkyX",
                  "starColor": undefined
                });
    case "62":
        return ({
                  "imageId": 88,
                  "name": "Golbary",
                  "starColor": undefined
                });
    case "63":
        return ({
                    "imageId": 89,
                    "name": "GoudKoorts",
                    "starColor": undefined
                });
    case "64":
        return ({
                    "imageId": 90,
                    "name": "Gra_",
                    "starColor": undefined
                });
    case "65":
        return ({
                    "imageId": 91,
                    "name": "Green_ash00",
                    "starColor": undefined
                });
    case "66":
        return ({
                  "imageId": 92,
                  "name": "gurkenaffr",
                  "starColor": undefined
                });
    case "67":
        return ({
                  "imageId": 93,
                  "name": "HAMSTERKING_gm",
                  "starColor": undefined
                });
    case "68":
        return ({
                  "imageId": 94,
                  "name": "Harrison_goat14",
                  "starColor": undefined
                });
    case "69":
        return ({
                    "imageId": 95,
                    "name": "Hatred101010",
                    "starColor": undefined
                });
    case "70":
        return ({
                    "imageId": 96,
                    "name": "ikck",
                    "starColor": undefined
                });
    case "71":
        return ({
                    "imageId": 97,
                    "name": "ilovecats453_mc",
                    "starColor": undefined
                });
    case "72":
        return ({
                  "imageId": 98,
                  "name": "imkokobaba",
                  "starColor": undefined
                });
    case "73":
        return ({
                  "imageId": 99,
                  "name": "imospher",
                  "starColor": undefined
                });
    case "74":
        return ({
                  "imageId": 100,
                  "name": "Imvven",
                  "starColor": undefined
                });
    case "75":
        return ({
                  "imageId": 101,
                  "name": "ironinvader2",
                  "starColor": undefined
                });
    case "76":
        return ({
                  "imageId": 102,
                  "name": "ItzGyros",
                  "starColor": undefined
                });
    case "77":
        return ({
                  "imageId": 103,
                  "name": "ItzIran",
                  "starColor": undefined
                });
    case "78":
        return ({
                    "imageId": 104,
                    "name": "ItzJad_",
                    "starColor": undefined
                });
    case "79":
        return ({
                    "imageId": 105,
                    "name": "ItzSarq",
                    "starColor": undefined
                });
    case "80":
        return ({
                    "imageId": 106,
                    "name": "jakeisabot",
                    "starColor": undefined
                });
    case "81":
        return ({
                  "imageId": 107,
                  "name": "jakubtheknight",
                  "starColor": undefined
                });
    case "82":
        return ({
                  "imageId": 108,
                  "name": "JDMC202",
                  "starColor": undefined
                });
    case "83":
        return ({
                  "imageId": 109,
                  "name": "Jinda_1818",
                  "starColor": undefined
                });
    case "84":
        return ({
                  "imageId": 110,
                  "name": "jsnapzZz",
                  "starColor": undefined
                });
    default:
        return ({
                    "imageId": 26,
                    "name": "Xyrk_",
                    "starColor": undefined
                });
    }
}


export default TablistEntry
