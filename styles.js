beers=[
    {
        "category": "STANDARD AMERICAN BEER",
        "subcategories": [
            "American Light Lager",
            "American Lager",
            "Cream Ale",
            "American Wheat Beer"
        ]
    },
    {
        "category": "INTERNATIONAL LAGER",
        "subcategories": [
            "International Pale Lager",
            "International Amber Lager",
            "International Dark Lager",
            
        ]
    },
    {
        "category": "CZECH LAGER",
        "subcategories": [
            "Czech Pale Lager",
            "Czech Premium Pale Lager",
            "Czech Amber Lager",
            "Czech Dark Lager",
            
        ]
    },
    {
        "category": "PALE MALTY EUROPEAN LAGER",
        "subcategories": [
            "Munich Helles",
            "Festbier",
            "Helles Bock",
            
        ]
    },
    {
        "category": "PALE BITTER EUROPEAN BEER",
        "subcategories": [
            "German Leichtbier",
            "Kölsch",
            "German Helles Exportbier",
            "German Pils",
            
        ]
    },
    {
        "category": "AMBER MALTY EUROPEAN LAGER",
        "subcategories": [
            "Märzen",
            "Rauchbier",
            "Dunkles Bock",
            
        ]
    },
    {
        "category": "AMBER BITTER EUROPEAN BEER",
        "subcategories": [
            "Vienna Lager",
            "Altbier",
            "Kellerbier",
            "Pale Kellerbier",
            "Amber Kellerbier"
        ]
    },
    {
        "category": "DARK EUROPEAN LAGER",
        "subcategories": [
            "Munich Dunkel",
            "Schwarzbier",
            
        ]
    },
    {
        "category": "STRONG EUROPEAN BEER",
        "subcategories": [
            "Doppelbock",
            "Eisbock",
            "Baltic Porter",
            
        ]
    },
    {
        "category": "GERMAN WHEAT BEER",
        "subcategories": [
            "Weissbier",
            "Dunkles Weissbier",
            "Weizenbock",
            
        ]
    },
    {
        "category": "BRITISH BITTER",
        "subcategories": [
            "Ordinary Bitter",
            "Best Bitter",
            "Strong Bitter",
            
        ]
    },
    {
        "category": "PALE COMMONWEALTH BEER",
        "subcategories": [
            "British Golden Ale",
            "Australian Sparkling Ale",
            "English IPA",
            
        ]
    },
    {
        "category": "BROWN BRITISH BEER",
        "subcategories": [
            "Dark Mild",
            "British Brown Ale",
            "English Porter",
            
        ]
    },
    {
        "category": "SCOTTISH ALE",
        "subcategories": [
            "Scottish Light",
            "Scottish Heavy",
            "Scottish Export",
            
        ]
    },
    {
        "category": "IRISH BEER",
        "subcategories": [
            "Irish Red Ale",
            "Irish Stout",
            "Irish Extra Stout",
            
        ]
    },
    {
        "category": "DARK BRITISH BEER",
        "subcategories": [
            "Sweet Stout",
            "Oatmeal Stout",
            "Tropical Stout",
            "Foreign Extra Stout",
            
        ]
    },
    {
        "category": "STRONG BRITISH ALE",
        "subcategories": [
            "British Strong Ale",
            "Old Ale",
            "Wee Heavy",
            "English Barleywine",
            
        ]
    },
    {
        "category": "PALE AMERICAN ALE",
        "subcategories": [
            "Blonde Ale",
            "American Pale Ale",
            
        ]
    },
    {
        "category": "AMBER AND BROWN AMERICAN BEER",
        "subcategories": [
            "American Amber Ale",
            "California Common",
            "American Brown Ale",
            
        ]
    },
    {
        "category": "AMERICAN PORTER AND STOUT",
        "subcategories": [
            "American Porter",
            "American Stout",
            "Imperial Stout",
            
        ]
    },
    {
        "category": "IPA",
        "subcategories": [
            "American IPA",
            "Specialty IPA",
            "Belgian IPA",
            "Black IPA",
            "Brown IPA",
            "Red IPA",
            "Rye IPA",
            "White IPA",
            
        ]
    },
    {
        "category": "STRONG AMERICAN ALE",
        "subcategories": [
            "Double IPA",
            "American Strong Ale",
            "American Barleywine",
            "Wheatwine",
            
        ]
    },
    {
        "category": "EUROPEAN SOUR ALE",
        "subcategories": [
            "Berliner Weisse",
            "Flanders Red Ale",
            "Oud Bruin",
            "Lambic",
            "Gueuze",
            "Fruit Lambic",
            
        ]
    },
    {
        "category": "BELGIAN ALE",
        "subcategories": [
            "Witbier",
            "Belgian Pale Ale",
            "Bière de Garde",
            
        ]
    },
    {
        "category": "STRONG BELGIAN ALE",
        "subcategories": [
            "Belgian Blond Ale",
            "Saison",
            "Belgian Golden Strong Ale",
            
        ]
    },
    {
        "category": "TRAPPIST ALE",
        "subcategories": [
            "Trappist Single",
            "Belgian Dubbel",
            "Belgian Tripel",
            "Belgian Dark Strong Ale",
            
        ]
    },
    {
        "category": "HISTORICAL BEER",
        "subcategories": [
            "Gose",
            "Kentucky Common",
            "Lichtenhainer",
            "London Brown Ale",
            "Piwo Grodziskie",
            "Pre-Prohibition Lager",
            "Pre-Prohibition Porter",
            "Roggenbier",
            "Sahti"
        ]
    }
];
beerStyles = [];
for( var i = 0, beer_len = beers.length; i < beer_len; i++){
  category = beers[i].subcategories;
  if(typeof(category) !== 'undefined'){
    for( var j = 0, cat_len = category.length; j < cat_len; j++){
      beerStyles.push(category[j]);
    }
  }
}
function randomStyle(){
  return beerStyles[Math.floor(Math.random()*beerStyles.length)];
}

function styleCount(){
  return beerStyles.length;
}
