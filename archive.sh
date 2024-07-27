#!/bin/bash

SOURCE="/home/firstuser/feladat/devops_probafeladat/probafeladat_1_resz/"
DESTINATION="/home/firstuser/feladat/devops_probafeladat/archive_folder/"
S3_BUCKET="s3://archivescriptbuckettest/"

TODAY=$(date +%s)

for folder in "$SOURCE"/*/; do
  if [ -d "$folder" ]; then
    folder_name=$(basename "$folder")
    folder_date=$(echo "$folder_name" | grep -oP '\d{4}-\d{2}-\d{2} \d{2}-\d{2}')
    

    if [ ! -z "$folder_date" ]; then

      formatted_date=$(echo "$folder_date" | sed 's/\([0-9]\{2\}\)-\([0-9]\{2\}\)$/\1:\2/')
      folder_date_str=$(date -d "$formatted_date" +%s)
      age_days=$(( (TODAY - folder_date_str) / (60*60*24) ))
      
      if [ "$age_days" -gt 30 ]; then
        ZIP_PATH="$DESTINATION/$folder_name.zip"
        
        (cd "$folder" && zip -r "$ZIP_PATH" .)
        
        aws s3 cp "$ZIP_PATH" "$S3_BUCKET"
        rm -rf "$folder"
      fi
    fi
  fi
done
