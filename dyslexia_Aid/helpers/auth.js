const expressjwt = require("express-jwt");

function authjwt() {
  const secret = process.env.SECRET;
  const api = process.env.API_URL;
  return expressjwt({
    secret,
    algorithms: ["HS256"],
    isRevoked:isRevoked,
  })
  .unless({
    path: [
      {
        url: `${api}/users/:id`, methods: ["GET","OPTIONS"],
      },
      {
        url: `${api}/users/`, methods: ["GET","OPTIONS"],
      }
      ,`${api}/users/login`,`${api}/users/register`
    ],
  });
  
}
async function isRevoked(req,payload,done){
  if(!payload.isAdmin){
    done(null,true)
  }
  done();
}
module.exports = authjwt;
