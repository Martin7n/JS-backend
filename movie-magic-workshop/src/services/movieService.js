import Movie from "../models/Movies.js";

export default {

    getAll(filter = {}){

        let query = Movie.find({});
         // let movieList = await readWriteUtil.readJSON();
        // let matchedMovies = movieList.slice();   
        // // if (!filter) { return movies}

         //contains case insensitive
        if (filter.search) {
           query =  query.where({title: {$regex: `${filter.search}`, $options: 'i'}})
        };
        //exact match case insensitive
        
        if (filter.genre) {
            query =  query.where({genre: {$regex: `^${filter.genre}$`, $options: 'i'}})
        };  
        
        if (filter.year) {
            query = query.where({year: filter.year});
        }

        return query;

        // let movieList = await readWriteUtil.readJSON();

        // let matchedMovies = movieList.slice();   
        // // if (!filter) { return movies}
        // if (filter.search) {
        //    query =  query.where({title: {$regex: `${filter.search}`, $options: 'i'}})
        // };

    },


    getOne(movieId){

        let query = Movie.findById(movieId)
        // let movieList = await readWriteUtil.readJSON();
        // const movie = movieList.find(movie => movie.id === movieId)
        // console.log(movie)  
        return query
    },

    getMovieWithCast(movieId){
        return Movie.findById(movieId).populate("casts");
    },

    addCastToMovie(movieId, castId) {
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    },
    
}