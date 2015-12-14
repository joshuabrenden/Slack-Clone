Meteor.startup(function (){
  smtp = {
    username: 'joshuabrenden@gmail.com',
    password: 'ozlhME2rpEaJp5_3C9A4Lw',
    server: 'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
