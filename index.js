const name1 = "Hello javascript";
console.log(name1);

// // const AWS = require('aws-sdk');
// // const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// // exports.handler = async (event, context) => {
// //     console.log('Recieved event:', JSON.stringify(event, null, 2));

// //     //Iterate through the SQS messages in the event
// //     for (const record of event.Records){
// //         try {
// //             //get teh messg body from the records
// //             const body = JSON.parse(record.body)

// //             //get the original messg ID and source queue ARN
// //             const messageId = body.messageId;
// //             const sourceQueueUrl = body.Attributes['ApproximateReceiveCount'];

// //             // //create a new SQS message request with the original message body
// //             // const params = {
// //             //     MessageBody: JSON.stringify(body),
// //             //     QueueUrl: sourceQueueUrl
// //             // };

// //             //Send the message back to the source queue
// //             await sqs.sendMessage(params).promise();
// //             console.log('Message ${messageId} sent back to the source queue ${sourceQueueUrl}');
// //         }catch(error) {
// //             console.error('Error processing messgae ${record.messageId}:',error)
// //         }
// //     }
// // }
// // const xml = require('txml');
// // const data = '
// // <tag>tag content</tag>
// // <tag2>another content</tag2>
// // <tag3>
// //   <insideTag>inside content</insideTag>
// //   <emptyTag />
// // </tag3>';

// // const dom = xml(data); // the dom can be JSON.stringified

// // xml.stringify(dom); // this will return the dom into an xml-string

// const xml2js = require('xml2js');

// const xml = '<?xml version="1.0"?><Employee><FirstName>Manish</FirstName><LastName>Patil</LastName><Address>123, Homestreet</Address><City>Bangalore</City><Zip>560212</Zip><Company>Cap</Company><MaritalStatus>Unmarried</MaritalStatus></Employee>';

// xml2js.parseString(xml, function (err, result) {
//     // console.log((result));
//     console.log(result.Employee.MiddleName)

//     if(result.Employee.FirstName == undefined || result.Employee.MiddleName == undefined || result.Employee.LastName == undefined || result.Employee.Company == undefined || result.Employee.Zip == undefined){
//         throw ( "Required Fields are Missing");
//     }
//     const name = result.Employee.FirstName + " " +  result.Employee.LastName
//     console.log(name)
//     const address = [result.Employee.Address[0], result.Employee.City[0], result.Employee.FirstName[0]]
//     console.log(address)
//     const company = result.Employee.Company
// });

