<<<<<<< HEAD
from flask import Flask, render_template, redirect, url_for
=======

from flask import Flask, render_template, redirect, url_for, jsonify
>>>>>>> d388d83347a43485143d5da3c3c1c95b52547782
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
<<<<<<< HEAD
    print(listing)
=======
    print(listings)
>>>>>>> d388d83347a43485143d5da3c3c1c95b52547782
    # Return template and data
    return render_template("index.html", listings=listings)


# Route that will trigger the scrape function
# @app.route("/get_dict")
# def scraper():

#     listings = mongo.db.listings

<<<<<<< HEAD
    # Run the scrape function
    # # mars_scraped_data = scrape_mars.scrape()
    # nuke_data = df_to_dict.make_dict()

    # # Update the Mongo database using update and upsert=True
    # listings.update({}, nuke_data, upsert=True)

    # # Redirect back to home page
    # return redirect(url_for('home'))


print('Hello2')
=======
#     # Run the scrape function
#     # mars_scraped_data = scrape_mars.scrape()
#     nuke_data = df_to_dict.make_dict()

#     # Update the Mongo database using update and upsert=True
#     listings.update({}, nuke_data, upsert=True)

#     # Redirect back to home page
#     return redirect(url_for('home'))

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
>>>>>>> d388d83347a43485143d5da3c3c1c95b52547782

if __name__ == "__main__":
    app.run(debug=True)
 
