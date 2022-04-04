export const gitGifs = async(category)=>{

    const apiKey = "kZLBXBH7LNkPJ1h5uea2BY8pGI7TlUpN";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();


    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });

    return gifs;
}