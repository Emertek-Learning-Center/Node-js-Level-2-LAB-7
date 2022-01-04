const axios = require("axios")


axios.get('https://reqres.in/api/users')
.then(res => {
    console.log(res.data);
})