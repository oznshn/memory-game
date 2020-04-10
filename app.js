document.addEventListener('DOMContentLoaded', ()=>
{
    const cardArray = [
        {
            name:'chase',
            img:'images/chase.png'
        },
        {
            name:'blank',
            img:'images/blank.png'
        },
        {
            name:'Ladybug',
            img:'images/Ladybug.png'
        },
        {
            name:'marshall',
            img:'images/marshall.png'
        },
        {
            name:'mickey',
            img:'images/mickey.png'
        },
        {
            name:'minnie',
            img:'images/minnie.png'
        },
        {
            name:'Daisy',
            img:'images/Daisy.png'
        },
        {
            name:'rocky',
            img:'images/rocky.png'
        },
        {
            name:'chase',
            img:'images/chase.png'
        },
        {
            name:'blank',
            img:'images/blank.png'
        },
        {
            name:'Ladybug',
            img:'images/Ladybug.png'
        },
        {
            name:'marshall',
            img:'images/marshall.png'
        },
        {
            name:'mickey',
            img:'images/mickey.png'
        },
        {
            name:'minnie',
            img:'images/minnie.png'
        },
        {
            name:'Daisy',
            img:'images/Daisy.png'
        },
        {
            name:'rocky',
            img:'images/rocky.png'
        }
         
    ]

cardArray.sort(()=>0.5-Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId= []
var cardsWon =[]
function createBoard(){
    for(let i = 0;i<cardArray.length;i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
        }
    }


//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1])
    {
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png') 
        cards[optionTwoId].setAttribute('src','images/blank.png') 
        alert('Sorry,try again')

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent =cardsWon.length
    if(cardsWon.length === cardArray.length/2)
    {
        resultDisplay.textContent = 'Congratulations! You found them all!'

    }

}



//flip your card
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChosen.length ===2)
    {
        setTimeout(checkForMatch,500)
    }
}



createBoard()


})