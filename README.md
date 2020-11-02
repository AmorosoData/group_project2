# Nucular Weapon Arsenal and GDP by Country #

<img src ="https://i.pinimg.com/originals/06/c3/92/06c392b847166a9a671bfcd590d8fff7.gif" width = "500" height = "100" />

## **Contributors:** ##
- Christina
- Cullen
- Kelly
- Nick
- Patrick

## Overview: Nukes and GDP ##
For this project, the team is exploring the question whether there is a relationship between a country’s GDP and the size of a country’s nuclear weapons arsenal. Country's with nukes 2014 China, France, India, Israel, Pakistan, russia, United Kingdom, United States

##  Data ##
The data we will be examining comes from:
1. [Federation of American Scientists published by Our World in Data](https://ourworldindata.org/nuclear-weapons). 

2. [Country GDP](https://knoema.com/mhrzolg/historical-gdp-by-country-statistics-from-the-world-bank-1960-2018).

3. [happiness indicators](https://www.kaggle.com/unsdsn/world-happiness). Doing this to examine other relationships between nuclear stockpiles and GDP

4. [National Suicide Rates](https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016).

## Visualizations ##
In order to tell our story, we will be exploring a variety of visualizations that include:

- Dynamic map visualizations to show quantities of weapons by country.
- Dynamic map visualizations to show happieness measures for those country's with a nuclear arsenel
- Graph depicting GDP by country and Nuclear arsnenel quanity over time.

## WEBSITE ##
[Scrolling Websites](https://michalsnik.github.io/aos/)

## Writeup ##
**Cleaning data**
Dropped unnecessary columns.

**Combining data GDP and Nuke**
created Dataframes.
needing to merge data presented problems when trying to merge simply on year. 
To get around this we created a column Country year. However, after looking at uniques we saw that Russian Federation was used for one df and Russia for another. So we had to replace for all to be Russia.

# Disclosure: #
Nuke production data begins in 1947. However, GDP data begins well before that. Our database year range will be 1960 - 2014.


## Requirements ##
Website includes:
- Python Flask-powered API
- MongoDB database
- HTML/CSS
- JavaScript


Rolling Out Website: 

- Create New Project Environment 
    - Run this command: conda create -n <environmentName>--file requirements.txt python=3.6

    - If "ModuleNotFoundError: No module named 'library name'" error arises:
        1. <conda activate environmentName>
        2. <conda install -c anaconda ipykernel>
        3. <python -m ipykernel install --user --name environmentName>
        4. <conda install (library name ex. pymongo)>
        5. <pip freeze > requirements.txt>
        6. (In Jupyter Notebook) Change Kernel from python 3 to project_env
 

     
    


## Git Notes ##
1. Before starting 'new' work: git checkout main
2. git pull origin main
3. git checkout yourBranchName
4. git merge main
5. git add .
6. git commit -m"detailed message"
7. git push
8. do your work
9. git add .
10. git commit -m"detailed message"
11. git push origin yourBranchName
12. Go to Github and make pull request. (Do this only when confident you want to update main repo)
