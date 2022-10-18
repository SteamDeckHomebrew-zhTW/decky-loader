#!/usr/bin/env bash
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]:-$0}"; )" &> /dev/null && pwd 2> /dev/null; )";
# printf "${SCRIPT_DIR}\n"
# printf "$(dirname $0)\n"
if ! [[ -e "${SCRIPT_DIR}/settings.json" ]]; then 
     printf '.vscode/settings.json 檔案不存在。請使用預設設定來建立此檔案，然後退出再重新執行你的任務。\n\n'
     cp "${SCRIPT_DIR}/defsettings.json" "${SCRIPT_DIR}/settings.json"
     exit 1
else
    printf '.vscode/settings.json 檔案存在，恭喜！\n'
    printf '請確認 settings.json 符合你的 deck。\n'
fi