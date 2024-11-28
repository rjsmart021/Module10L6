const apiKey = '4d52fb3fa1ef52af3d6b38218aff5477';
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
const hash = 'a80ea7d0806646c1f3b6bf37422fc6fd';
const ts = '1'
let encoded = encodeURIComponent(baseUrl);
console.log(encoded);
async function fetchMarvelCharacters() {
    try {
        const characterNames = ['Spider-Man', 'Iron Man', 'Captain America'];
        const response =
        await    fetch(`${baseUrl}?apikey=${apiKey}&ts=${ts}&hash=${hash}`)
        
        const data = await response.json()
        
        
        const characters = data.data.results
        console.log(characters); // Log the characters to the console
        return characters;
    } catch (error) {
        console.error('Error fetching Marvel characters:', error);
    }
}

async function updateUIWithCharacters() {
    const characters = await fetchMarvelCharacters(); 
    const container = document.getElementById("container")
    if (characters && characters.length > 0) {
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character';

            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            characterDiv.appendChild(nameElement);

            const imgElement = document.createElement('img');
            imgElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            imgElement.alt = `${character.name}`;
            characterDiv.appendChild(imgElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = character.description || 'No description available.';
            characterDiv.appendChild(descriptionElement);
            container.appendChild(characterDiv)
    });

   
}}
document.addEventListener("DOMContentLoaded", updateUIWithCharacters)
    
