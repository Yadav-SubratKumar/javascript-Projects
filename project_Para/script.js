const text = [
  "Debbie had taken George for granted for more than fifteen years now. He wasn't sure what exactly had made him choose this time and place to address the issue, but he decided that now was the time. He looked straight into her eyes and just as she was about to speak, turned away and walked out the door.",
  "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
  "She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.",
  "The drug seekers would come into the emergency room and scream about how much pain they were in. When you told them that you would start elevating their pain with Tylenol or Advil instead of a narcotic they became nasty and combative. They would start telling you what drug and dose they had to have to make their pain tolerable. After dealing with the same drug seekers several times a month it gets old. Some of the doctors would give in and give them a dose of morphine and send them away. Sure that was faster, but ethically she still couldn’t do it. Perhaps that’s why she had longer care times than the other doctors.",
  "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
  "There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time.",
  "It all started with the computer. Had he known what was to follow, he would have never logged on that day. But the truth was there was no way to know what was about to happen. So Dave pressed the start button, the computer booted up, the screen came alive, and everything Dave knew to be true no longer was.",
  "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
  "He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.",
];
const input = document.querySelector("input");
const container = document.querySelector("#container");

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const generate = () => {
    var localtext = shuffle(text);
    if (isNaN(input.value) || input.value > 9 || input.value < 0) {
        const randomIndex = Math.floor(Math.random() * localtext.length);
        container.innerHTML = `<p> ${text[randomIndex]} </p>`
    }
    else{
        const data = text.slice(0, input.value);

        const parars = data.map(
            (d) =>{
                return `<p> ${d} </p>`;
            }
        )

        container.innerHTML = parars.join("")
    }
};
