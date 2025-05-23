# 🧠 NeuroTap

**An interactive React app to test and improve your reaction time.**

NeuroTap challenges you to click or press a key as fast as possible when the screen turns green. Track your performance in real-time with an intuitive bar chart and adaptive difficulty designed to sharpen your reflexes.

---

## 🚀 Features

- 🖱️ Start and respond with a single click or keypress (Space / Enter)
- ⏱️ Randomized delay before the "Go!" signal for genuine reaction testing
- ⚡ Instant feedback showing reaction time in milliseconds
- 📊 Dynamic bar chart of your last 10 reaction times
- 📈 Adaptive difficulty based on your average reaction speed
- ♿ Keyboard accessible & screen reader friendly
- 🧩 Built with modern React hooks and a lightweight, responsive design

---

## 🛠 Getting Started

Run NeuroTap locally for development or testing:

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- (Optional) [Yarn](https://yarnpkg.com/) package manager

### 📦 Installation

```bash
git clone https://github.com/yourusername/neurotap.git
cd neurotap
npm install     # or yarn install
npm start       # or yarn start
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📁 Project Structure

| File | Description |
|------|-------------|
| `src/App.jsx` | Main component for UI & interactions |
| `src/useReactionTest.jsx` | Custom hook for game state & logic |
| `src/ReactionMessage.jsx` | Shows current prompt & reaction time |
| `src/ReactionChart.jsx` | Renders recent reaction time chart |
| `src/index.js` | Entry point for React app |

---

## 🎮 How to Play

1. Click or press **Space/Enter** to begin.
2. Wait for the **green screen** and "Click NOW!" prompt.
3. React as fast as you can!
4. See your results in real-time.
5. Press again to challenge yourself.

---

## 🛠 Customization & Extending

- 🔧 Modify delay logic in `useReactionTest.jsx` to adjust difficulty.
- 🎨 Enhance styles via `index.css` or a CSS framework.
- 💾 Add persistence with local storage or a backend.
- ♿ Improve accessibility for broader device support.
- 📈 Add analytics like average trends or personal bests.

---

## 📄 License

**MIT License** — free for personal and commercial use.

---

## 👤 Author

**Giuliano Ercole**
