const CHARACTER_1_ART = `      .---.
     / __ /\\
    | /  \\ |
    \\| . . |/
    (   _\\  )
     |  -  |
     \\  .  /
     |'---'|
    /'. _ .'\\
 .-\`-._|_|_.-\`-.
/\`    \\   /     \``;

const CHARACTER_2_ART = `       .---.
     /\` ___|\`\\
     |_/    \\|
     (  -/-  )
      \\_ - _/
     .-'|_|'-. 
    /         \\
   /     O     \\
  / _____!_____ \\
 /.-------------.\\`;

const script = [
  {
    speaker: 'character 2',
    text: 'Hey, placeholder hero. Which response do you want to test?',
    options: [
      {
        label: 'Ask about the mission',
        reply: 'The mission is simple: this text appears one character at a time.',
      },
      {
        label: 'Ask for a joke',
        reply: 'I tried to hide in a snowstorm, but everyone said I was too visible.',
      },
    ],
  },
  {
    speaker: 'character 2',
    text: 'Nice. Want one more placeholder line?',
    options: [
      {
        label: 'Give me a dramatic line',
        reply: 'When the stars blink, I blink back... one letter at a time.',
      },
      {
        label: 'Wrap this demo up',
        reply: 'Demo complete. Replace these lines with your real conversation next.',
      },
    ],
  },
];

const speakerLabel = document.getElementById('speakerLabel');
const characterArt = document.getElementById('characterArt');
const dialogueText = document.getElementById('dialogueText');
const optionsContainer = document.getElementById('options');

let currentStep = 0;
let typingTimer = null;

function showCharacter2Step() {
  const step = script[currentStep];
  speakerLabel.textContent = step.speaker + ':';
  characterArt.textContent = CHARACTER_2_ART;
  dialogueText.textContent = step.text;
  optionsContainer.innerHTML = '';

  step.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option.label;
    button.addEventListener('click', () => {
      showCharacter1Reply(option.reply);
    });
    optionsContainer.appendChild(button);
  });
}

function showCharacter1Reply(replyText) {
  speakerLabel.textContent = 'character 1:';
  characterArt.textContent = CHARACTER_1_ART;
  dialogueText.textContent = '';
  optionsContainer.innerHTML = '';

  typeText(replyText, 26, () => {
    if (currentStep < script.length - 1) {
      const continueButton = document.createElement('button');
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', () => {
        currentStep += 1;
        showCharacter2Step();
      });
      optionsContainer.appendChild(continueButton);
      return;
    }

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Conversation';
    restartButton.addEventListener('click', () => {
      currentStep = 0;
      showCharacter2Step();
    });
    optionsContainer.appendChild(restartButton);
  });
}

function typeText(text, speed, done) {
  let charIndex = 0;
  clearInterval(typingTimer);

  typingTimer = setInterval(() => {
    dialogueText.textContent += text[charIndex];
    charIndex += 1;

    if (charIndex >= text.length) {
      clearInterval(typingTimer);
      done();
    }
  }, speed);
}

showCharacter2Step();
