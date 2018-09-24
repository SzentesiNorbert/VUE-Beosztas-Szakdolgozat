const app = ( express =
                 require('express') )()
      app . use( require('body-parser').json() )

const mdb = ( mongo =
                 require('mongodb') )   .MongoClient
const ObjectId        =   mongo         .ObjectID
const database_name   =  'beosztas'
const collection_name =  'beosztas'
const static_folder   =  'root'
const vue_folder      =  'BeosztasVUE/src'
const logger          =   false

mdb   .connect( 'mongodb://localhost:27017',
                 { useNewUrlParser: true },
                 ( err, client ) => err
                    ? ( console.log('[indexjs] mongodb connection failled!'.red) )
                    : ( db = client.db(database_name),
                        console.log('[indexjs] mongodb connected'.green) )
)

app   .get( /get/, ( req, res ) =>
              db  ? db.collection( collection_name )
                      .find()
                      .toArray( ( err, result ) => {
                        logger ? (
                          err ? console.log(err) : 1,
                          result ? console.log(result) : 1
                        ) : 1
                        err
                          ? res.send(err)
                          : res.send(result)
                      } )
                  : res.send( { error: -1 } )
)

app   .post( /post/, ( req, res ) => {
              logger ? console.log(req.body) : 1
              if (req.body._id) {
                let ezt = req.body._id
                delete req.body._id
                db  ? db .collection( collection_name  )
                         .updateOne(
                           { "_id" : ObjectId(ezt) },
                           { $set: req.body }
                         )
                         .then( (v,err) => {
                           res.send( v )
                         } )
                    : res.send( { error: -1 } )
              } else {
                  db  ? db .collection( collection_name  )
                           .insertOne( req.body )
                           .then( res.send( req.body ) )
                      : res.send( { error: -1 } )
              }
} )

app   .post( /del/, ( req, res ) => {
              logger ? console.log(req.body) : 1
              db  ? db .collection( collection_name  )
                       .deleteOne( { "_id" : ObjectId(req.body.ezt) } )
                       .then( v=>
                         res.send(v)
                       )
                  : res.send( { error: -1 } )
} )

app   .use( '/',    express.static( static_folder ) )
app   .use( '/vue', express.static( vue_folder    ) )
app .listen( 3000 )
