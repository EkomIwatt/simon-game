# Simon Game 🧠

A web-based implementation of the classic memory game "Simon," built with jQuery. This version features advanced gameplay mechanics including strict timing and persistent high scores.

## 🎮 How to Play

1. **Start:** Press any key on your keyboard to begin.
2. **Watch:** The game will signal a sequence of colors/sounds.
3. **Repeat:** Click the buttons to repeat the sequence exactly.
4. **Survive:** The sequence grows by one step after every successful round.

## ⚡ Special Rules

### The 5-Second Timer
Unlike standard versions, this game prevents hesitation.
* You have a **5-second limit** to press the next button in the sequence.
* The timer resets after every correct click.
* If the timer runs out, it is **Game Over**.

### High Score System
* The game uses `localStorage` to save your personal best.
* Your High Score will persist even if you refresh or close the browser.

## 🛠️ Built With
* HTML5
* CSS3
* JavaScript (jQuery)

## 🚀 How to Run
Simply open https://ekomiwatt.github.io/simon-game/ in your web browser.
