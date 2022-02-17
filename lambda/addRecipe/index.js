// Thibaud Chaussabel Blachier

console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
    const postdata = querystring.parse(event.body);

    let recipe = null;
    let recipejson = postdata["recipejson"];
    if(recipejson){
        recipe = JSON.parse(recipejson);
    }

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body : "No recipe received",
    };

    if (recipe == null) {
        return response;
    }

    recipe.id = Date.now();

    const params = {
        Bucket: "recipe-cegep",
        Key: "list-recipe.json",
    };

    let data = await s3.getObject(params).promise();
    let listRecipeJson = data.Body.toString('utf-8');
    const listRecipe = JSON.parse(listRecipeJson);
    listRecipe.push(recipe);
    listRecipeJson = JSON.stringify(listRecipe);
    params.Body  = listRecipeJson;
    data = await s3.putObject(params).promise();

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: recipe.id
    };

    return response;
};
