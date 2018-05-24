var mongoose=require('./mongoose');
var schemaUsersCourse=new mongoose.Schema({
		user:{
			type:String,
			require:true,
			unique:true
		},
		courses:[
			{
				name:String,
				bool:Boolean
			}
			]
		})
var UsersCourse=mongoose.model("UsersCourse",schemaUsersCourse);
module.exports=UsersCourse;
