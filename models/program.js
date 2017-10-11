var mongoose=require('mongoose')


var programSchema = mongoose.Schema({
  program:{
    type:String,
    // required:true
  },
  name:{
    type:String,
    // required:true
  },
   create_date:{
     type:Date,
     default:Date.now
   }
})

var Programs = module.exports=mongoose.model('programs',programSchema)

//get program

module.exports.getProgram= function(callback,limit){
  Programs.find(callback).limit(limit)
}

//add program

module.exports.addProgram= function(program,callback){
  Programs.create(program,callback)
}

//update program

module.exports.updateProgram= function(id,programs,callback){
  var query = {_id:id}
  var update={
    program:programs.program
  }
  Programs.findOneAndUpdate(query,update,callback)
}

//delete program

module.exports.deleteProgram= function(id,callback){
  var query = {_id:id}

  Programs.remove(query,callback)
}
