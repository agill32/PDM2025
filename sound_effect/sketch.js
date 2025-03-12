let wave, noise, filt, env, vals;
let tin = 0;

function preload()
{ wave = loadImage("wave.png"); }

function setup() {
  createCanvas(400, 400);

  filt = new Tone.Filter(150, "lowpass", -12).toDestination();
  env = new Tone.AmplitudeEnvelope({
    attack: 1,
    decay: 5,
    sustain: 1,
    release: 3
  }).connect(filt);
  noise = new Tone.Noise("white").connect(env).start();
  vals = new Float32Array([-50, -30, -10, 0, 4, 0, 1, 3, 7, 5, 0, 0, 5, 7, 5, 0, -6, -10, -35]);
}

function draw() {
  background(220);
  tint(255, tin);
  image(wave, 0, 0, 400, 400)
}

function mouseClicked()
{ tin = 255;
  startAudioContext();
  env.triggerAttackRelease(15);
  noise.volume.setValueCurveAtTime(vals, Tone.now(), 15);
}

function startAudioContext() {
  if (Tone.context.state != 'running') {
    Tone.start();
    console.log("Audio Context Started")
  } else 
  { console.log("Audio Context is already running") } 
 }
