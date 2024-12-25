// const getDB = require('../utils/db').getDB;
const { getDB } = require('../utils/db');

class Movie {
    constructor(name, link, rating, language) {
        this.name = name,
            this.link = link,
            this.rating = rating,
            this.language = language
    }

    movieSave() {
        let db = getDB()
        return db.collection('movies')
            .insertOne(this)
            .then((result) => {
                return result
            }).catch((err) => {
                console.log(err)
            })
    }
    static movieByName(name) {
        let db = getDB()
        return db.collection('movies')
            .findOne({ title: name })
            .then((result) => {
                return result
            }).catch((err) => {
                console.log(err)
            })
    }
    static allMovie(skip, limit) {
        let db = getDB()
        return db.collection('movies')
            .find({poster: { $exists : true }})
            .project({ title: 1,poster:1,"imdb.rating":1,cast:1,year:1,plot:1 })
            .skip(skip)
            .limit(limit)
            .toArray()
            .then((result) => {
                // console.log(result,"res")
                return result
            }).catch((err) => {
                console.log(err)
            })
    }

    static updateMovie(name, rating) {
        const db = getDB();
        return db
            .collection("movies")
            .updateOne(
                { name: name },
                { $set: { rating: rating } }
            )
            .then((result) => {
                return result
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static deleteOneMovie(name) {
        const db = getDB();
        return db
            .collection("movies")
            .deleteOne(
                { name: name }
            )
            .then((result) => {
                return result
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = Movie