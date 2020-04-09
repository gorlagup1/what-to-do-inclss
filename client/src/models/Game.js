import Users from "./Users";

export const Players = [
    {Name: 'Bernie', Score:0, isDealer:false}
];

export const MyCards = [];

export const PictureDeck = [
    'http://www.dunpaday.com/wp-content/uploads/2020/02/00-147-750x200.jpg',
    'http://www.dunpaday.com/wp-content/uploads/2020/02/00-146-750x200.jpg',
    'http://www.dunpaday.com/wp-content/uploads/2020/02/00-131-750x200.jpg',
];

export const CaptionsDeck=[
    'For me, math class is like watching a foreign movie without subtitles.',
    'Maybe if we tell people the brain is an app, they will start using it.',
    'When nothing goes right, go left.',
    'A cap pulled me over and told me "Papers", so I said :Scissors, I win!" and drove off.',
    'Mom: why is everything on the floor? Me:Gravity!',
    'sure, I do marathons. On Netflix.',
    'Did it for the memories - totally worth it!',
    ];

    export let CurrentPicture="";

    export const CardsInPlay=[];

    export function Init(){
        Players.push({Name:Users.CurrentUser.Name, Score:0, isDealer:true})

        MyCards.push(CaptionDeck[0])
        MyCards.push(CaptionDeck[1]);
        
        CurrentPicture=PictureDeck[0];
    }