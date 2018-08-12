var FormData = require('form-data');
const https = require("https");

function get(url, callback) {
    https.get(url, function (result) {
		var dataQueue = "";    
		result.setEncoding('utf8');
        result.on("data", function (dataBuffer) {
            dataQueue += dataBuffer;
        });
        result.on("end", ()=> {
            callback(dataQueue);
        });
    });
}
function post(host, path, data, callback){
	// TODO: parse from url
	var options = {host:host, port:443, path:path, method:'POST'};
	var req = https.request(options, (res)=>{
		var dataQueue = "";
		res.setEncoding('utf8');
		res.on('data', (dataBuffer)=>{
			dataQueue += dataBuffer;
		});
		res.on('end', ()=>{
			callback(dataQueue);
		});
		
	});
	req.on('error', (err)=>{
		console.log(err.message);
		callback('failed to forward');
	});
	req.write(data);
	req.end();
}
function btoa(b64encoded){
	return Buffer.from(b64encoded, 'base64');
}

function post_tp(host, path, data, callback){
	// TODO: parse from url
	var options = {host:host, path:path, method:'POST',
	     headers:{
        'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryC8vIwjE3PJYYPkdu',

        // 'Content-Length':data.length
        // 'Access-Control-Allow-Origin': '*'
    }};
	var req = https.request(options, (res)=>{
		var dataQueue = "";
		res.setEncoding('utf8');
		res.on('data', (dataBuffer)=>{
			dataQueue += dataBuffer;
		});
		res.on('end', ()=>{
			callback(dataQueue);
		});
		
	});
	req.on('error', (err)=>{
		console.log(err.message);
		callback('tp: failed to forward');
	});
	console.log('data--test');
	console.log(data);
	req.write(data);
	req.end();
}


var entry = (function(){
    var prefill_str = "entry.1286494305=q1";
    var prefill = prefill_str.split('&');
    var entry = {};
    for(var i in prefill){
      var j = prefill[i].split('=');
      entry[j[1]] = j[0];
    }
    return entry;

   })();

exports.handler = function(evt, context, cb){
	var b = evt.body, q = evt.queryStringParameters;
	if(evt.isBase64Encoded){
	// 	//console.log('base64 encoded', b);
		b = btoa(b).toString('utf8'); 
	// 	// for GET request or POST without data, this would be '[object Object]'
	}
	
	console.log(q, b);
	console.log(evt);
// 1286494305

	var posturl ='https://docs.google.com/forms/d/e/1FAIpQLSdVoKm_7LwO8PugB6Fwp2OVveMLkAHxu4byWXK22Yab3FslxA/formResponse';

    console.log(posturl);

    var data = {};
    data[entry.q1] = "yes";
    data['submit'] = 'Submit';
    var fd = new FormData();
    for(var item in data){
      fd.append(item, data[item]);
    }

    fd.submit('https://docs.google.com/forms/d/e/1FAIpQLSdVoKm_7LwO8PugB6Fwp2OVveMLkAHxu4byWXK22Yab3FslxA/formResponse', function(err, res){
    	if (err) throw err;
    	console.log(res);
  		console.log('Done');
    	// res.resume();
    });

	// post_tp("docs.google.com", '/forms/d/e/1FAIpQLSdVoKm_7LwO8PugB6Fwp2OVveMLkAHxu4byWXK22Yab3FslxA/formResponse', b, (res)=>{
	// 	console.log('forward success?');
	// 	cb(null, {
	// 		statusCode: 200,
	// 		body: 'now: ' + new Date().toISOString() + '\n' + 
	// 			'data: ' + fd + '\n' +
	// 			'test:' + posturl + '\n' +
	// 			'result: ' + res + '\n' 
	// 	});
	// });
	// use POST
	post('musicai.top', '/date', 'a=b', (res)=>{
		console.log('forward success!');
		cb(null, {
			statusCode: 200,
			body: 'now: ' + new Date().toISOString() + '\n' + 
				'result: ' + res + '\n' + 
				'data: ' + b + '\n'
		});
	});

	// use GET
	// get('https://musicai.top/date', (res)=>{
	// 	cb(null, {
	// 		statusCode: 200,
	// 		body: new Date().toISOString() + '\n' + res + '\n' + b
	// 	});
	// });
}