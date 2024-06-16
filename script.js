let score = 0;

function updateScore(points) {
    score += points;
    document.getElementById('score').innerText = score;
    showRewardMessage();
}

function showRewardMessage() {
    const rewardMessage = document.getElementById('rewardMessage');
    rewardMessage.classList.remove('hidden');
    setTimeout(() => {
        rewardMessage.classList.add('hidden');
    }, 2000);
}

function generateHypothesis() {
    const variable = document.getElementById('variable').value;
    const condition = document.getElementById('condition').value;
    if (variable && condition) {
        const hypothesis = `If ${variable}, then ${condition}.`;
        document.getElementById('hypothesisOutput').innerText = hypothesis;
        addToLog('hypothesisLog', hypothesis);
        animateOutput('hypothesisOutput');
        updateScore(10); // Award points for generating a hypothesis
    } else {
        alert('Please fill in both fields.');
    }
}

function generateQuestion() {
    const topic = document.getElementById('topic').value;
    if (topic) {
        const question = `What if ${topic}?`;
        document.getElementById('questionOutput').innerText = question;
        addToLog('questionLog', question);
        animateOutput('questionOutput');
        updateScore(10); // Award points for generating a question
    } else {
        alert('Please fill in the topic.');
    }
}

function addToLog(logId, text) {
    const log = document.getElementById(logId);
    const listItem = document.createElement('li');
    listItem.innerText = text;
    log.appendChild(listItem);
}

function animateOutput(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('points-added');
    setTimeout(() => {
        element.classList.remove('points-added');
    }, 500);
}
