import {CurrentUser} from"./Users";


export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];
export const MyCards=[]; 
 export const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];


let CurrentPicture = "";
 const CardsInPlay = [];

 function submitcaption(caption,playerId){
     const player=Players[playerId];
     if(player.isDealer)throw Error('Dealer is not allowed to submit a caption')
     CardsInPlay.push({
         Text:caption,
         PlayerId:playerId,
         Ischosen:false})
     })
    }
    function Join(userId){
        const user=user.Get(userId);
    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: false })
const mycards=captionsDeck.list.slice(iCurrentCaption, iCurrentCaption +=DEaAL_AMOUNT;
return {playerId:Players.length -1, mycards}
    }
    module.exports={
        Players,PictureDeck,CurrentPicture,
        CardInPlay:CardsInPlay,
        submitCaption, Join
    }
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}
