
const getGifs = async(category) => {
    //uso de category en la url encodeURI()
    //const url = 'http://localhost:55735/GifExpert';
    const url = 'http://samirpazo-001-site1.dtempurl.com/GifExpert';
    const resp = await fetch( url );
    const data = await resp.json();

    return data;
}
 
export default getGifs