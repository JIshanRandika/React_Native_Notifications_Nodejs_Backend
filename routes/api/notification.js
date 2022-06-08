
const express = require('express');

const fetch = require('node-fetch');

const router = express.Router();

router.post('/sendToAll',(req,res)=>{
    // import fetch from 'node-fetch';
    // var notification = {
    //     'title' : 'Title of notification',
    //     'body' : 'Subtitle'
    // }
    //
    // var fcm_tokens = []
    //
    // var notification_body = {
    //     'notification': notification
    //     // 'registration_ids': fcm_tokens
    // }
    //
    // fetch('https://fcm.googleapis.com/fcm/send',{
    //     'method' : 'POST',
    //     'headers' : {
    //         'Authorization': 'key='
    //             +'AAAAAfguTzI:APA91bGyfTpolj-RoSVcr0nnXA3HQe_7ZcX1TSqiuPe8YpslNYdY1yqmO761Z_3eUivnEyBvcqcSOl-4fGoDk02zS1qksDPRvpbB8wvJElnCvzjbdQ0m2wqwu_aVTlTXpXgRAgOIq72A',
    //         'Content-Type': 'application/json'
    //     },
    //     // 'body':JSON.stringify(notification_body)
    //     'body':{
    //         "to": "cWfKB8c3SnunYFTwTT4ZOg:APA91bEuajU_DCaEGi5sFDFdL88DNNm_67497U0MsELCk3nSUsX6mXTc892x5m-RBbXSa2ZTmj3YvV__rl-GGkk8CBhGekytMzvBaTcelplBhf8bG71iuQTiYO697zOHA8oD7Rhz7APW",
    //         "notification": {
    //             "title": "Check this Mobile (title)",
    //             "body": "Rich Notification testing (body)",
    //             "mutable_content": true,
    //             "sound": "Tri-tone"
    //         },
    //
    //         // "data": {
    //         //     "url": "sd",
    //         //     "dl": "asd"
    //         // }
    //     }
    // }).then(()=>{
    //     res.status(200).send('Notification send Successfully');
    // }).catch((err)=>{
    //     res.status(400).send('Something went wrong!');
    //     console.log(err);
    // })


    var FCM = require('fcm-node');
    var serverKey = 'AAAAAfguTzI:APA91bGyfTpolj-RoSVcr0nnXA3HQe_7ZcX1TSqiuPe8YpslNYdY1yqmO761Z_3eUivnEyBvcqcSOl-4fGoDk02zS1qksDPRvpbB8wvJElnCvzjbdQ0m2wqwu_aVTlTXpXgRAgOIq72A'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'cWfKunYFTwTT4ZOg:APA91bEuajU_DCaEGi5sFDFdL88DNNm_67497U0MsELCk3nSUsX6mXTc892x5m-RBbXSa2ZTmj3YvV__rl-GGkk8CBhGekytMzvBaTcelplBhf8bG71iuQTiYO697zOHA8oD7Rhz7APW',
        collapse_key: 'your_collapse_key',

        notification: {
            title: 'Title of your push notification',
            body: 'Body of your push notification'
        },

        // data: {  //you can send only notification or only data(or include both)
        //     my_key: 'my value',
        //     my_another_key: 'my another value'
        // }
    };

    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });

})

module.exports = router
