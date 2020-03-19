const mongoose =  require('mongoose')
mongoose.connect(`mongodb+srv://niksein:password123456@cluster0-exkmx.mongodb.net/test?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

