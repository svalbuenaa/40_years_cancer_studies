# Imports
import country_converter as coco

## Use a function to get the Country via coco and the Country_source manually
## Similar to the function *get_country_from_text()* from *extractCountryFromNER.ipynb*
## This one returns Country_source as well, and raises error if country not found
## because the idea now is to fix an error with a correct value. No need to have None values

def fix_country_from_text(text):
    cc = coco.CountryConverter()
    """Fixing Country value names manually, error if coco doesn't find Country name"""
    # Attempt to extract country directly from text passed to the function (NER)
    result = cc.convert(names=text, to='name_short')
    if result != "not found":
        return result, "Manual_correction"
    else:
        raise ValueError("New Country not found")