let samples, sampler, button1, button2, button3, button4,
 button5, chebySlider, distortionSlider, crushSlider;

let cheby = new Tone.Chebyshev(1).toDestination();
let dist = new Tone.Distortion(0).connect(cheby);
let crusher = new Tone.BitCrusher(16).connect(dist);


function preload() {
  samples = new Tone.Players({
    bark: "media/bark.mp3",
    croc: "media/croc.mp3",
    cuckoo: "media/cuckoo.mp3",
    eagle: "media/eagle.mp3",
    honk: "media/honk.mp3"
  }).connect(crusher);
}

function setup() {
  createCanvas(400, 400);
  button1 = createButton("Play bark sample");
  button1.position(10, 50);
  button2 = createButton("Play croc sample");
  button2.position(10, 100);
  button3 = createButton("Play cuckoo sample");
  button3.position(10, 150);
  button4 = createButton("Play eagle sample");
  button4.position(10, 200);
  button5 = createButton("Play honk sample");
  button5.position(10, 250);

  button1.mousePressed(() => {samples.player("bark").start()})
  button2.mousePressed(() => {samples.player("croc").start()})
  button3.mousePressed(() => {samples.player("cuckoo").start()})
  button4.mousePressed(() => {samples.player("eagle").start()})
  button5.mousePressed(() => {samples.player("honk").start()})

  chebySlider = createSlider(1, 100, 1, 0);
  chebySlider.position(200, 100);
  chebySlider.input(() => {cheby.order.value = chebySlider.value()});

  distortionSlider = createSlider(0, 10, 0, 0.01);
  distortionSlider.position(200, 200);
  distortionSlider.input(() => {dist.distortion = distortionSlider.value()});

  crushSlider = createSlider(1, 16, 16, 1);
  crushSlider.position(200, 300);
  crushSlider.input(() => {crusher.bits.value = crushSlider.value()});
}

function draw() {
  background(220);
  text("Cheby Slider: " + chebySlider.value(), 225, 125);
  text("Distortion Slider: " + distortionSlider.value(), 225, 225);
  text("Bitcrush Slider: " + crushSlider.value(), 225, 325);


}
