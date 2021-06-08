
async function getFromServer(){

fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
      .then(response => response.json())
      .then(quotes => {
          function createCard(anime, quote){
              let card = document.createElement('div')
              let title = document.createElement('h2')
              title.innerText = anime;
              let content = document.createElement('p')
              content.innerText = quote
              card.appendChild(title)
              card.appendChild(content)
              
            return card;
          }
          quotes.map(quote => {
              document.getElementById('main').appendChild(createCard(quote.anime, quote.quote))
          })
         
      })

}
getFromServer();
