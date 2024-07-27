#!/bin/bash

read -p "Enter the start date (YYYY-MM-DD): " START_DATE
read -p "Enter the end date (YYYY-MM-DD): " END_DATE

SOURCE="/home/firstuser/feladat/devops_probafeladat/archive_folder/"
DESTINATION="/home/firstuser/feladat/devops_probafeladat/restored_files/"


START_TIMESTAMP=$(date -d "$START_DATE" +%s)
END_TIMESTAMP=$(date -d "$END_DATE" +%s)

if [ "$START_TIMESTAMP" -gt "$END_TIMESTAMP" ]; then
    echo "End date cannot be earlier than start date."
    exit 1
fi

for archive in "$SOURCE"/*.zip; do
    if [ -f "$archive" ]; then
        archive_name=$(basename "$archive" .zip)

        archive_date=$(echo "$archive_name" | grep -oP '\d{4}-\d{2}-\d{2}')

        if [ ! -z "$archive_date" ]; then
            archive_timestamp=$(date -d "$archive_date" +%s)

            if [ "$archive_timestamp" -ge "$START_TIMESTAMP" ] && [ "$archive_timestamp" -le "$END_TIMESTAMP" ]; then

                mkdir -p "$DESTINATION/$archive_name"
                unzip -q "$archive" -d "$DESTINATION/$archive_name"
                
                rm -f "$archive"
            fi
        fi
    fi
done