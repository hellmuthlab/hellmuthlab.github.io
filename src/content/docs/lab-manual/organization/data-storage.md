---
title: Data storage
description: Where and how we store data, analysis and results on the lab drive.
---

All lab data lives on the lab drive (LRZ cloud storage), not on laptops or USB sticks. This page explains how the drive is organized and the rules for working with it.

## Top-level folders

| Folder | Content |
|---|---|
| **Home Folders** | One folder per lab member: your data, analysis, results and meeting slides (see below). |
| **Projects** | Shared project work that belongs to the lab rather than to one person, for example the CRISPR arrayed screening protocol. |
| **Protocols** | Bench protocols, with older versions kept for reference. The current versions are on this website. |
| **Materials** | Plasmid, antibody and primer lists, lab inventory, cell storage, labels, sequences. |
| **Abstracts and Poster** | Abstracts, posters and the figures for them, one folder per event (`YYYY-MM Event`). |
| **Einkauf und Bestellungen** | Ordering, quotes, invoices, accounts and equipment lists. |
| **S2 GenTSV** | Genetic engineering (S2) documentation and reports. |
| **Shipping & import of research material** | Import permits, declarations and one folder per incoming or outgoing shipment. |
| **Templates & corporate design** | Lab logos and presentation templates. |

## Your home folder

Every member has a folder in **Home Folders** with the same numbered structure, so anyone can find their way around someone else's folder:

| Folder | Content |
|---|---|
| **01_Data** | Raw data, one subfolder per project or experiment. |
| **02_Analysis** | Scripts, notebooks and processed data. |
| **03_Results** | Figures, tables and summaries that come out of the analysis. |
| **04_Lab meeting** | Your lab meeting presentations. |
| **05_1-1 meeting** | Material for one-to-one meetings. |

Keep the information flowing in one direction: **Data → Analysis → Results**. Analysis reads from `01_Data` and writes to `02_Analysis` and `03_Results`; it never writes back into `01_Data`.

## Rules

1. **Never edit raw data.** Instrument output, sequencing files and exported plate-reader or FACS files stay exactly as they came off the machine. Work on a copy in `02_Analysis`.
2. **Use the same project name in all three folders.** If the data is in `01_Data/Project01_CRISPRi_Screen`, the analysis and results go into folders with the same project name, so a result can always be traced back to its data.
3. **Date your experiments.** Start experiment folders with `YYMMDD`, for example `260302_ValidationLibrary_Virus`. Folders then sort chronologically.
4. **Put a short README in every project folder.** Three lines are enough: what the experiment was, who did it, and the matching eLabFTW entry.
5. **Keep scripts and data apart.** Code goes into `02_Analysis` (ideally under version control), never between the raw files.
6. **No duplicates of shared files.** Lists such as plasmids, antibodies and primers exist once, in **Materials**. Link to them; do not copy them into your folder.
7. **Do not use temporary or final-looking names.** Avoid `final`, `final2` or `new`. Use the date, or a version number as in `v2-1`.

## Large files

Imaging, sequencing and other large datasets belong in `01_Data` as well. Do not copy them around. Reference the location in the README instead.

## Leaving the lab

Before you leave, tidy your home folder, add READMEs to the projects that others will continue and tell Johannes. Your folder stays on the drive.

:::note[To be decided]
- **Backups.** Document how the LRZ storage is backed up and for how long, and whether we keep an additional copy of irreplaceable raw data.
- **Access rights.** Decide whether home folders are readable by everyone in the lab or only by their owner and the PI.
- **Archiving.** Define when finished projects move out of the home folders and how long data is kept after a publication.
- **Large datasets.** Decide where very large imaging and sequencing data should live if the lab drive runs out of space.
:::
