# 40 years of cancer studies

## Downloading article information from NCBI

### Step 1-Install Entrez Direct. 
The way to interact with the NCBI database of scientific articles is through the command line application [**Entrez Direct**](https://www.ncbi.nlm.nih.gov/books/NBK179288/). To use the application, first you will need to install it using this command:  
  
```  
sh -c "$(curl -fsSL https://ftp.ncbi.nlm.nih.gov/entrez/entrezdirect/install-edirect.sh)"
```  
  
Às stated in the Entrez Direct documentation, *This will download a number of scripts and several precompiled programs into an "edirect" folder in the user's home directory.*. The installer might ask you if you want it to add the PATH update command automatically. You can select [y]. Otherwise, you can just press Return and manually update PATH later if you want.
  
In case you want to use the app directly (without restarting the terminal), follow the next instruction in the documentation: *Once installation is complete, run:*  
  
```
export PATH=${HOME}/edirect:${PATH}
```  
  
### Step 2-Query the NCBI database through Entrez Direct
There is a variety of queries allowed by the Entrez Direct app. Once the app is installed, you can navigate to your project's directory and use the following query in your terminal to retrieve the identification numbers (i.e. **PMID numbers**) of the cancer studies published in the period of interest (in this case, July 1984 to July 2024):  
 
```
esearch -db pubmed -query "cancer AND 1984/07/01[dp]:2024/06/30[dp]" | efetch -format uid > pmids_from_19840701_until_20240630.txt
```    