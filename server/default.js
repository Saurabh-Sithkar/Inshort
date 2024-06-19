
import {data} from './constants/data.js';
import News from './model/newSchema.js'

const DefaultData = async() => {
    try{
         // await News.deleteMany({});
          await  News.insertMany(data);
         console.log('data imported succssfully');
    } catch(error){
        console.log('Error',error.message);
    }
}

export default DefaultData