let drawColor = "black";
let drawSize = 10;
let button, part, musSynth, env, filt, paintSound, env2, filt2, colorSynth, clearSynth;
let dragging = false;

function setup() {
  createCanvas(1250, 800);
  background(240);

  button = createElement("button", "Play Music");
  button.position(0, 600);
  button.mousePressed(() => {
    if (Tone.context.state !== "running") {
      Tone.start().then(() => {
        console.log("Context has started");
        Tone.Transport.start()
      })
    } else {
      Tone.Transport.start();
    }
  });
  Tone.Transport.timeSignature = [3, 4];
  Tone.Transport.bpm = 80;

  musSynth = new Tone.PolySynth().toDestination();

  part = new Tone.Part(((time, value) => {
    musSynth.triggerAttackRelease(value.note, value.dur, time);
  }),
  [ {time: 0, note: "G4", dur: "4n"},
    {time: "0:1", note: "A4", dur: "4n"},
    {time: "0:2", note: "B4", dur: "4n"},
    {time: "0:3", note: "E5", dur: "4n"},
    {time: "0:4", note: "F5", dur: "8n"},
    {time: "0:5", note: "C5", dur: "8n"},
    {time: "0:6", note: "B4", dur: "4n"},
    {time: "0:7", note: "A4", dur: "4n"},
    {time: "0:8", note: "G4", dur: "4n"},
    {time: "0:9", note: "F4", dur: "4n"},
    {time: "0:10", note: "E4", dur: "4n"},
    {time: "0:11", note: "F4", dur: "4n"},
  ]
).start();
part.loop = true;
part.loopEnd = "4m";

 env = new Tone.AmplitudeEnvelope({
  attack : 0.1 ,
  decay : 0.5 ,
  sustain: 0.1,
  release : 1
}).toDestination();
 filt = new Tone.Filter(300, "lowpass").connect(env);
 paintSound = new Tone.Noise("pink").start().connect(filt)

 filt2 = new Tone.Filter(100, "highpass").toDestination();
 colorSynth = new Tone.MetalSynth({
  envelope: {
    attack: 1,
    decay: 0.2,
    sustain: 1,
    release: 2
  }
 }).connect(filt2);

 clearSynth = new Tone.PolySynth().toDestination();

}


function mouseDragged() {
  if (mouseX > 50)
    { strokeWeight(drawSize);
      stroke(drawColor);
      line(pmouseX, pmouseY, mouseX, mouseY); 
      env.triggerAttackRelease(0.1);
      Tone.Transport.bpm.rampTo(200, 5);
    }
  }

function draw() {
  strokeWeight(5);
  stroke("black");
  fill("red");
  square(0, 0, 50);
  fill("orange");
  square(0, 50, 50);
  fill("yellow");
  square(0, 100, 50);
  fill("green");
  square(0, 150, 50);
  fill("cyan");
  square(0, 200, 50);
  fill("blue");
  square(0, 250, 50);
  fill("magenta");
  square(0, 300, 50);
  fill("pink");
  square(0, 350, 50);
  fill("brown");
  square(0, 400, 50);
  fill("white");
  square(0, 450, 50);
  fill("black");
  square(0, 500, 50);
  noStroke();
  textSize(20);
  text("  Press c to\nclear canvas", 0, 770)
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50)
  { drawColor = "red";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 51 && mouseY < 100)
  { drawColor = "orange";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 101 && mouseY < 150)
  { drawColor = "yellow";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 151 && mouseY < 200)
  { drawColor = "green";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 201 && mouseY < 250)
  { drawColor = "cyan";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 251 && mouseY < 300)
  { drawColor = "blue";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 301 && mouseY < 350)
  { drawColor = "magenta";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 351 && mouseY < 400)
  { drawColor = "pink";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 401 && mouseY < 450)
  { drawColor = "brown";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 451 && mouseY < 500)
  { drawColor = "white";}
  else if (mouseX > 0 && mouseX < 50 && mouseY > 501 && mouseY < 550)
  { drawColor = "black";}

  if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 550)
  { colorSynth.triggerAttackRelease("A4", 0.2);
  }
}

function keyPressed() {
  if (key === "c")
  { background(240);
    clearSynth.triggerAttackRelease("A3", 0.2);
  }
}

function mouseReleased() {
  if (dragging) {
    Tone.Transport.bpm.rampTo(80, 5);
  }
  dragging = false;
}