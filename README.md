# Final_project
Data Visualization Bootcamp Final Project


## [Project Overview](https://docs.google.com/presentation/d/1ff6geuibB3INIdmVZ1MCOf6o9UUcdfSww27aJYee5uw/edit#slide=id.gd7b3277579_0_96)
The purpose of this project is to obtain an understanding of the relationship between waste production and household income in Austin, TX. With Austin being a diverse city  growing on both ends of the rich-poor spectrum, our team wanted to determine if there is a correlation between higher income households and higher waste production in comparison to lower income homes.

## Communication Protocols 
Our team is using collaboration tools such as Slack, Zoom, email, and Google docs. These tools enable us to communicate and develop our ideas through the forums that are accessible to us. We are facilitating this process by creating a Slack group message, which is our main forum of communication alongside Zoom calls. We shared our contact information, our availability, topics and datasets, codes, and any points and notes that could be potentially missed by a team member. We set a consistent time for Zoom meetings that everyone can attend in order for team members to not miss any information, if at times a member has to leave we communicate on slack to ensure everyone is up to date. Email and Google docs are being used in order to have documentation of the work assigned during our calls and messages as well as progress being made. 

## Resources
The reliable resources used:
- [Garbage and waste routes for City of Austin](https://data.austintexas.gov/Locations-and-Maps/Garbage-Routes/azhh-4hg8)
- [Waste collection and diversion daily report](https://data.austintexas.gov/Utilities-and-City-Services/Waste-Collection-Diversion-Report-daily-/mbnu-4wq9) 
- [Zip code boundaries for Austin](https://public.opendatasoft.com/explore/dataset/us-zip-code-latitude-and-longitude/export/?refine.state=TX&q=Austin)
- [Household income by zip code](https://www.austintexas.gov/page/demographic-data)

## Tools
- Excel
- Jupyter Notebook
- PgAdmin4
- AWS 
- Tableau
- SQL
- Matplotlib


## Process
- Created a [schema](https://github.com/TheLittlePrincess/Final_project/blob/main/screenshots/Initial_ETL.png) based on the data first gathered
- Created a Database  in AWS
- Created the tables in pgAdmin based on the QuickDBD [sql](https://github.com/TheLittlePrincess/Final_project/blob/main/Initial_ETL.sql) export
- Consolidated the zip code and income data into a single [file](https://github.com/TheLittlePrincess/Final_project/blob/main/full_zip_codes.csv)
- [Cleaned](https://github.com/TheLittlePrincess/Final_project/blob/main/waste_data_etl.ipynb) the waste collection data and filtered to only utilize the 2017 data
- We filtered and merged the garbage and waste route data into the [Routes_2017_weight data](https://github.com/TheLittlePrincess/Final_project/blob/main/routes_2017_weight.csv)  - now we have the waste weight per route
- We sampled pairs of zip codes and routes [Preliminary_zip_route_weight.csv](https://github.com/TheLittlePrincess/Final_project/blob/main/old_files/Preliminary_zip_route_weight.csv) in order to append household income data to have a preliminary dataset to run our machine learning model
- During week one, we used the extracted sample data to create a linear regression [model](https://github.com/TheLittlePrincess/Final_project/blob/main/old_files/ML_rough_model.ipynb) in order to complete a predictive analysis and to show the relationship between the variables of income and waste output 

(Deliverable 2 starts below)

- Once found which zipcode each route belongs to, we [aggregated](https://github.com/TheLittlePrincess/Final_project/blob/main/routes_with_zips_joined_loads_dem.ipynb) the waste weight per route per zipcode, and extracted what became the source [data](https://github.com/TheLittlePrincess/Final_project/blob/main/zips_load_demographics.csv) (zips_load_demographics) that includes the total trash output, median income, household units, and population by zipcode
- Such source data was uploaded into our [database](https://github.com/TheLittlePrincess/Final_project/blob/Database/ML_rough_model_Week2.ipynb) to feed our model
- We then split our dataset into training/testing randomly
- Through the first iteration of the  [model](https://github.com/TheLittlePrincess/Final_project/blob/main/ML_rough_model_Week2.ipynb) we concluded that there is a linear relationship when it comes to [population](https://github.com/TheLittlePrincess/Final_project/blob/main/Trash%20output%20vs%20Population.png) but [normal](https://github.com/TheLittlePrincess/Final_project/blob/main/Trash%20output%20vs%20Median%20income.png) when it comes to income
- From such output we’ve started toying with PCA (Principal Component Analysis) as a better alternative since it will allow us to determine what is/are the most relevant factor(s) when it comes to trash output 
- Also, we have a set of [wireframes](https://github.com/TheLittlePrincess/Final_project/tree/main/Wireframes) to base the design of the dashboard site and have made additional progress on the [presentation](https://docs.google.com/presentation/d/1ff6geuibB3INIdmVZ1MCOf6o9UUcdfSww27aJYee5uw/edit#slide=id.gd7b3277579_0_3643) 

## Summary
After completing our ETL process with reliable and concise data, we have consolidated our data into a table that contains data by zipcode, including the trash output along with income and population data. We were then able to upload that information into our database and train a first version of our model. 
From the conclusions reached so far we are exploring PCA as an alternative for our model and will enter the last phase of the project. 
