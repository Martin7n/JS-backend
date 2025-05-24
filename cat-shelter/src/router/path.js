




const urls = {
        '/content/styles/site.css': cssContent,
        '/cats/add-cat': addcat(breeds),
        '/cats/add-breed': addBreed(breeds),
        "/":  indexContent(cats),
    }


const idExtractor = (urlRq) => {
    
    if (urlRq.includes("delete") || urlRq.includes("edit")) {
        const catId =  urlRq.split("/").pop()
        return catId
    }
    return ("/")

}



function catFinder(urlRq){

    const catId = idExtractor(urlRq)
    console.log(`aaaaaaaaaaa ${catId}`)
    
    console.log(`ID => ${catId}`)
    let ctt = {}

    const ct = cats.map( (cat) => {
    if (Number(cat.id) === Number(catId))
    {
        return ctt = {"name":cat.name,
            "id": cat.id,
            "description": cat.description,
            "imageUrl": cat.imageUrl,
            "breed": cat.breed}
     } 
        });

    if (!ctt.id){
        ctt = {"name":"no cat detected",
            "id": "no cat detected",
            "description": "no cat detected",
            "imageUrl": "no cat detected",
            "breed": "no cat detected"}
    }

    console.log(ctt)
    return(ctt)

}
  