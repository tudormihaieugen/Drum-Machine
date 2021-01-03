function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const samples = [
{
  label: 'Q',
  string: 'Chord-1',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  icon: 'fab fa-itunes-note'
},
{
  label: 'W',
  string: 'Chord-2',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  icon: 'fab fa-itunes-note'
},
{
  label: 'E',
  string: 'Chord-3',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  icon: 'fab fa-itunes-note'
},
{
  label: 'R',
  string: 'Give us a light',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  icon: 'fab fa-itunes-note'
},
{
  label: 'A',
  string: 'Heater-1',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  icon: 'fas fa-compact-disc'
},
{
  label: 'S',
  string: 'Heater-2',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  icon: 'fas fa-compact-disc'
},
{
  label: 'D',
  string: 'Heater-3',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  icon: 'fas fa-compact-disc'
},
{
  label: 'F',
  string: 'Heater-6',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  icon: 'fas fa-compact-disc'
},
{
  label: 'Z',
  string: 'Brk-Snr',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  icon: 'fas fa-drum'
},
{
  label: 'X',
  string: 'Punchy-kick-1',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  icon: 'fas fa-drum'
},
{
  label: 'C',
  string: 'Side-stick-1',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  icon: 'fas fa-drum'
},
{
  label: 'V',
  string: 'Dry-0',
  link: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  icon: 'fas fa-drum'
}
];

function Machine() {
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine", className: "drum-board col-xs-12 col-sm-6 col-md-4 rounded p-1 my-auto" }, /*#__PURE__*/
    React.createElement("div", { id: "display", className: "display col-11 mx-auto my-2" }, "Display"), /*#__PURE__*/
    React.createElement("div", { className: "drum-buttons col-xs-12 row row-cols-5 m-auto rounded d-flex justify-content-center" },
    samples.map((item, idx) => /*#__PURE__*/
    React.createElement(Pad, { letter: item.label, key: idx, audio: item.link, str: item.string })))));
}

class Pad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",

    event => {
      const id = event.key.toUpperCase();
      const audio = document.getElementById(id);

      if (audio && this.props.letter == id) {
        this.playSound();
        audio.parentNode.classList.add('active');
        audio.onended = () => {
          audio.parentNode.classList.remove('active');
        };
      }

    });_defineProperty(this, "playSound",
    () => {
      this.audio.current.currentTime = 0;
      this.audio.current.play();

      display.innerText = this.props.str;

    });this.audio = React.createRef();}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyPress);}

  render() {
    const { letter, audio, str, symbol } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad btn btn-primary m-1 d-flex row row-cols-1 p-0",
        type: "button",
        onClick: this.playSound,
        id: `pad-${letter}` }, /*#__PURE__*/
      React.createElement("div", { className: "in-btn-up" }, letter), /*#__PURE__*/
      React.createElement("div", { className: "mb-0 rounded-bottom d-flex justify-content-center p-1" }), /*#__PURE__*/

      React.createElement("audio", { ref: this.audio, src: audio, id: letter, name: str, className: "clip" })));
  }}

ReactDOM.render( /*#__PURE__*/
React.createElement(Machine, null),
document.getElementById('space'));
