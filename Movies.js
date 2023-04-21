var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected - movies"));
}catch (error) {
    console.log("could not connect - movies");
}
mongoose.set('useCreateIndex', true);

var movieSchema  = new Schema({
    Title: {type:String, required:true},
    Year: {type:Date, required:true},
    Genre: {type:String, required:true, enum:["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Thriller", "Western"]},
    Actors: {type:[{ActorName:String, CharacterName:String}], required:true},
    ImageURI: {type:String, required: false},
    averageRating: {type:Number, required: false}
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;