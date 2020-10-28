
from flask import Flask, render_template, redirect, url_for, jsonify
from flask_pymongo import PyMongo
import df_to_dict



# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/nukeDB")




# # Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    listings = mongo.db.by_country.find_one()
    print(listings)
    # Return template and data
    return render_template("index.html", listings=listings)


@app.route("/country/<name>")
def chinaNukes(name):
    result = mongo.db.by_country.find({"Country":name})
    print(result)
    
    data = []
    # data = [year.pop(index) for index, year in enumerate(result)] # "Almost there according to Geoff"
    for record in result:
    #     # search_term = character["real_name"].replace(" ", "").lower()
        record.pop('_id', None)
        print(record)
        data.append(record)
    #     # if search_term == canonicalized:
    #     #     return jsonify(character)

    return jsonify(data), 404
    # return data, 404
    # return "return string", 404

if __name__ == "__main__":
    app.run(debug=True)
 
