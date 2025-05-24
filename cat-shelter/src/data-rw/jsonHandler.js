


export default {


    async  writeJsonBase(fields, data, sep) {
        const currentData =  (fields==="cats") ? cats  : breeds;

        console.log(currentData)
        if (fields==="cats") 
        {
        data.id = currentData.length +1;
        };
        currentData.push(data)
        // // console.log(currentData)
        const dataToWrite = JSON.stringify(currentData, null, sep);
        // console.log(dataToWrite)
        const writingToJson = await fspromise.writeFile(pathnames[fields], dataToWrite, { encoding: 'utf-8' });

        },

    async  readJsonBase(field) {
        console.log(pathnames[field])
        const path = pathnames[field];
        const readresult = await fspromise.readFile(`${path}`, { encoding: 'utf-8' });
        const objectList = JSON.parse(readresult);

        return objectList
    }
}
