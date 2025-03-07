let polySynth, freqSlider, freq;

let keys = {
'a' : 'C3',
's' : 'D3',
'd' : 'E3',
'f' : 'F3',
'g' : 'G3',
'h' : 'A3',
'j' : 'B3',
'k' : 'C4',
'l' : 'D4',
}

function setup() {
  createCanvas(400, 400);
  freq = new Tone.FrequencyShifter(1).toDestination();
  polySynth = new Tone.PolySynth(Tone.Synth).connect(freq);

  freqSlider = createSlider(0, 100, 1, 0.01);
  freqSlider.position(125, 130);
  freqSlider.input(() => {freq.frequency.value = freqSlider.value()});
}

function draw() {
  background(220);
  textSize(20);
  text("Keys a-l play polyphonic\n  synth from C3 to D4", 85, 25);

  text("Frequency\n Shifter: " + freqSlider.value(), 150, 100);
}

function keyPressed() {
  let pitch = keys[key];
  polySynth.triggerAttack(pitch);
}

function keyReleased() {
  let pitch = keys[key];
  polySynth.triggerRelease(pitch);
}