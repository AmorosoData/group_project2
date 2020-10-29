# Dependencies
import os
import pandas as pd

def make_dict():

    data_df = pd.read_csv('./data/nuke_coordinates.csv')
    del data_df["Unnamed: 0"]
    data_df = data_df[["Country_Year", "Country", "Code", "Year", "Quantity_of_Nuclear_Weapons", "GDP (Current LCU)", "Latitude", "Longitude"]]
    data_df = data_df.set_index("Country_Year")
    
    final_dict = data_df.to_dict("index")

    return final_dict









