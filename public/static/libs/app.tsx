/*
  app.tsx

  Primary script for front-facing web application functionality.
*/

const React = require('react');
const ReactDOM = require('react-dom');

const shownWindowInitial = {
  display: "block",
  visibility: "visible",
  pointerEvents: "auto",
  overflow: "hidden",
}

const hiddenWindowInitial = {
  display: "none",
  visibility: "hidden",
  pointerEvents: "none",
  overflow: "hidden",
}

export class App extends React.Component {

  state = {
    overviewStyle: shownWindowInitial,
    homeAutomationStyle: hiddenWindowInitial,
    aiAssistantStyle: hiddenWindowInitial,
    cloudAiServerStyle: hiddenWindowInitial,
    contactStyle: hiddenWindowInitial,
    
  };

  constructor(){
    super();
  }

  // Executed only once upon startup.
  componentDidMount(){
  }

  // Show the 1st tool (submission) and hide all others. 
  showPage(evt) {
    var pageName = evt.target.className.toLowerCase()

    if(pageName == "overview"){
      this.setState({
        overviewStyle : Object.assign({}, shownWindowInitial),
        homeAutomationStyle: Object.assign({}, hiddenWindowInitial),
        aiAssistantStyle: Object.assign({}, hiddenWindowInitial),
        cloudAiServerStyle: Object.assign({}, hiddenWindowInitial),
        contactStyle: Object.assign({}, hiddenWindowInitial),
      });
    }
    else if(pageName == "home automation"){
      this.setState({
        overviewStyle : Object.assign({}, hiddenWindowInitial),
        homeAutomationStyle: Object.assign({}, shownWindowInitial),
        aiAssistantStyle: Object.assign({}, hiddenWindowInitial),
        cloudAiServerStyle: Object.assign({}, hiddenWindowInitial),
        contactStyle: Object.assign({}, hiddenWindowInitial),
      });
    }
    else if(pageName == "ai assistant"){
      this.setState({
        overviewStyle : Object.assign({}, hiddenWindowInitial),
        homeAutomationStyle: Object.assign({}, hiddenWindowInitial),
        aiAssistantStyle: Object.assign({}, shownWindowInitial),
        cloudAiServerStyle: Object.assign({}, hiddenWindowInitial),
        contactStyle: Object.assign({}, hiddenWindowInitial),
      });
    }
    else if(pageName == "cloud ai server"){
      this.setState({
        overviewStyle : Object.assign({}, hiddenWindowInitial),
        homeAutomationStyle: Object.assign({}, hiddenWindowInitial),
        aiAssistantStyle: Object.assign({}, hiddenWindowInitial),
        cloudAiServerStyle: Object.assign({}, shownWindowInitial),
        contactStyle: Object.assign({}, hiddenWindowInitial),
      });
    }
    else if(pageName == "contact"){
      this.setState({
        overviewStyle : Object.assign({}, hiddenWindowInitial),
        homeAutomationStyle: Object.assign({}, hiddenWindowInitial),
        aiAssistantStyle: Object.assign({}, hiddenWindowInitial),
        cloudAiServerStyle: Object.assign({}, hiddenWindowInitial),
        contactStyle: Object.assign({}, shownWindowInitial),
      });
    }
    else{
      console.log(`[ERROR] Logic error with showPage. Unknown pagename: ${pageName}`)
    }
    this.scrollToTop();
  }

  scrollToTop = () => {
    this.endOfPage.scrollIntoView({ behavior: "auto" });
  }

  render() {
    return (
      <div>

        <div id="content">
          <div id="contentInner">

            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.endOfPage = el; }}>
            </div>

            <div id="dummyHeader">
              <div id="dummyHeaderInner">
                <div id="dummyTitleOuter">
                  <div id="dummyTitle"><i><b>Hobby Automation</b></i></div>
                  <div id="dummySubtitle"><i><b>AI Augmented Software</b></i></div>
                </div>
                <div id="dummyContentLinks">
                  Overview | Home Automation | AI Assistant | Cloud AI Server | Contact
                </div>
              </div>

              <div id="dummyHeaderStrip">

              </div>
            </div>

            <div id="contentPages">

              <div id="overview" style={this.state.overviewStyle}>

                <div id="overviewTitle">
                  <b>Home Automation and AI Assistant Suite</b>
                </div>
                <div id="overviewSubtitle">
                  Complete Online Guide
                </div>

                <div id="overviewImage">
                  <img id="overviewImageImg" src={require("../../../assets/overview.png").default}/>
                </div>

                <hr/>

                <div id="overviewNavigationOuter">
                  <div id="overviewNavigation" className="home automation" onClick={evt => this.showPage(evt)}>
                    <div id="overviewNavigationTitle" className="home automation" onClick={evt => this.showPage(evt)}>
                      <b>Home Automation</b>
                      <hr id="overviewNavigationLine"/>
                    </div>
                    <img id="overviewNavigationImage" className="home automation" onClick={evt => this.showPage(evt)} src={require("../../../assets/overviewHomeAutomation.png").default}/>
                  </div>
                  <div id="overviewNavigation" className="ai assistant" onClick={evt => this.showPage(evt)}>
                    <div id="overviewNavigationTitle" className="ai assistant" onClick={evt => this.showPage(evt)}>
                    <b>AI Assistant</b>
                    <hr id="overviewNavigationLine"/>
                    </div>
                    <img id="overviewNavigationImage" className="ai assistant" onClick={evt => this.showPage(evt)} src={require("../../../assets/overviewAiAssistant.png").default}/>
                  </div>
                  <div id="overviewNavigation" className="cloud ai server" onClick={evt => this.showPage(evt)}>
                    <div id="overviewNavigationTitle" className="cloud ai server" onClick={evt => this.showPage(evt)}>
                    <b>Cloud AI Server</b>
                    <hr id="overviewNavigationLine"/>
                    </div>
                    <img id="overviewNavigationImage" className="cloud ai server" onClick={evt => this.showPage(evt)} src={require("../../../assets/overviewCloudAiServer.png").default}/>
                  </div>
                </div>
                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    DIY Home Automation and AI
                  </h2>

                  <br/>

                  <div>
                    While sophisticated commercial home automation products have become increasingly common, software and hardware enthusiasts may find them limiting and instead favor DIY solutions.
                  </div>

                  <br/>

                  <div>
                    This project, which started as a small DIY home automation server, has grown rapidly over the course of a year to include not only a wide variety of home automation features, but also an AI Assistant with Machine Learning capabilities such as hotword detection, voice commands, multispeaker synthesis, and emotion detection.
                  </div>

                  <br/>

                  <div>
                    This website was created for hobbyist enthusiasts interested in both hobby electronics as well as software engineering - potentially including Artificial Intelligence and Machine Learning. 

                    System details are provided here to: 
                    
                    <ul>
                      <li>Aid users adapting the software for their own needs</li>
                      <li>Showcase an example architecture for inspiration of original products</li>
                    </ul>
                  </div>
                </div>

                <hr/>

                <div id="overviewDiagram">
                  <div id="overviewNavigationTitle">
                    <b>System Infrastructure Overview</b>
                    <hr id="overviewNavigationLine"/>
                  </div>
                  <img id="overviewDiagramImg" src={require("../../../assets/overviewDiagram.png").default}/>
                </div>

                <hr/>

                <div id="featuresText">
                  <div id="featuresHomeAutomation">
                    <h2 id="overviewTextHeader">
                      Home Automation Features
                    </h2>

                    <br/>

                    <ul>
                      <li><b>Arduino Microcontroller Firmware</b>
                        <ul>
                          <li>Singular firmware file for all controllers</li>
                          <li>Server-sent pinout info - no Arduino configuration necessary</li>
                          <li>Robust connection logic with auto-reconnect</li>
                          <li>Requires WiFi-capable Arduino boards (Ex: Nano 33 IoT)</li>

                          <br/>


                          <li>Existing interfaces for various hobby electronics:
                            <ul>
                              <li>Single button servos</li>
                              <li>Binary switch servo pairs</li>
                              <li>Knob servo control (180 degrees)</li>
                              <li>Relay boxes</li>
                              <li>WS2812B addressable RGB LED strips</li>
                              <li>DHT22 thermometers</li>
                              <li>PIR motion sensors</li>
                              <li>Door sensors</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Home Automation Central Server</b>
                        <ul>
                          <li>Server-centric design - all Arduino configuration managed by web server</li>
                          <li>Intended to be configured to fit home and Arduino layout</li>
                          <li>IP-based module identification and info distribution</li>
                          <li>Support for electric piano control over USB MIDI</li>

                          <br/>

                          <li>Modular, scalable, object-oriented design in three layers:
                            <ul>
                              <li>Home objects</li>
                              <li>Room objects</li>
                              <li>Module objects</li>
                            </ul>
                          </li>

                          <br/>

                          <li>Intelligent, highly customizable Arduino input data reactions:
                            <ul>
                              <li>Receiving motion sensor data - <i>(Ex: Turn on light with detected motion)</i></li>
                              <li>Receiving door sensor data - <i>(Ex: Turn on bathroom vent when door closed)</i></li>
                              <li>Receiving temperature or humidity data - <i>(Ex: Turn on A/C if thermostat temperature exceeded)</i></li>
                              <li>Receiving special commands - <i>(Ex: Play audio file given Arduino signal)</i></li>
                              <li>Conditioned by time of day - <i>(Ex: At night, motion sensor activates dim LED, not lights)</i></li>
                              <li>Conditioned by states of other actions - <i>(Ex: Do not turn off light if door is closed)</i></li>
                              <li>Conditioned by timeout - <i>(Ex: Turn off motion sensor-activated lights after 80 seconds)</i></li>
                              <li>Conditioned by input history - <i>(Ex: Do not timeout lights if more motion was detected in last 80 seconds)</i></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Web Server RESTful APIs</b>
                        <ul>
                          <li>Complete Arduino states status information</li>
                          <li>Routine OpenWeatherMapAPI queries for home zip code, provided with home status</li>

                          <br/>


                          <li>APIs to interact with Arduinos abstracted by room and action IDs (no IP addresses)
                            <ul>
                              <li>Client toggling module actions</li>
                              <li>Client assigning module states (no physical action performed)</li>
                              <li>Client changing input data reactions</li>
                              <li>Client disabling actions</li>
                              <li>Client disabling input actions</li>
                              <li>Client providing base64 encoded piano song to be played</li>
                              <li>Arduino state updates after actions performed</li>
                              <li>Arduino input data</li>
                              <li>Arduino startup pinout info requests</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Home Automation Web Application</b>
                        <ul>
                          <li>Interface for interacting with home automation system</li>
                          <li>Hosted by same software as Central Web Server</li>
                          <li>Arduino action states - what is on/off</li>
                          <li>Toggling arduino actions over the internet</li>
                          <li>Current weather data from OpenWeatherMapAPI</li>
                          <li>Current Arduino thermometer readouts</li>
                          <li>Thermostat configuration</li>
                          <li>Administrative functions</li>
                        </ul>
                      </li>

                    </ul>
                  </div>

                  <hr/>
                  <div id="featuresAiAssistant">
                    <h2 id="overviewTextHeader">
                      AI Assistant Features
                    </h2>

                    <br/>

                    <ul>
                      <li><b>Machine Learning Hotword Detection</b>
                        <ul>
                          <li>Always listening, wake on trigger word capability</li>
                          <li>Three supported production models: "Hey Kotakee", "Kotakee", or "Activate" keywords</li>
                          <li>Low power consumption, low parameter, optimized TensorFlow models</li>
                          <li>Recurrent Neural Network (GRUs) + Convolutional Neural Network architecture</li>
                          <li>Trained with various acoustic environments, voices, and intonations</li>
                          <li>Complete model creation code included for optional model fine-tuning/creation</li>

                          <br/>


                          <li>Train, Test dataset generation from pools of Negatives, Activates, and Backgrounds
                            <ul>
                              <li>17,688 Negative samples from personal recordings and the <i>LinguaLibre</i> dataset - further changes unecessary</li>
                              <li>5,162 Activate samples personally recorded for "Hey Kotakee"</li>
                              <li>4,987 Activate samples personally recorded for "Kotakee"</li>
                              <li>20 Background samples personally recorded - further changes unecessary</li>
                              <li>Assorted dataset compilation utilities</li>
                              <li>Augmented dataset creation with pitch shift, contrast, equalizers, and reverb</li>
                            </ul>
                          </li>

                          <br/>

                          <li>Model training harnesses
                            <ul>
                              <li>Fundamental training harness</li>
                              <li>Multi-experiment "chain training" harness</li>
                              <li>K-fold cross-validation harness</li>
                              <li>Training history analysis tools and graphs</li>
                            </ul>
                          </li>

                          <br/>

                          <li>Model evaluation harnesses
                            <ul>
                              <li>Fundamental testing harness</li>
                              <li>Multi-checkpoint "chain testing" harness (complete training history with test, train, and val)</li>
                              <li>Automatic experiment results documentation and logging</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Textual Emotion Detection AI Project Integration</b>
                        <ul>
                          <li>Detection of emotion category for any arbitrary text being spoken</li>
                          <li>Production model utilizing a fine-tuned RoBERTa-Large model</li>
                          <li>Utilized <i>ISEAR</i>, <i>WASSA-2017</i>, <i>Cecilia</i>, <i>DailyDialog</i>, <i>EmotionStimulus</i>, <i>MELD</i>, and <i>SMILE</i> datasets.</li>

                          <br/>
                          
                          <li>Paul Ekman Discrete Emotion Model categories + "Neutral" supported:
                            <ol>
                              <li>Joy</li>
                              <li>Sadness</li>
                              <li>Fear</li>
                              <li>Anger</li>
                              <li>Disgust</li>
                              <li>Surprise</li>
                              <li>Neutral</li>
                            </ol>
                          </li>

                          <br/>
                          
                          <li>Emotion Representation given detected category with AI Assistant Avatar:
                            <ul>
                              <li>27 total looping video files showing emotional speech, idle, and listening</li>
                              <li>Blender rendered animations</li>
                              <li>3 variants for each set depending on time of day: Sunset, Sunlight, Nightlight.</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Multispeaker Synthesis AI Project Integration</b>
                        <ul>
                          <li>AI Assistant speaking in the voice of video game characters</li>
                          <li>Speaker changes on the fly as specified by user</li>
                          <li>Text is synthesized into Mel Spectrograms on-device</li>

                          <br/>
                          
                          <li>Real-time synthesis of spectrogram to audio with two methods:
                            <ul>
                              <li>High-quality vocoder model inference - intensive computing requires Cloud AI Server connectivity</li>
                              <li>Lower-quality Griffin Lim vocoder synthesis without server connectivity</li>
                            </ul>

                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Machine Pianist AI Project Integration</b>
                        <ul>
                          <li>AI Assistant playing piano songs realistically through machine learning inference</li>
                          <li>"Performs" arrangements when commanded by voice either on device or via the Cloud AI Server - generates MIDI file</li>

                          <br/>
                          
                          <li>Audio output may occur with two methods:
                            <ul>
                              <li>On-device sound synthesis using <i>PyGame</i> MIDI player</li>
                              <li>Real-life electric piano performance via Central Server API requests</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Fundamental Assistant Components</b>
                        <ul>
                          <li>Three fundamental supporting components for all modules</li>

                          <br/>


                          <li>"Speech Listen" Component
                            <ul>
                              <li>Triggered by hotword detection and queries made by modules</li>
                              <li>Governs Speech Recognition interactions with user speech</li>
                              <li><i>Google Speech Recognition</i> utilized when server is online</li>
                              <li><i>PocketSphinx</i> recognition utilized when server is offline</li>
                              <li>Audio and visual cues to indicate listening is active</li>
                            </ul>
                          </li>

                          <br/>

                          <li>"Speech Speak" Component
                            <ul>
                              <li>Governs "vocal" user interactions with text-to-speech functions</li>
                              <li>Governs audio file management (audio cues, music files, etc.)</li>
                              <li>Optional support for Multispeaker Synthesis AI project text-to-speech</li>
                              <li>Optional support for <i>PyTTSx3</i> text-to-speech</li>
                              <li>Optional support for Textual Emotion Detection AI project + Emotion Representation to visualize AI Assistant avatar</li>
                              <li>Multi-threaded, multi-processing design with queued events, optional blocking/non-blocking</li>
                            </ul>
                          </li>

                          <br/>

                          <li>"Web Server Status" Component
                            <ul>
                              <li>Governs all interactions with the Central Web Server and Cloud AI Server</li>
                              <li>Routinely queries APIs for home, action statuses</li>
                              <li>Routinely queries for internet, Cloud AI Server connectivity</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Modular Assistant Capabilities Platform</b>
                        <ul>
                          <li>Scalable architecture designed to emphasize ease of adding modules</li>
                          <li>Machine Learning-centric module configuration options</li>
                          <li>Environment adaption - online or offline, connected to central web server or disconnected, etc.</li>
                          <li>Defined dynamically with configuration files</li>

                          <br/>

                          <li>Active module functionality
                            <ul>
                              <li>Keyword Detection triggered after user actively interacts by speaking hotword</li>
                              <li>Optional initialization at startup or on first use by user (Emphasize lightweight startup)</li>
                              <li>Optional module requirements (Internet connectivity, Cloud AI Server connectivity, etc.)</li>
                              <li>Optional fundamental component usage (Speech, Listen, Web Server Status)</li>
                              <li>Optional Passive module creation (Ex: Setting a timer to ring in 15 minutes)</li>
                            </ul>
                          </li>

                          <br/>

                          <li>Passive module functionality
                            <ul>
                              <li>Routine or singleton features performed without user interaction</li>
                              <li>Non-blocking background event queue processing and management</li>
                              <li>Mechanisms to event information from passive modules to passive module handler thread</li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Simple Utilities Module</b>
                        <ul>
                          <li>Basic vocal functions without internet or web server requirement</li>
                          <li>Timer creation, deletion</li>
                          <li>Alarm creation, deletion (Singleton or repeating)</li>
                          <li>Time, date information</li>
                          <li>Calculator processing</li>
                          <li>Multispeaker Synthesis AI project speaker selection, if enabled</li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Online Utilities Module</b>
                        <ul>
                          <li>Basic vocal functions with internet</li>
                          <li>Wikipedia summary querying</li>
                          <li>NewsAPI querying given optional category, country, or phrase</li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Home Automation Module</b>
                        <ul>
                          <li>Vocal functions with web server connectivity</li>
                          <li>Weather information readout</li>
                          <li>Server status information readout</li>
                          <li>Home temperature readout</li>
                          <li>Home thermostat configuration</li>
                          <li>Administrative server commands</li>
                          <li>Arduino actions - toggling central server actions with voice commands</li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Piano Player Module</b>
                        <ul>
                          <li>Voice commands to control web server connected to electric piano</li>
                          <li>All supported songs readout</li>
                          <li>Playing a piano song using the Machine Pianist AI project on the home piano</li>
                          <li>Stopping or replacing a playing song</li>
                        </ul>
                      </li>

                      <br/>

                      <li><b>Additional Modules</b>
                        <ul>
                          <li><i>ConvAIModel</i> chatbot interactions with defined personalities</li>
                          <li><i>Ai8Ball</i> question-answering interactions given internet connectivity</li>
                        </ul>
                      </li>

                    </ul>


                  </div>

                  <hr/>
                  <div id="featuresCloudAiServer">
                    <h2 id="overviewTextHeader">
                      Cloud AI Server Features
                    </h2>

                    <br/>

                    <ul>
                      <li><b>Distributed Intensive AI Processing</b>
                        <ul>
                          <li>Centralized home infrastructure server on a machine with a CUDA-capable GPU</li>
                          <li>Processes intensive tasks requested by low-powered clients</li>
                          <li>Dynamically declared RESTful API handlers utilizing existing AI Assistant modules</li>
                          <li>Dockerized, cloud-ready, gpu-accelerated container support</li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>

                <br/>
                <br/>

              </div>

              <div id="homeAutomation" style={this.state.homeAutomationStyle}>
                <div id="overviewTitle">
                  <b>Home Automation</b>
                </div>
                <div id="subPageImage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Arduino-based Home Automation
                  </h2>

                  <br/>

                  <div>
                    Text
                  </div>

                  <br/>

                  <div>
                    Text
                  </div>
                </div>

                <hr/>

              </div>

              <div id="aiAssistant" style={this.state.aiAssistantStyle}>
                <div id="overviewTitle">
                  <b>AI Assistant</b>
                </div>
                <div id="subPageImage">
                  <img id="subPageImageImg" src={require("../../../assets/aiAssistant.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    A voice-based, modular AI platform
                  </h2>

                  <br/>

                  <div>
                    Text
                  </div>

                  <br/>

                  <div>
                    Text
                  </div>
                </div>

                <hr/>
              </div>

              <div id="cloudAiServer" style={this.state.cloudAiServerStyle}>
                <div id="overviewTitle">
                  <b>Cloud AI Server</b>
                </div>
                <div id="subPageImage">
                  <img id="subPageImageImg" src={require("../../../assets/cloudAiServer.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Remote GPU accelerated computation
                  </h2>

                  <br/>

                  <div>
                    Text
                  </div>

                  <br/>

                  <div>
                    Text
                  </div>
                </div>

                <hr/>
              </div>

              <div id="contact"  style={this.state.contactStyle}>
                <div id="overviewTitle">
                  <b>Contact</b>
                </div>

                <div id="contactImage">
                  <img id="subPageImageImg" src={require("../../../assets/contact.png").default}/>
                </div>
                <h2 id="overviewTextHeader">
                  Arthurlot Li
                </h2>
                <div id="contactSubtitle">
                  <i>Machine Learning Practitioner</i>
                </div>

                <br/>
                <br/>

                <div id="contactText">

                  <div>
                    Please feel free to contact me:
                  </div>

                  <div>
                    <a href="mailto:ArthurlotLi@gmail.com">ArthurlotLi@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div id="header">
          <div id="headerInner">
            <div id="titleOuter">
              <div id="title"><i><b id="contentLink" className="overview" onClick={evt => this.showPage(evt)}>Hobby Automation</b></i></div>
              <div id="subtitle"><i><b id="contentLink" className="overview" onClick={evt => this.showPage(evt)}>AI Augmented Software</b></i></div>
            </div>
            <div id="contentLinks">
              <a id="contentLink" className="overview" onClick={evt => this.showPage(evt)}>Overview</a> 
              <a>&nbsp;|&nbsp;</a>
              <a id="contentLink" className="home automation" onClick={evt => this.showPage(evt)}>Home Automation</a> 
              <a>&nbsp;|&nbsp;</a>
              <a id="contentLink" className="ai assistant" onClick={evt => this.showPage(evt)}>AI Assistant</a> 
              <a>&nbsp;|&nbsp;</a>
              <a id="contentLink" className="cloud ai server" onClick={evt => this.showPage(evt)}>Cloud AI Server</a> 
              <a>&nbsp;|&nbsp;</a>
              <a id="contentLink" className="contact" onClick={evt => this.showPage(evt)}>Contact</a>
            </div>
          </div>
          <div id="headerStrip">

          </div>
        </div>

      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));