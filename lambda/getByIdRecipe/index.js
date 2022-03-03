// Thibaud Chaussabel Blachier

console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
    const id = event.queryStringParameters && event.queryStringParameters.id;

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: 'You must give a project id'
    };
    if (id == null) {
        return response;
    }

    const params = {
        Bucket: "project-cegep",
        Key: "list-project.json",
    };

    const data = await s3.getObject(params).promise();
    console.log("Raw text:\n" + data.Body.toString('utf-8'));
    const listProjectJson = data.Body.toString('utf-8');
    const listProject = JSON.parse(listProjectJson);

    let project = listProject.find(project => project.id == id);

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify(project).toString('utf-8')
    };

    return response;
};
