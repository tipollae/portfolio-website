
async function rollingText(givenText, referenceID, solveInterval, changeTimeout, timeStamp = 0, currentIndex = 0){

    const element = document.getElementById(referenceID);
    const chars = "AaBbCcDdǟɖEeFfGgHhIiJjKkLɖǟֆɖlMmNnOoคŞ໓คŞ໓໓RrSsTtUuVvWwXxᏗᏕᎴᏗᏕᎴᎴYyZz";
    const INTERVAL = 90;

    let formed = givenText.slice(0, currentIndex);

    for (let i = currentIndex; i < givenText.length; i++){
        let randomChar = chars[Math.floor(Math.random()*chars.length)];
        formed += randomChar;
    }

    await wait(changeTimeout);
    timeStamp += 1;

    if (timeStamp >= solveInterval){
        currentIndex += 1;
        timeStamp = 0;
    }

    element.innerHTML = formed;
    if (currentIndex >= givenText.length){
        element.textContent = givenText;
        return;
    }
    return rollingText(givenText, referenceID, solveInterval, changeTimeout, timeStamp, currentIndex);

}

async function typingText(givenList, switchInterval, typingInterval, referenceID, currentIndex = 0){

    const element = document.getElementById(referenceID);
    let formed = "";
    element.innerHTML = "";

    for (let i = 0; i < givenList[currentIndex].length; i++){
        await wait(typingInterval);
        formed += givenList[currentIndex][i];
        element.innerHTML = formed;
    }

    currentIndex ++;
    if (currentIndex >= givenList.length){
        currentIndex = 0;
    }

    await wait(switchInterval);

    typingText(givenList, switchInterval, typingInterval, referenceID, currentIndex);

}

function wait(waitTime){

    return new Promise(resolve => {
        setTimeout(resolve, waitTime);
    })

}
