
from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
import df_to_dict


print('hello')
# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/nuke_app")



# Below I am using as a template from activity Stu_scrape_weather solution

# # Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    listings = mongo.db.listings.find_one()

    # Return template and data
    return render_template("index.html", listings=listings)


# Route that will trigger the scrape function
@app.route("/get_dict")
def scraper():

    listings = mongo.db.listings

    # Run the scrape function
    # mars_scraped_data = scrape_mars.scrape()
    nuke_data = df_to_dict.make_dict()

    # Update the Mongo database using update and upsert=True
    listings.update({}, nuke_data, upsert=True)

    # Redirect back to home page
    return redirect(url_for('home'))


print('Hello2')

if __name__ == "__main__":
    app.run(debug=True)
 
