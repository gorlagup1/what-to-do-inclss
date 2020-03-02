export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];
export const MyCards = [];

export const PictureDeck = [
   ' Did I make your heart skip a bit?
May your day be as good as taking a selfie in the first try.
I know that looks aren’t everything, but I have them just in case.
Wanna know what else is bigger than my smile? My heart.
Going to bed early. Not going to a party. Not leaving my house. My childhood punishments have become my adult goals.

This is called a ‘selfie’ because ‘narcissistic’ is too hard to spell.'',
];
export const CaptionDeck = [

];

export let CurrentPicture = "";

export let CardsInPlay = [];

export function Init(){
    MyCards.push(CaptionDeck[0])
    MyCards.push(CaptionDeck[1]);

    CurrentPicture = PictureDeck[0];
}


