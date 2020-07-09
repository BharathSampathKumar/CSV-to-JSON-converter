/*
 * Input CSV string to be converted into JSON
 */
const inputCsv = ``;

/*
 * Map of the Column names (on the first row of the CSV input)
 * to the pseudonames used in the outputFormat object
 */
const outputReplaceNamesMap = {};

/*
 * The output JSON format
 */
const outputFormat = {};

// DONOT alter anything below this line!!

const allRows = input.split(/\r?\n/);
, columnNamesRow = allRows[0];
, columnDataRows = [].slice.call(allRows, 1);

let outputJson = [];

function extractRowInfoIntoJsonFormat(inp_dataRow){
    let csvMap = this
    , op_dataRow = JSON.stringify(outputFormat)
    , data = inp_dataRow.split(',');
    Object.keys(outputReplaceNamesMap).forEach(
        function(colname){
            let regex = new RegExp('{'+outputReplaceNamesMap[colname]+'}', 'g');
            op_dataRow = op_dataRow.replace(regex, data[csvMap[colname]].replace(new RegExp('"', 'g'), '\\"'));
        }
    );
    outputJson.push(JSON.parse(op_dataRow));
}

function createCsvRowMap(namesRow){
    let csvIndexMap = {};
    namesRow.split(',').forEach(
        function(colname, index){
            csvIndexMap[colname] = index;
        }
    );
    return csvIndexMap;
}

const rowMap = createCsvRowMap(columnNamesRow);
columnDataRows.forEach(extractRowInfoIntoJsonFormat, rowMap);
console.log(outputJson);

// END of code logic

/* 
    Example:
    
    To convert the following CSV string:
    
    Property,Show Name,ShowId,ShowId (GUID),Video Path
    Bellagio Hotel & Casino,"O" by Cirque du Soleil®,o-by-cirque-du-soliel,a23a0234-319b-4f5a-989d-5502e142753c,MGM/bellagio-entertainment-o-overflow-your-senses
    Bellagio Hotel & Casino,Bellagio Gallery of Fine Art,bellagio-gallery-of-fine-art,90e92076-6240-4e1a-b049-0f3e715d38ea,No Video
    Excalibur Hotel & Casino,Fuerza Bruta,fuerza-bruta,36f61707-b4c0-43e1-b48a-9ab8ee08a3d6,MGM/excalibur-entertainment-fuerza-bruta-15-second
    Excalibur Hotel & Casino,The Australian Bee Gees Show,the-australian-bee-gees,73aa548d-2753-43f0-8e4c-862dd2d1026c,MGM/excalibur-entertainment-bee-gees-video-2016
    Excalibur Hotel & Casino,Thunder from Down Under,thunder-from-down-under,1b51fd7a-670a-4961-b4b3-2973149884f4,MGM/excalibur-entertainment-thunder-video-2016
    Excalibur Hotel & Casino,Tournament of Kings,tournament-of-kings,5485931a-205f-4058-a97d-c84e9e07c01e,No Video
    Excalibur Hotel & Casino,Ultimate 4-D Experience,ultimate-4d-experience,51261cd9-9a94-4403-8f83-be9e8d648191,No Video
    Luxor Hotel & Casino,Blue Man Group,blue-man-group,951ac4c4-13af-4bf0-8405-5e5ac17c7482,MGM/luxor-entertainment-shows-blue-man-group-1min-sizzle-reel
    Luxor Hotel & Casino,Bodies... The Exhibition,bodies-the-exhibition,c40eda13-8461-45ca-98a0-221d44d033b7,No Video
    Luxor Hotel & Casino,Carrot Top,carrot-top,975b82f2-ec41-400b-ab93-2640eb2f8a89,No Video
    Luxor Hotel & Casino,Fantasy,fantasy,8e325559-74d1-4043-870a-b6ea714e40d0,MGM/luxor-entertainment-fantasy-teaser-promo
    Luxor Hotel & Casino,HyperX Esports Arena Las Vegas,esports-arena-las-vegas-at-luxor,f5730710-27d9-45fa-87f4-567eecf45e9f,MGM/luxor-esports-arena-30-second-spot
    Luxor Hotel & Casino,Titanic: The Artifact Exhibition,titanic-the-artifact-exhibition,c06a70c6-edce-41d2-8195-382bbcf1e300,No Video
    Mandalay Bay,Michael Jackson ONE by Cirque du Soleil,michael-jackson-one,5188ef05-149b-4e00-a983-a780387f4874,MGM/mandalay-bay-entertainment-cirque-du-soleil-michael-jackson-one
    Mandalay Bay,Shark Reef Aquarium,shark-reef-aquarium,6a22a407-b0b7-4ec8-8499-fba38762375c,No Video
    Mandalay Bay,Shark Reef Sea Turtle Feed,shark-reef-sea-turtle-feed,5b15bb43-ec0e-44c9-81b1-b0449d87d9a0,No Video
    Mandalay Bay,Shark Reef Shark Feed,shark-reef-shark-feed,59657416-5a11-4ee8-80a2-53d0136504da,No Video
    Mandalay Bay,Shark Reef Stingray Feed,shark-reef-stingray-feed,d9ef33c4-312b-478c-a6fe-15f20949d347,No Video
    MGM Grand Las Vegas,Brad Garrett's Comedy Club,brad-garretts-comedy-club,2e1256fe-5e6c-4349-a9c5-e93683ec74bd,MGM/mgm-grand-entertainment-brad-garrett-comedy-club-promo-video
    MGM Grand Las Vegas,CSI: The Experience,csi-the-experience,ca47024d-4752-4153-96f4-eb07194f16f4,No Video
    MGM Grand Las Vegas,David Copperfield,david-copperfield,0c3bf6b8-48c1-408c-8c59-d71adcd34bd5,No Video
    MGM Grand Las Vegas,Jabbawockeez,jabbawockeez,17bfd236-cb21-4905-a6f0-2a21273cc965,MGM/mgm-grand-entertainment-show-jabbawockeez-coming-soon-30-sec-video
    MGM Grand Las Vegas,KÀ by Cirque du Soleil,ka-by-cirque-du-soleil,14aec24e-4276-40b1-839f-7b95616dabb5,MGM/mgm-grand-entertainment-ka-in-market-video-720-30-sec
    New York-New York Hotel & Casino,Bar Experience,bar-crawl,550855ad-3a43-4086-bd17-e12ce7758026,No Video
    New York-New York Hotel & Casino,Concerts at The Park: Conkarah and Rosie VIP Package,conkarah-and-rosie,7fb6f5ac-78e7-459d-8e2e-cfff31bf4b33,No Video
    New York-New York Hotel & Casino,Zumanity by Cirque du Soleil,zumanity,f5aa0b64-d238-4ee2-9647-c17ff2133031,MGM/new-york-new-york-entertainment-zumanity-video-720p
    Park MGM,Cher,pat-cher-at-park-theater,2c56b338-39e2-4715-801b-d2b6eb509e77,MGM/park-mgm-park-theater-entertainment-classic-cher-15sec
    The Mirage,Bert Kreischer,bert-kreischer,773dcaed-3593-4da1-9624-5d0a96101f39,No Video
    The Mirage,Bill Maher,bill-maher,1be1f737-02bd-42a1-ba14-91be9546f257,No Video
    The Mirage,Boyz II Men,boyz-ii-men,879e095b-3a06-4569-98e5-7963604f658d,No Video
    The Mirage,Chris D’Elia,chris-delia,0ef8f10c-0465-41a3-94e9-5a8a6c9e4306,No Video
    The Mirage,Countess Luann,countess-luann,e57d9912-0481-4d84-a2ba-fdcce005cb08,No Video
    The Mirage,Daniel Tosh,daniel-tosh,5092ea68-d601-443d-a826-2e8a6b2dc075,No Video
    The Mirage,David Spade & Ray Romano,ray-romano-david-spade,6539d380-6060-4716-b2d8-30cb9dacdf7b,No Video
    The Mirage,Gabriel Iglesias,gabriel-iglesias,44fd97a6-03da-43af-92ad-2fba9d0c7a7e,No Video
    The Mirage,George Lopez,george-lopez,33cdbf99-ba1d-4c4b-ae5a-90a4706fca7f,No Video
    The Mirage,Iliza Shlesinger,iliza,8d92feb8-a8bc-4afb-a0f1-c82ab7099c0d,No Video
    The Mirage,Jay Leno,jay-leno,4298f840-4ce5-471a-8352-cfc52edfe515,No Video
    The Mirage,Jeff Ross and Dave Attell: Bumping Mics,jeff-ross-dave-attell,d7f0b5fa-dc47-4acc-8cfa-083acf909b26,No Video
    The Mirage,Jim Jefferies,jim-jefferies,f76e2381-dfa9-4702-a3b2-2822c4903ade,No Video
    The Mirage,Joe Rogan,joe-rogan,2f0ed908-19da-46b3-aa0c-7aec887dd5b5,No Video
    The Mirage,Kathleen Madigan,kathleen-madigan,9f838e76-b443-47cc-9a77-2f42a415c7ce,No Video
    The Mirage,Kevin James,kevin-james,4b088f70-6113-4528-95a2-3b3ed4d5dc2d,No Video
    The Mirage,Matt Goss,matt-goss,52788c40-7e22-4f9f-ae60-602d0123a81c,MGM/mirage-entertainment-matt-goss-video
    The Mirage,Michael Carbonaro,michael-carbonaro,60485186-3211-4a25-bd5b-021e94ce611d,No Video
    The Mirage,Mirage Sports Book VIP Seats,mirage-sports-book-vip-seats,d7dbd4b6-e6a1-4e27-aff5-80af9f34dba1,No Video
    The Mirage,Ron White,ron-white,356ae8e6-f497-478a-89dd-18a7ccabf7c6,No Video
    The Mirage,Scott Bradlee's Postmodern Jukebox,postmodern-jukebox-1oak,98847846-e211-4bd6-a7a5-dd386eceed2b,No Video
    The Mirage,Secret Garden & Dolphin Habitat,siegfried-roys-secret-garden-and-dolphin-habitat,1959fc44-e5c5-4c1d-b96d-955f33aaf5f3,MGM/Secret-Garden-Overall-30s
    The Mirage,Secret Garden & Dolphin Habitat Annual Pass,sgdh-annual-pass,613ecbbc-86eb-4133-84ed-da56f4081544,No Video
    The Mirage,Secret Garden Dolphin Trainer for a Day,sgdh-trainer-for-a-day,5618151b-a569-447d-88ec-d296d18a3915,MGM/Secret-Garden-Trainer-30s
    The Mirage,Secret Garden Paint with Dolphins,sgdh-paint-with-dolphins,15a3a29c-5c26-40e8-90f7-772eb12a5fbb,MGM/Secret-Garden-Painting-30s
    The Mirage,Secret Garden VIP Tours,sgdh-vip-tours,d34459f0-0f67-4ad6-832b-c1aeffd7f45c,No Video
    The Mirage,Shin Lim,shin-lim,06d8200a-37bb-48b9-a436-e72d4ef289fa,No Video
    The Mirage,Terry Fator,terry-fator,83915f2d-edcd-4c06-bc3d-cdaaddf69e4b,No Video
    The Mirage,The Beatles LOVE,the-beatles-love,7f8437d1-7384-4413-8a87-7c10e555bcda,MGM/mirage-entertainment-the-beatles-love-promo-video-30sec-with-ticket-price
    The Mirage,Tim Allen,tim-allen,d2d3258f-f862-469b-aa29-d41b6935dff7,No Video

    into this JSON format
    {
        showIds: ["o-by-cirque-du-soliel", "a23a0234-319b-4f5a-989d-5502e142753c"]
        , showTitle: ""O" by Cirque du Soleil®"
        , videoInfo: {posterUrl: "MGM/bellagio-entertainment-o-overflow-your-senses", videoUrl: "MGM/bellagio-entertainment-o-overflow-your-senses"}
    }
    
    The output names map is:

    const outputReplaceNamesMap = {
        "ShowId" : "showId1"
        , "ShowId (GUID)" : "showId2"
        , "Show Name" : "showTitle"
        , "Video Path" : "videoUrl"
    };

    And the output format is:

    const outputFormat = {
        "showIds" : ["{showId1}", "{showId2}"]
        , "showTitle" : "{showTitle}"
        , "videoInfo" : {
            "posterUrl" : "{videoUrl}"
            , "videoUrl" : "{videoUrl}"
        }
    };

*/