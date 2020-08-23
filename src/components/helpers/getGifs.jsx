
const getGifs = async(category) => {
    //uso de category en la url encodeURI()
    const url = 'http://localhost:55735/GifExpert';
    const resp = await fetch( url );
    const data = await resp.json();

    return data;
}
 
export default getGifs