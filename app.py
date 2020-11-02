
from flask import Flask, render_template, redirect, url_for, jsonify
from flask_pymongo import PyMongo
# import df_to_dict


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/nukeDB")

# # Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    # might need to change this to by_location
    listings = mongo.db.by_location.find_one()
    print(listings)
    # Return template and data
    return render_template("index.html", listings=listings)


@app.route("/country")
def Nukes():
    nukeData = mongo.db.by_location
    result = list(nukeData.find({}))
    print(result)

    data = []

    for record in result:

        record.pop('_id', None)

        data.append(record)

    return jsonify(result)

@app.route("/log")
def Nukes():
    nukeData = mongo.db.log_collection
    result = list(nukeData.find({}))
    print(result)

    data = []

    for record in result:

        record.pop('_id', None)

        data.append(record)

    return jsonify(result)

@app.route("/gdp")
def Nukes():
    nukeData = mongo.db.d3_collection
    result = list(nukeData.find({}))
    print(result)

    data = []

    for record in result:

        record.pop('_id', None)

        data.append(record)

    return jsonify(result)


@app.route("/happy")
def geohappyall():
    happyData = mongo.db.happyGeo
    query = list(happyData.find({}, {'_id': 0}))
    return jsonify(query)

    # return data, 404
    # return "return string", 404


if __name__ == "__main__":
    app.run(debug=True)
