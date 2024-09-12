document.querySelector('button').addEventListener('click', getChar)

function getChar(){
  document.querySelector('.card').classList.remove('hidden')
  document.querySelector('.gifs').classList.remove('hidden')

  let hash = 'e8c0bb6cce55c2074b93975034738107'
  let ts = '1'
  let public = 'db14e5e924db9a5c7c31ebf3f8c444f5'
  let nameVal = document.querySelector('input').value
  let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&hash=${hash}&apikey=${public}&name=${nameVal}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data.data.results.length > 0){
      let marvel = 'marvel'
      let urlTwo = `https://g.tenor.com/v1/search?q=${marvel} ${data.data.results[0].name}&key=LIVDSRZULELA&limit=3`
        fetch(urlTwo)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            document.querySelector('.gifOne').src = data.results[0].media[0].gif.url
            document.querySelector('.gifTwo').src = data.results[1].media[0].gif.url
            document.querySelector('.gifThree').src = data.results[2].media[0].gif.url
          })
          .catch(err => {
            console.log(`err ${err}`)
          })
          let thumb = '/portrait_uncanny.jpg'
          document.querySelector('.thumbnail').src = `${data.data.results[0].thumbnail.path}${thumb}`
          document.querySelector('.name').innerText = data.data.results[0].name
          document.querySelector('.indentification').innerText = data.data.results[0].id
          document.querySelector('.description').innerText = data.data.results[0].description
          document.querySelector('.eventOne').innerText = data.data.results[0].stories.items[0].name
          document.querySelector('.eventTwo').innerText = data.data.results[0].stories.items[1].name
          document.querySelector('.eventThree').innerText = data.data.results[0].stories.items[2].name
    }
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}
