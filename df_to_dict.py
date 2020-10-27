# Dependencies
import os
import pandas as pd

def make_dict():

    data_df = pd.read_csv('./data/cleaned_nuke_csv')
    del data_df["Unnamed: 0"]
    data_df = data_df[["Country_Year", "Country", "Code", "Year", "Quantity of Nuclear Weapons", "GDP (Current LCU)"]]
    data_df = data_df.set_index("Country_Year")
    
    final_dict = data_df.to_dict("index")

    return final_dict









