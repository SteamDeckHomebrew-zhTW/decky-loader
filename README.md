<h1 align="center">
  <a name="logo" href="https://deckbrew.xyz/"><img src="https://deckbrew.xyz/logo.png" alt="Deckbrew logo" width="200"></a>
  <br>
  Decky Loader (繁體中文翻譯)
</h1>

<p align="center">
  <a href="https://github.com/SteamDeckHomebrew/decky-loader/releases"><img src="https://img.shields.io/github/downloads/SteamDeckHomebrew/decky-loader/total" /></a>
  <a href="https://github.com/SteamDeckHomebrew/decky-loader/stargazers"><img src="https://img.shields.io/github/stars/SteamDeckHomebrew/decky-loader" /></a>
  <a href="https://github.com/SteamDeckHomebrew/decky-loader/commits/main"><img src="https://img.shields.io/github/last-commit/SteamDeckHomebrew/decky-loader.svg" /></a>
  <a href="https://github.com/SteamDeckHomebrew/decky-loader/blob/main/LICENSE"><img src="https://img.shields.io/github/license/SteamDeckHomebrew/decky-loader" /></a>
  <a href="https://discord.gg/ZU74G2NJzk"><img src="https://img.shields.io/discord/960281551428522045?color=%235865F2&label=discord" /></a>
  <br>
  <br>
  <img src="https://media.discordapp.net/attachments/966017112244125756/1012466063893610506/main.jpg" alt="Decky screenshot" width="80%">
</p>

## 📖 關於

Decky Loader 是一個用於Steam Deck 的自製外掛程式啟動器。它可以用來[自訂你的選單風格](https://github.com/suchmememanyskill/SDH-CssLoader)，[改變系統音效](https://github.com/EMERALD0874/SDH-AudioLoader)，[調整你的螢幕飽和度](https://github.com/libvibrant/vibrantDeck)，[改變其他系統設定](https://github.com/NGnius/PowerTools)，以及[更多](https://beta.deckbrew.xyz/)。

關於 Decky Loader 的更多資訊和開發工具，請瀏覽[我們的wiki（英文）](https://deckbrew.xyz)。

### 🎨 功能

🧹 乾淨地注入和載入多個外掛程式。 
🔒 在系統更新和重啟之後仍保持安裝。 
🔗 允許外掛程式和載入器之間的雙向通信。 
🐍 支持從 TypeScript React 執行 Python 函數。 
🌐 允許外掛程式繞過 CORS 的調用限制。

### 🤔 常見問題

- Crankshaft 與 Decky Loader 不相容。如果你正在使用 Crankshaft，請在安裝 Decky Loader 之前解除安裝它。
- Syncthing 可能在 Steam Deck 上使用 8080 埠，而 Decky Loader 需要這個埠來執行。如果你把 Syncthing 作為一個服務使用，請把它的埠改成其他的。
- 如果你正在使用任何使用 1337 埠的軟體，請把它的埠改成其他的或者解除安裝它。

## 💾 安裝

1. 按下 <img src="./docs/images/light/steam.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/steam.svg#gh-light-mode-only" height=16> 按鈕，並打開設定選單。
1. 左側選擇「系統」，右側找到「系統設定」，然後將「啟用開發者模式」開啟。
1. 左側選擇「開發者」，右側找到「雜項」，然後將「CEF 遠端偵錯」開啟。
1. 選擇「立即重新啟動」讓修改生效。
1. 如果可能的話，準備一組鍵盤和滑鼠。
   - 鍵盤和滑鼠可以透過 USB-C 或藍牙連接到 Steam Deck。
   - 許多藍牙鍵盤和滑鼠的應用程式可用於 iOS 和 Android。
   - Steam Link 應用程式可在 [Windows](https://media.steampowered.com/steamlink/windows/latest/SteamLink.zip)、[macOS](https://apps.apple.com/us/app/steam-link/id1246969117) 和 [Linux](https://flathub.org/apps/details/com.valvesoftware.SteamLink) 上使用。它作為遠端桌面的替代品，效果很好。
   - 如果你沒有其他選擇，可以使用右側的觸控板作為滑鼠，並根據需要按 <img src="./docs/images/light/steam.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/steam.svg#gh-light-mode-only" height=16>+<img src="./docs/images/light/x.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/x.svg#gh-light-mode-only" height=16> 打開螢幕上的鍵盤。
1. 按下 <img src="./docs/images/light/steam.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/steam.svg#gh-light-mode-only" height=16> 按鈕，打開「電源」選單。
1. 選擇「切換至桌面」。
1. （如果你已經建立了管理員密碼，可以跳過這一步。）點左下角開始，左側選擇「設定」，右側打開「系統設定」。左側選擇「Users」(使用者)，右側選擇「Change Password」，兩個輸入框內輸入相同的密碼，然後選擇「Set Password」。
1. 選擇你要安裝的 Decky Loader 的版本，並將以下指令貼到 Konsole 應用程式中(程式右上角有 Paste 貼上按鈕)，然後按下鍵盤的 Enter。
   - **最新正式版**  
     為大多數使用者準備的。這是 Decky Loader 的最新穩定版本。
     `curl -L https://github.com/SteamDeckHomebrew-zhTW/decky-loader/raw/main/dist/install_release.sh | sh`
   - **最新先行版**  
     為外掛程式開發者準備的。先行版不太可能是完全穩定的，但包含最新的變化。關於外掛程式開發的更多資訊，請查閱[wiki頁面（英文）](https://deckbrew.xyz/en/loader-dev/development).
     `curl -L https://github.com/SteamDeckHomebrew-zhTW/decky-loader/raw/main/dist/install_prerelease.sh | sh`
1. 打開桌面上「Return to Gaming Mode」捷徑。

### 👋 解除安裝

We are sorry to see you go! If you are considering uninstalling because you are having issues, please consider [opening an issue](https://github.com/SteamDeckHomebrew-zhTW/decky-loader/issues) or [joining our Discord](https://discord.gg/ZU74G2NJzk) so we can help you and other users.

1. Press the <img src="./docs/images/light/steam.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/steam.svg#gh-light-mode-only" height=16> button and open the Power menu.
1. Select "Switch to Desktop".
1. Open the Konsole app and run `curl -L https://github.com/SteamDeckHomebrew-zhTW/decky-loader/raw/main/dist/uninstall.sh | sh`.

## 🚀 開始使用

現在你已經安裝了 Decky Loader，你可以開始使用外掛程式。每個外掛程式都是由不同的開發者維護的，有各自的用途，但大多數都遵循下面概述的一般結構。

### 📦 外掛程式

1. 按下 <img src="./docs/images/light/qam.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/qam.svg#gh-light-mode-only" height=16> 按鈕然後切換到 <img src="./docs/images/light/plug.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/plug.svg#gh-light-mode-only" height=16> 圖示。這是 Decky 選單，用於控制外掛程式和載入器。
1. 選擇 <img src="./docs/images/light/store.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/store.svg#gh-light-mode-only" height=16> 圖示開啟外掛程式瀏覽器。在這裡你可以尋找並安裝外掛程式。
   - 你也可以從設定選單中的 URL 安裝。我們不建議從不受信任的來源安裝外掛程式。
1. 要安裝一個外掛程式，選擇你想要的外掛程式上的「安裝」按鈕。你也可以從下拉選單中選擇一個舊版本，但不建議這樣做。
1. 要更新、移除和重新載入外掛程式，請打開 Decky 選單並選擇 <img src="./docs/images/light/gear.svg#gh-dark-mode-only" height=16><img src="./docs/images/dark/gear.svg#gh-light-mode-only" height=16> 圖示。
   - 請記住，移除一個外掛程式只會刪除其外掛程式的本體，而不是它可能建立的任何其他文件。

### 🛠️ 外掛程式開發

There is no complete plugin development documentation yet. However a good starting point is the [plugin template repository](https://github.com/SteamDeckHomebrew/decky-plugin-template). Consider [joining our Discord](https://discord.gg/ZU74G2NJzk) if you have any questions.

### 🤝 Contributing

Please consult [the wiki page regarding development](https://deckbrew.xyz/en/loader-dev/development) for more information on installing development versions of Decky Loader. You can also install the Steam Deck UI on a Windows or Linux computer for testing by following [this YouTube guide](https://youtu.be/1IAbZte8e7E?t=112).

1. Clone the repository using the latest commit to main before starting your PR.
1. In your clone of the repository, run these commands.
   ```bash
   pnpm i
   pnpm run build
   ```
1. If you are modifying the UI, these commands will need to be run before deploying the changes to your Steam Deck.
1. Use the VS Code tasks or `deck.sh` script to deploy your changes to your Steam Deck to test them.
1. You will be testing your changes with the Python script version. You will need to build, deploy, and reload each time.

⚠️ If you are recieving build errors due to an out of date library, you should run this command inside of your repository.

```bash
pnpm update decky-frontend-lib --latest
```

Source control and deploying plugins are left to each respective contributor for the cloned repos in order to keep dependencies up to date.

## 📜 Credits

The original idea for the plugin loader concept is based on the work of [marios8543's Steam Deck UI Inject project](https://github.com/marios8543/steamdeck-ui-inject).
