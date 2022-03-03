// Thibaud Chaussabel Blachier

console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
    const postdata = querystring.parse(event.body);

    let project = null;
    let projectjson = postdata["projectjson"];
    if(projectjson){
        project = JSON.parse(projectjson);
    }

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body : "No project received",
    };

    if (project == null) {
        return response;
    }

    project.id = Date.now();

    const params = {
        Bucket: "project-cegep",
        Key: "list-project.json",
    };

    let data = await s3.getObject(params).promise();
    let listProjectJson = data.Body.toString('utf-8');
    const listProject = JSON.parse(listProjectJson);
    listProject.push(project);
    listProjectJson = JSON.stringify(listProject);
    params.Body  = listProjectJson;
    data = await s3.putObject(params).promise();

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: project.id
    };

    return response;
};
