# NCRB "India Metro Arrests" 2020 - DESG 317 Assignment 3
Dashboard for Dr Anita Kulkarni (Member-Secretary, National Expert Committee on Urban Policing & Criminal Justice Reform).
Decision: which city-and-group combinations to examine first, and which figures to verify before acting.

Live: https://sarojiniswaminathan.github.io/assignment_3_DESG317/

## Files
- `index.html`, `style.css`, `code.js` - the dashboard (Chart.js 4.4.1 from jsDelivr)
- `data/ncrb_2020_table19b2_RAW.csv` - raw NCRB table as downloaded
- `data/ncrb_2020_metro_arrests_clean.csv` - cleaned data (short column names, shares, zero flags)
- `prepare_data.py` - reproduces the cleaned file: `python prepare_data.py data/ncrb_2020_table19b2_RAW.csv`

## Provenance
Source: NCRB, Crime in India 2020, Table 19B.2. Licence and date accessed: [fill in from the download page].
Cleaning: dropped "Total Cities" row (used to reconcile: city columns sum exactly to it; male+female = total; age groups sum to total), renamed 20 columns, split state from city, computed shares.
