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
        body: 'You must give a recipe id'
    };
    if (id == null) {
        return response;
    }

    const params = {
        Bucket: "recipe-cegep",
        Key: "list-recipe.json",
    };

    const data = await s3.getObject(params).promise();
    console.log("Raw text:\n" + data.Body.toString('utf-8'));
    const listRecipeJson = data.Body.toString('utf-8');
    const listRecipe = JSON.parse(listRecipeJson);

    let recipe = listRecipe.find(recipe => recipe.id == id);

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify(recipe).toString('utf-8')
    };

    return response;
};
