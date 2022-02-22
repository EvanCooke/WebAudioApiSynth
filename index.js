// object whichs gives access to all other objects and classes to make audio
const audioContext = new AudioContext();

// aduio buffer with sample rate passed in
// print sample rate: console.log(audioContext.sampleRate)
const buffer = audioContext.createBuffer()
	1. // 1 channel (mono auido)
	audioContext.sampleRate * 1 // # of samples in entire buffer = sample rate * seconds in sample
	audioContext.sampleRate // pass in sample rate of buffer