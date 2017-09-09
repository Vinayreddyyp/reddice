import express from 'express';
import path from 'path';

let app = express();

app.get('/',(req,res) => {
	res.sendfile(path.join(__dirname, './index.html'))
})
app.listen(4000,() => console.log('listen to 4000 port'));