"""Clean NCRB Crime in India 2020, Table 19B.2 -> data/ncrb_2020_metro_arrests_clean.csv
Run: python prepare_data.py NCRB_CII-2020_Table_No-19B_2__1_.csv
Steps: (1) drop 'Total Cities' row (kept only as a check), (2) rename 20 columns to short names,
(3) strip state from city name into its own column, (4) reconcile totals, (5) add shares + zero flags."""
import sys, pandas as pd
raw = pd.read_csv(sys.argv[1] if len(sys.argv) > 1 else "NCRB_CII-2020_Table_No-19B_2__1_.csv")
names = ["sl_no","city_full","juv_boys","juv_girls","juv_total","a18_30_male","a18_30_female","a18_30_total",
         "a30_45_male","a30_45_female","a30_45_total","a45_60_male","a45_60_female","a45_60_total",
         "a60p_male","a60p_female","a60p_total","total_male","total_female","total_arrests"]
raw.columns = names
check = raw[raw.city_full == "Total Cities"].iloc[0]
df = raw[raw.city_full != "Total Cities"].copy()
for c in names[2:]: df[c] = df[c].astype(int)
# reconciliation (raises if the table is internally inconsistent)
assert (df.iloc[:, 2:].sum() == check[2:].astype(int)).all(), "column sums differ from NCRB 'Total Cities' row"
assert (df.total_male + df.total_female == df.total_arrests).all()
assert (df.juv_total + df.a18_30_total + df.a30_45_total + df.a45_60_total + df.a60p_total == df.total_arrests).all()
assert (df.juv_boys + df.a18_30_male + df.a30_45_male + df.a45_60_male + df.a60p_male == df.total_male).all()
df["city"] = df.city_full.str.replace(r"\s*\(.*\)", "", regex=True)
df["state"] = df.city_full.str.extract(r"\((.*)\)")[0]
for g, c in [("juv","juv_total"),("18_30","a18_30_total"),("30_45","a30_45_total"),("45_60","a45_60_total"),("60p","a60p_total"),("female","total_female")]:
    df[f"share_{g}_pct"] = (df[c] / df.total_arrests * 100).round(2)
df["zero_juv_girls"] = df.juv_girls == 0
df["zero_60p"] = df.a60p_total == 0
df["zero_juv_total"] = df.juv_total == 0
df.drop(columns="city_full").to_csv("data/ncrb_2020_metro_arrests_clean.csv", index=False)
print("OK", len(df), "cities; all-city shares (%):", {g: round(df[c].sum()/df.total_arrests.sum()*100,2) for g,c in
  [("juv","juv_total"),("18_30","a18_30_total"),("60p","a60p_total"),("female","total_female")]})
print("zero juvenile girls:", int(df.zero_juv_girls.sum()), "| zero 60+:", list(df[df.zero_60p].city))
