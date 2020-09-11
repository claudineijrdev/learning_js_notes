import Category from './../schemas/Category'

export default (req, res) =>{
     Category
          .find({})
          .then((categories) =>{
               console.log(categories)
               if(!categories || !categories.length){
                    return res.status(404)
                              .json({
                                   status: false,
                                   data: []
                              })
               }
               return res.status(200)
                         .json({
                              status: true,
                              data: categories
                         })
          })
          .catch(err => res.status(500)
                           .json({
                                status: false,
                                data:[]
                           })
               )
}