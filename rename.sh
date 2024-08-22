#!/bin/bash
# 处理文件名为小写并替换-为_

rename_files() {
  for file in "$1"/*; do
    if [ -d "$file" ]; then
      # 如果是目录，则递归调用
      rename_files "$file"
    else
      echo $file
      # 如果是文件，则处理文件名
      dir=$(dirname "$file")
      base=$(basename "$file")
      new_base=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr '-' '_')
      new_file="$dir/$new_base"
      if [ "$file" != "$new_file" ]; then
        mv "$file" "$new_file"
        echo "Renamed: $file -> $new_file"
      fi
    fi
  done
}

# 从当前目录开始处理
rename_files ./source/_posts/