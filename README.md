# Nucular Weapon Arsenal and GDP by Country #

<img src ="https://i.pinimg.com/originals/06/c3/92/06c392b847166a9a671bfcd590d8fff7.gif" width = "1000" height = "200" />

# **Contributors:**
- Christina
- Cullen
- Kelly
- Nick
- Patrick

## Overview: Nukes and GDP

For this project, the team is exploring the question whether there is a relationship between a country’s GDP and the size of a country’s nuclear weapons arsenal. 

The data we will be examining comes from the [Federation of American Scientists published by Our World in Data](https://ourworldindata.org/nuclear-weapons). 

[Country GDP](https://knoema.com/mhrzolg/historical-gdp-by-country-statistics-from-the-world-bank-1960-2018).

In order to tell our story, we will be exploring a variety of visualizations that may include:

- Dynamic map visualizations to show quantities of weapons by country
- Line charts to show changes in individual country’s economic health and munitions over time.
- Heat maps. 



In addition, we will also be exploring various [happiness indicators](https://www.kaggle.com/unsdsn/world-happiness). Doing this to examine other relationships between nuclear stockpiles and GDP

 Other indicators to be explored (if needed) include: the Human Development Index (HDI), Gross National Income (GNI), and [National Suicide Rates](https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016).

Country's with nukes 2014
china,  france, india, israel, pakistan, russia, united kingdom, united states


# WEBSITE IDEAS #

[Scrolling Websites](https://michalsnik.github.io/aos/)

[charts](https://www.chartjs.org/)

[popper code](https://github.com/popperjs/popper-core)



# Daily Writeup #
**Cleaning data**
Dropped unnecessary columns.

**Combining data GDP and Nuke**
created Dataframes.
needing to merge data presented problems when trying to merge simply on year. 
To get around this we created a column Country year. However, after looking at uniques we saw that Russian Federation was used for one df and Russia for another. So we had to replace for all to be Russia.

Disclosure: Nuke production data begins in 1947. However, GDP data begins well before that. Our database year range will be 1960 - 2014.


Requirements
Website must include
- Python Flask-powered API
- HTML/CSS
- JavaScript
- One database

Website must feature:
- One complex, dynamic and interactive custom d3.js visualisation or
- Multiple leaflet, plotly, or othe d3-wrapper-tupe visualizaitons that update from the same source. 

Website's data:

