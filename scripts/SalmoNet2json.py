#!/bin/env python3

import csv
import json

OrthologGroups = {"uniprot": {}, "group": {}}
with open("../data/ortholog_groups.csv") as f:
    reader = csv.reader(f, delimiter=';')
    headers = next(reader)
    for row in reader:
        if row[0] not in OrthologGroups["group"]:
            OrthologGroups["group"][row[0]] = {}
        if row[5] not in OrthologGroups["group"][row[0]]:
            OrthologGroups["group"][row[0]][row[5]] = []
        OrthologGroups["group"][row[0]][row[5]].append(row[5])
        if row[1] not in OrthologGroups["uniprot"]:
            OrthologGroups["uniprot"][row[1]] = []
        OrthologGroups["uniprot"][row[1]].append(row[0])

UniprotData = {}
with open("../data/uniprot-yourlist%3AM2016062714483A1C7ED25EE8374758DF3FD545FD12D035E.tab")as f:
    reader = csv.reader(f, delimiter='\t')
    headers = next(reader)
    for row in reader:
        UniprotData[row[0]] = {
            "uniprotAC": row[0],
            "genename": (row[2] if row[2] != "" else row[1]),
            "locus": row[2],
            "organism": row[3],
            "taxid": row[4],
        }

SalmoNet = {"nodes": {}, "interactions": {}}
with open("../data/SalmoNet.csv") as f:
    reader = csv.reader(f, delimiter=';')
    headers = next(reader)
    for row in reader:
        if row[0] not in SalmoNet["nodes"]:
            SalmoNet["nodes"][row[0]] = {}
        if row[1] not in SalmoNet["nodes"]:
            SalmoNet["nodes"][row[0]] = {}
        i = "%s-%s" % (row[0],row[1])
        if i not in SalmoNet["interactions"]:
            SalmoNet["interactions"][i] = {
                "source": row[0],
                "target": row[1],
                "ref": row[2].split(","),
                "layer": row[3].split(",")
            }

for node in SalmoNet["nodes"]:
    if node in UniprotData:
        SalmoNet["nodes"][node] = UniprotData[node].copy()
    if node in OrthologGroups["uniprot"]:
        SalmoNet["nodes"][node]["og"] = OrthologGroups["uniprot"][node]

with open("test.json", "w") as f:
    json.dump(SalmoNet, f, indent=4)

