const M = require('mongoose');
const B = require('body-parser');
const Ex = require('express');
const C = require('cors');
const { Mod } = require('./handleSchema.js');
const User = M.model('Msg', Mod);
const App = Ex();
App.use(B.json());
const corsOptions = {
    origin: '',
    methods: 'GET, POST',
  };
  
  App.use(C(corsOptions));
  

const DbConnection = async () => {
    try {
        await M.connect('mongodb+srv://kmugeis2005:dontforgetit@mugeishhero.ggr3iod.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=mugeishhero');
        console.log("DB Connection Success");
    } catch (error) {
        console.log("Oops! Server Error:", error);
    }
};
DbConnection();

App.post('/post', async (request, response) => {
    const { name, Ph, text } = request.body;
    try {
        const Msg = await User.create({ name, Ph, text });
        response.status(200).json({ Msg });
    } catch (error) {
        response.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 6900;
App.listen(PORT, () => {
    console.log(`Server Connected in ${PORT}`);
});
