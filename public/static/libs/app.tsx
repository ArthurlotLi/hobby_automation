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
                    While sophisticated commercial home automation products have become increasingly common, software and hardware enthusiasts may instead prefer the freedom of DIY solutions.
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
                    Arduino-Based Home Automation
                  </h2>

                  <br/>

                  <div>
                    The Home Automation software encompasses the Arduino firmware interacting with hobby electronics, the central web server managing all Arduinos and serving fundamental operating APIs, as well as the web application interface for manipulating the system over the internet.
                  </div>

                  <br/>

                  <div>
                    The system architecture was designed from the ground up to be highly and easily configurable depending on the home, room, and module layout, as well as the desired behavior. 

                    For users establishing their own home automation infrastructure with this software, the most laborious part of this process will be the actual hardware configuration. 
                  </div>

                  <br/>

                  <div>
                    It is advised that users make incremental changes as they go, ensuring the end-to-end communication process from each Arduino to the web application behaves as expected. 
                  </div>
                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation1.jpg").default}/>
                </div>

                <hr />

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Hardware Recommendations
                  </h2>

                  <br/>

                  <div>
                    This can be considered a medium-to-advanced level hobby electronics project. 
                    
                    As such, it is recommended that key tools frequently used for hobby electronics are made readily available, such as soldering equipment, glue guns, wire strippers, multimeters, and wiring equipment.

                    Depending on the application, these tools may or may not be necessary.
                  </div>

                  <br/>

                  <div>
                    The Arduino variant of choice to use in this project is the <b>Arduino Nano 33 IoT</b>. 
                    
                    Any WiFi-capable, WiFiNINA-supported Arduino board will do, however the Nano 33 IoT, at the time of writing, is the cheapest of these options. 

                    It should be noted however, that the 3.3v voltage does incur additional complexity when working with common 5v electronics like servos. 

                    Bidirectional level converters/shifters may be used.
                  </div>

                  <br/>

                  <div>
                    The Arduino firmware provided in this software supports the following hardware and actions: 
                    <ul>
                      <li>"LIGHTING" - Relay boxes, LED lights, etc. with simple circuit opening and closing</li>
                      <li>"REMOTE" - A single servo pressing a button once for "on", again for "off"</li>
                      <li>"KNOB" - A single servo turning a knob from 0 degrees as "off" to 180 degrees as "on"</li>
                      <li>"SWITCH" - A pair of servos, with one servo actuating for "on", the other for "off"</li>
                      <li>"LEDSTRIP" - WS2812B addressable RGB LED strips with 8 different modes</li>
                      <li>"TEMP" - DHT22 thermometers providing temperature and humidity data</li>
                      <li>"MOTION" - PIR motion sensors providing motion start and motion stop events</li>
                      <li>"DOOR" - Door sensors providing opened and closed events</li>
                    </ul>
                  </div>
                  
                  <div>
                    Any run-of-the-mill 180 degree servo will do for mechanical tasks. 
                    
                    Smaller, "mini" servos are recommended to alleviate potential stress on buttons and switches and to prolong the life of the system.
                  </div>

                  <br/>
                  
                  <div>
                    To control wall socket power, traditional relay circuit boxes will perform adequately. 
                    
                    However, the usual dangers with working with high voltage wires apply here as well - doubly so given the day-to-day nature of a home automation system.
                  
                    <b>&nbsp;Please do NOT work with high voltage wires unless you are highly experienced.&nbsp;</b>
                      
                    Beware the incredible danger of electrocution and electrical fires that may <b>potentially damage or destroy your home</b>.
                  </div>

                  <br/>

                  <div>
                    For those wary of such dangers, I <i>highly</i> recommend using safely contained products for relay control switching instead, such as the <b>IoT Relay</b> sold by Digital Loggers. 
                  </div>

                  <br/>

                  <div>
                    There are no strict requirements on specific brands utilized for temperature sensors, PIR sensors, door sensors, and LED strips. 
                    
                    Simply ensure that they are compatible with the Arduino board you'll be using beforehand. 
                  </div>
                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation2.jpg").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Base Home Infrastructure
                  </h2>

                  <br/>

                  <div>
                    There are a few requirements in terms of networking and computer hardware necessary to support this home automation architecture. 

                    This guide was written under the assumption that the user has full access to their local network configuration.
                  </div>

                  <br/>

                  <div>
                    For networking, a router capable of handling a mesh of IoT devices within the local network is required. Wifi 6 devices are recommended.

                    Additionally, the user must be able to access the router's administrative interface so as to view currently connected devices and to make DCHP IP address reservations.
                  </div>

                  <br/>

                  <div>
                    The user must also have a network-connected computer (OS agnostic) available to use as a 24/7 central web server. 

                    Running the web server is a relatively moderate computation workload that can be effectively accomplished by older, lower-powered laptops - these may be preferable if power consumption is a concern.

                    Ideally, the machine's primary purpose should be to serve as the web server, and not be required to accomplish other tasks in parallel. 
                  </div>

                  <br/>

                  <div>
                    This machine should be turned on and given a DCHP reservation prior to the beginning of hobby electronics work. 
                  </div>

                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation3.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Wiring Automation Modules
                  </h2>

                  <br/>

                  <div>
                    Before plugging leads into breadboards, it would be best to come up with a plan - the more detailed the better. 

                    With the floorplans of your home (or an approximation), indicate the locations of each Arduino module that you plan to establish, keeping in mind that each will need to be connected to 5v power. 
                  </div>

                  <br/>

                  <div>
                    Ideally, each Arduino should be labeled with a module ID, the room in which it's in, the action categories it implements, and the pin(s) associated with each action. 

                    Each action category may have different pinout label requirements - ensure that if your action requires more than one pin, they are specified accordingly. 

                    Note that some actions may require special label requirements; for example, LEDSTRIP requires both the pin number and the number of LEDs on the strip (Ex: "14.060"). 
                  </div>

                  <br/>

                  <div>
                    With a plan drawn up, electronics work can now begin. 
                  </div>

                  <br/>

                  <div>
                    The Arduino firmware comes in a single large .ino file provided in the repository under "kotakeeosModule". 

                    Before loading the file onto your Arduinos, make sure to create a file in that same folder called "arduino_secrets.h". 

                    This file should contain two lines:

                    <ul>
                      <li>#define SECRET_SSID "Your Network Name"</li>
                      <li>#define SECRET_PASS "yourPassword123"</li>
                    </ul>

                    Additionally, inside of "kotakeeosModule.ino", change the variable at line 133, "webServerIPAddress", to the IP address of your designated web server. 
                  </div>

                  <br/>

                  <div>
                    Once those items have been accomplished, the code may be loaded onto an Arduino microcontroller same as any other Arduino sketch. 

                    Due to the server-centric design of this system, no further changes will need to be done to the firmware at all. 

                    The server, on startup, will tell the Arduino what actions that module is capable of and what pins to use.
                  </div>

                  <br/>

                  <div>
                    Note that on startup, the Arduino module will output via serial port it's assigned IP address on the local network. 

                    Be sure to create a DCHP reservation and write down the IP address on your planning documents for future reference.
                  </div>

                  <br/>

                  <div>
                    When working with 3.3v and 5v electronics at the same time, you must be vigilant as to which lines are which. 

                    There is the ever-present risk of frying your lower voltage Arduino by accidentally touching the wrong leads together. 

                    Drawing up wiring diagrams and/or utilizing software like <b>Fritzing</b> may help minimize this risk. 

                    If this is your first time using a level converter, be careful and familiarize yourself with how to use them properly.
                  </div>

                  <br/>

                  <div>
                    As with any hobby electronics project, testing before mounting is a must. 

                    Try to build a basic Arduino module and hook up the software side of things end-to-end before gluing servos and affixing things to walls. 

                    Once you have a module that, for example, successfully turns a breadboard LED on and off over the network, you should be ready to get serious. 
                  </div>

                  <br/>

                  <div>
                    Outside of those pieces of advice, the hardware side is all yours to dream up and create - have fun.
                  </div>
                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation4.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Central Web Server Configuration
                  </h2>

                  <br/>

                  <div>
                    Before running the central web server, Node.js 16.x must be installed and configured. 
                    
                    Once Node has been installed, clone the repository onto the web server, navigate inside of KotakeeOS/software, and run "npm install" to acquire dependencies. 

                    With this, the web server and web application should be ready for configuration and use. 
                  </div>

                  <br/>

                  <div>
                    All central server configuration changes will be made within the KotakeeOS/software/server.js file. 

                    Out of the box, lines 153 - 404 are provided as reference code demonstrating an example home configuration. 

                    This code should be removed and replaced with your own configuration. 
                  </div>

                  <br/>

                  <div>
                    Here, Module objects may be defined with their governed actions and pinout information.

                    Modules are grouped together in Room objects, who each have their own unique IDs. 

                    When a user queries to activate/deactivate something, they will query using the roomID, the actionID, and the desired toState. 

                    IP addresses are necessary to initially link Arduinos to their programmed configurations on startup with a Module object linked to a Room object. 
                  </div>

                  <br/>

                  <div>
                    No configuration of the central web server is necessary outside of this singular file. 

                    It is recommended to familiarize oneself with the high-level logic contained within the server.js file before declaring new Modules and Rooms. 
                  </div>

                  <br/>

                  <div>
                    <b>OpenWeatherMapAPI</b> support is baked into the central web server to provide up-to-date weather information for a given ZIP code. 

                    Users should go to OpenWeatherMapAPI to generate their own API keys and enter it into line 135. 

                    One's ZIP code should also be entered into line 403 to tell the API which area to query for weather data. 
                  </div>
                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation5.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Web Application Interface
                  </h2>

                  <br/>

                  <div>
                    Depending on the layout of the users's home automation infrastructure, the web application interface must be modified accordingly. 

                    The application is a React.js, Express.js, TypeScript web app dynamically displaying data provided by the central web server.  
                  </div>

                  <br/>

                  <div>
                    All configuration will take place in KotakeeOS/software/public/static/libs/app.tsx. 

                    Changes will occur between lines 1033 - 1067 utilizing existing methods in order to update the buttons and temperature readouts that appear on the interface. 

                    No other changes to the functionality of the web application are necessary.
                  </div>

                  <br/>

                  <div>
                    The application will routinely query the central web server for both action and home status information. 

                    It is optimized for horizontal screens and is intended to be kept open in communal home areas for easy status notification and user interactions. 
                  </div>

                </div>

                <hr/>

                <div id="subPageImageMidPage">
                  <img id="subPageImageImg" src={require("../../../assets/homeAutomation6.png").default}/>
                </div>

                <hr/>

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Fine-Tuning Automation Behavior
                  </h2>

                  <br/>

                  <div>
                    Once the end-to-end system architecture has been proven with simple Arduino modules, more complex operations may be implemented. 

                    In addition to fielding requests from users to perform actions, the automation software also allows for the ingesting of input data from Arduino modules. 

                    In the ideal world, the user should interact with the web application minimally for rare occasions, letting the automatic features of the system do the work otherwise.
                  </div>

                  <br/>

                  <div>
                    Input actions are defined in JSON objects that dictate the various actions and caveats relating to the ingestion of particular pieces of data from particular actions. 

                    These are room-specific, and are heavily customizable depending on the user's desires. 
                    
                    The following are the actions and caveats implemented:

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
                  </div>

                  <div>
                    At this point it is up to the user to plan, experiment, and implement their own advanced home automation strategies given the existing infrastructure provided by this software.

                    It is highly encouraged that the user explore the code, and in time, perhaps augment the code with their own additions so as to make the system work better for their particular needs. 
                  </div>

                  <br/>
                  <br/>
                </div>

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
                    A Voice-Based, Modular AI Platform
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Basic Assistant Configuration
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Trigger Word Detection AI Project
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Emotion Detection AI Project
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Multispeaker Synthesis AI Project
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Machine Pianist AI Project
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Developing Your Own Modules
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Configuring Cloud Inference
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Configuring Your Own APIs
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

                <div id="overviewText">
                  <h2 id="overviewTextHeader">
                    Dockerization with GPU Visibility
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