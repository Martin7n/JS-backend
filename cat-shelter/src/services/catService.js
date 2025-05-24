import jsonHandler from "../data-rw/jsonHandler";


export default {

    async getAllCats(filter){

        const cats = await sonHandler.readJsonBase("cats")

        return cats

    },

    getOneCat(catId){
        const cats = jsonHandler.readJsonBase("cats")
        const idCat = cats.map( (cat) => {
        if (Number(cat.id) === Number(catId))
            {
                return ctt = {"name":cat.name,
                    "id": cat.id,
                    "description": cat.description,
                    "imageUrl": cat.imageUrl,
                    "breed": cat.breed}
            } 
                });

            return idCat

    },


    async  deleteCat(catId){
    try {
    const catList = await readJsonBase("cats");
    console.log(catList)
    // console.log(catList)
    const updatedCatList = catList.filter(
        cat => Number(cat.id) !== Number(catId));
    const json = JSON.stringify(updatedCatList, null, 4);    
    const writingToJson = await fspromise.writeFile('./resources/db/cats.json', json,  { encoding: 'utf-8' });
    // await writeJsonBase("cats", updatedCatList, 4);

    } catch (err) {console.log(err)};
    
}


};