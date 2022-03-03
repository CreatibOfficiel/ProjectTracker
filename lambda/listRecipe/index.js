// Thibaud Chaussabel Blachier

console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
    console.log(event);

    const params = {
        Bucket: "project-cegep",
        Key: "list-project.json",
    };

    const data = await s3.getObject(params).promise();
    console.log("Raw text:\n" + data.Body.toString('utf-8'));
    const listProjectJson = data.Body.toString('utf-8');

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: listProjectJson,
    };

    return response;
};
