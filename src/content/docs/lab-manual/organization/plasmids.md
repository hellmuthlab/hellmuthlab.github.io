---
title: Plasmids
description: The Hellmuth Lab plasmid collection - ID prefixes, where the list is kept, sequencing requirements, and how to label and log a plasmid prep.
---

Plasmids are central to our work, so every plasmid in the lab is listed, labeled and sequence-verified.

## The plasmid list

The list of all lab plasmids is an Excel file on our LRZ cloud storage drive:

`Hellmuth_Lab/Materials/Hellmuth_Lab_Plasmids.xlsx`

Add every new plasmid to this list, and update it when you make a new prep or get a sequencing result. See [Onboarding](/lab-manual/onboarding/) for access to the cloud storage.

## Plasmid IDs

Each plasmid has an ID made of a two-letter prefix and a number, for example **EX01**. The prefix tells you what kind of plasmid it is:

| Prefix | Plasmid type |
|---|---|
| **EX** | Expression plasmids (including lentiviral packaging and envelope plasmids) |
| **EG** | Empty gRNA plasmids (gRNA backbones) |
| **SG** | sgRNA plasmids |
| **SH** | shRNA plasmids (including TRCN clones and empty shRNA vectors) |
| **LP** | Luciferase plasmids |

IDs are unique across the whole list and are never reused.

## Sequence verification

**Every plasmid must be sequenced to confirm that it is correct.**

- **After a prep to amplify a plasmid.** This applies when a plasmid has arrived from Addgene or a collaborator, or has been re-amplified from a stock. Do at least one Sanger sequencing read in an informative region.
- **After each cloning.** Sequence the **entire ORF** by Sanger sequencing. This is especially important when the cloning involved PCR. Better still, send the plasmid for **whole plasmid sequencing**.

Record the result in the plasmid list: *yes*, *no* or *failed* for sequence verified, the sequencing file or folder name, and notes on what was sequenced (for example which clone, or which region the read covers). *Yes* can mean a partial read, the complete ORF or the whole plasmid; say which in the notes.

## Tubes and labels

**Tube (vial) IDs.** Every physical preparation gets its own ID: the plasmid ID, an underscore and a version number, for example **EX01_V001**. The number counts up with each new prep of the same plasmid. Write the V in uppercase. If an experiment fails, the vial ID tells us exactly which prep was used. Properties of a prep (concentration, volume, sequencing result, box and position) belong to the vial, not to the plasmid.

**Tube labels** are printed on a Brother P-touch label printer:

- **Side label** (12 mm tape, 48 mm long): line 1 the ID, line 2 the plasmid name, line 3 an identifying detail such as the Addgene ID.
- **Lid label** (9 mm tape): the ID and a Data Matrix code that encodes the vial ID.

Use black text on white tape (not clear), apply labels to dry tubes at room temperature, and let the adhesive cure for a day before freezing. Boxes and freezers are labeled as described in [Labeling & logging](/lab-manual/organization/labeling-and-logging/).

## How to log a new prep

1. Look up the plasmid ID in the plasmid list. If it is a new plasmid, add it first.
2. Take the next vial number for that plasmid, for example **EX01_V002**.
3. Record the prep in the inventory: vial ID, plasmid ID, who prepped it, date, method, concentration, volume, box and position in the box.
4. Print the side and lid labels and attach them to the tube.
5. Put the tube in its box at the position you logged.
6. Send it for sequencing as described above, and record the result.
