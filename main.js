function isVowel(char) {
  return ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"].includes(
    char
  );
}
function isDigit(char) {
  return /^\d$/.test(char);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
String.prototype.splice = function (start, delCount, newSubStr) {
  return (
    this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
  );
};

class GameHelp {
  constructor() {
    this._gameOpts = Object.values(document.querySelector("#__nuxt"))[0][
      "_scope"
    ]["effects"][3]["deps"][0]["subs"][1]["vm"]["_scope"]["effects"][0][
      "deps"
    ][1]["subs"][0]["vm"]["$options"]["parent"]["$store"]["$router"]["history"][
      "current"
    ]["matched"][0]["instances"].default["_scope"]["effects"][0]["deps"][0][
      "subs"
    ]["2"]["deps"][14]["subs"][0]["vm"];
  }
  get currentCaptcha() {
    return this._gameOpts.currCaptcha;
  }

  set currentCaptcha(val) {
    this._gameOpts.currCaptcha = val;
  }
  refreshCaptcha() {
    this._gameOpts.refreshCaptcha();
  }
  refreshRules() {
    let passBox = document.querySelector(".password-box .ProseMirror p");
    if (!passBox) {
      document
        .querySelector(".password-box .ProseMirror p")
        .insertAdjacentHTML(
          "beforeend",
          '<span style="font-family: Monospace; font-size: 28px">ddd</span>'
        );
      passBox = document.querySelector(".password-box span");
    }
    passBox.textContent = passBox.textContent + "";
  }
  get geoloc() {
    return this._gameOpts.currPlace.title;
  }
  // Only if he hasn't hatched yet
  stopPaulEating() {
    this._gameOpts.eatBug = function () {};
    this._gameOpts.paulHatched = false;
    this._gameOpts.paulEating = false;
  }
  stopPaulHatching() {
    this._gameOpts.hatchEgg = function () {};
  }
  unlockRules(ind) {
    this._gameOpts.ruleReached = ind;
  }

  completeRules() {
    for (let i = 0; i < this._gameOpts.ruleReached; i++) {
      this._gameOpts.rules[i].test = function () {
        return { isValid: true };
      };
    }
  }

  completeRule(ind) {
    this._gameOpts.rules[
      ind - 1 < this._gameOpts.ruleReached
        ? ind - 1
        : this._gameOpts.ruleReached
    ].test = function () {
      return { isValid: true };
    };
  }
  get fen() {
    return this?.gameOpts?.ChessHelper?.fen() || "Chess board not visible";
  }
  stopFireStarting() {
    this._gameOpts.startFire = function () {};
  }
  set hex(color) {
    this._gameOpts.randomColor = color;
  }
  get hex() {
    return this._gameOpts.randomColor;
  }
  refreshColor() {
    this._gameOpts.refreshColor();
  }
  get wordleAnswer() {
    return this._gameOpts.wordleAnswer;
  }
  set wordleAnswer(answer) {
    this._gameOpts.wordleAnswer = answer;
  }
  triggerDeath() {
    this._gameOpts.triggerDeathAnimation();
  }
  enterFinalStage() {
    this._gameOpts.setComplete();
  }
  completeGame() {
    this._gameOpts.setComplete();
    this._gameOpts.passwordsMatch = true;
  }
  set youtubeDuration(seconds) {
    this._gameOpts.randomYoutubeDuration = seconds;
  }
  get youtubeDuration() {
    return this._gameOpts.randomYoutubeDuration;
  }
  finalQuestion() {
    this._gameOpts.eatBug = function () {};
    this._gameOpts.ruleReached = 35;
    for (let i = 0; i < this._gameOpts.ruleReached; i++) {
      this._gameOpts.rules[i].test = function () {
        return { isValid: true };
      };
    }
  }
  get sacraficedLetters() {
    return this._gameOpts.sacraficedLetters;
  }
  set sacraficedLetters(arr) {
    this._gameOpts.sacraficedLetters = arr;
  }
  removeSacraficedLetters() {
    this._gameOpts.sacraficedLetters = [
      "ffeeuwowofpqwpefmemfii2ff1f93030--a[=[q[['''``[1212o",
      "ifmimi398329q-wpsd'dw'dpp3k4nnfnsc sjkkxssiduu3i47eujdusiso",
    ];
  }
  getMoonPhases() {
    return "🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌑";
  }
  typeFinalPassword() {
    const finalBox = document.querySelector(".password-final");
    if (!finalBox) return;
    const html = finalBox.innerHTML;
    const innerBox = document.querySelector(".password-box-inner .ProseMirror");
    innerBox.innerHTML = "";
    innerBox.insertAdjacentHTML("afterbegin", html);
  }
  get finalPasswordSelectable() {
    const finalBox = document.querySelector(".password-final");
    if (!finalBox) return;
    return finalBox.style.userSelect === "auto" ? true : false;
  }
  set finalPasswordSelectable(flag) {
    // true or false
    const finalBox = document.querySelector(".password-final");
    if (!finalBox) return;
    if (flag) {
      finalBox.style.userSelect = "auto";
      finalBox.style["-webkit-user-select"] = "auto";
      finalBox.style["-moz-user-select"] = "auto";
      finalBox.style.pointerEvents = "auto";
    } else {
      finalBox.style.userSelect = "none";
      finalBox.style["-webkit-user-select"] = "none";
      finalBox.style["-moz-user-select"] = "none";
      finalBox.style.pointerEvents = "none";
    }
  }
  getTotalSum() {
    return [...this._gameOpts.password].reduce(
      (acc, val) => (isFinite(val) ? acc + Number(val) : acc),
      0
    );
  }

  showAllButtons() {
    this._gameOpts.showBold = true;
    this._gameOpts.showItalic = true;
    this._gameOpts.showFont = true;
    this._gameOpts.showFontSize = true;
    this._gameOpts.showToolbar = true;
  }
  hideAllButtons() {
    this._gameOpts.showToolbar = false;
  }
  get passwordLength() {
    return this._gameOpts.password.length;
  }
  bestChessMove() {
    return new Promise((resolve, reject) => {
      const opts = this._gameOpts;

      let oldContent;
      let move;
      let passBox = document.querySelector(".password-box .ProseMirror p");
      if (this._gameOpts.ruleReached >= 16) {
        // Step 1: Store a reference to the original function
        const originalFunction = this._gameOpts.rules[15].test;

        // Step 2: Create a wrapper function that logs the arguments and invokes the original function
        this._gameOpts.rules[15].test = function () {
          // Step 3: Log the arguments
          move = arguments[1].currChessPuzzle.sol;
          opts.rules[15].test = originalFunction;
          passBox.textContent = oldContent;
          // Step 4: Invoke the original function with the same context and arguments

          return originalFunction.apply(this, arguments);
        };

        if (!passBox) {
          document
            .querySelector(".password-box .ProseMirror p")
            .insertAdjacentHTML(
              "beforeend",
              '<span style="font-family: Monospace; font-size: 28px">ddd</span>'
            );
          passBox = document.querySelector(".password-box span");
        }
        oldContent = passBox.textContent;
        passBox.textContent = passBox.textContent + " ";

        const ti = setInterval(function () {
          if (move) {
            resolve(move);
            clearInterval(ti);
          }
        }, 5);
      } else {
        resolve("Chess board not visible");
      }
    });
  }
  get normalPassword() {
    return this._gameOpts.password;
  }

  // 🐔  🐛
  feedPaul() {
    this.paulTimer = setInterval(
      function () {
        const password = this._gameOpts.password;
        const passwordHasChicken = [...password].includes("🐔");
        if (passwordHasChicken) {
          const lineIndex = [
            ...document.querySelectorAll(".password-box .ProseMirror p"),
          ].findIndex((line) => line.textContent.includes("🐔"));
          const currLine = document.querySelectorAll(
            ".password-box .ProseMirror p"
          )[lineIndex];
          const food = [...currLine.textContent].reduce(
            (acc, char) => (char === "🐛" ? acc + 1 : acc),
            0
          );
          const index = [...currLine.textContent].findIndex(
            (char) => char === "🐔"
          );
          if (food >= 3) return;

          const text2 = currLine.textContent.splice(index + 2, 0, "🐛");
          document.querySelectorAll(".password-box .ProseMirror p")[
            lineIndex
          ].textContent = text2;
        }
      }.bind(this),
      5
    );
  }
  stopFeeding() {
    if (this.paulTimer) {
      clearInterval(this.paulTimer);
    }
  }
  boldVowels() {
    const container = document.querySelector(".ProseMirror");
    const paragraphs = container.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
      const textNodes = [...paragraph.childNodes];

      textNodes.forEach((node) => {
        if (node.tagName !== "STRONG") {
          const textContent = node.textContent;
          const wrapper = document.createElement("span");

          for (let i = 0; i < textContent.length; i++) {
            const char = textContent.charAt(i);

            if (isVowel(char)) {
              const strongElement = document.createElement("strong");
              strongElement.textContent = char;
              wrapper.appendChild(strongElement);
            } else {
              // Do this to leave all non vowels unchanged
              const textNode = document.createTextNode(char);
              wrapper.appendChild(textNode);
            }
          }
          // replacing the line with the contents of wrapper.
          paragraph.replaceChild(wrapper, node);
        }
      });
    });
  }
  squareFontSizes() {
    const container = document.querySelector(".ProseMirror");
    const paragraphs = container.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
      const textNodes = paragraph.childNodes;

      textNodes.forEach((node) => {
        const textContent = node.textContent;
        const wrapper = document.createElement("span");

        for (let i = 0; i < textContent.length; i++) {
          const char = textContent.charAt(i);

          if (isDigit(char)) {
            const digitSize = Math.pow(parseInt(char), 2); // Calculate the square of the digit
            const digitElement = document.createElement("span");
            digitElement.style.fontSize = `${digitSize}px`; // Set the font size to the square value
            digitElement.textContent = char;
            wrapper.appendChild(digitElement);
          } else {
            const textNode = document.createTextNode(char);
            wrapper.appendChild(textNode);
          }
        }

        paragraph.replaceChild(wrapper, node);
      });
    });
    this._gameOpts.showFontSize = true;
    document.querySelectorAll("select")[0].value = "28px";
  }
  get currentTime() {
    return new Date()
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: !0,
      })
      .split(" ")[0];
  }
  set currentTime(time) {
    Date.prototype.toLocaleString = function () {
      return `${time}`;
    };
  }
  // Youtube duration can be 1 second less or more than what is asked for
  async getYoutubeLink(duration) {
    const res = await fetch(
      "https://raw.githubusercontent.com/RoadRunnerNick/The-password-game-cheats/main/data.json"
    );
    const data = await res.text();
    return JSON.parse(data)[duration] || "No link found for that duration";
  }
}

const interface = new GameHelp();
