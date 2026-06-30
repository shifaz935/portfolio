import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaSearch, 
  FaFilter, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaCode, 
  FaMicrochip, 
  FaCloud, 
  FaCertificate, 
  FaBookOpen, 
  FaChevronDown, 
  FaChevronUp, 
  FaInfoCircle, 
  FaTrophy,
  FaFilePdf,
  FaArrowRight,
  FaNetworkWired,
  FaCheckCircle
} from "react-icons/fa"
import pmvikas from "../assets/pmvikas.jpg"

function PmVikas() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [expandedDay, setExpandedDay] = useState(null)

  // Autonomous Pathway timeline items
  const pathwayTimeline = [
    {
      title: "PM-VIKAS Program Completion",
      status: "Achieved",
      date: "Completed – June 30, 2025",
      description: "Secured primary credentials in IoT networking, cloud configurations, embedded systems, networking fundamentals, and security concepts under Ministry guidelines."
    },
    {
      title: "AWS Certified Solutions Architect",
      status: "Future Goal",
      date: "Target – Q4 2026",
      description: "Aiming to validate expertise in deploying secure, robust, and scalable cloud systems on the Amazon Web Services platform."
    },
    {
      title: "IoT Security Specialization (GIAC)",
      status: "Future Goal",
      date: "Target – Q2 2027",
      description: "Planning to pursue advanced credentials in defensive electronic hardware, encryption protocols, and firmware reverse engineering."
    }
  ]

  // Complete updated Day 1 to 28 training journal
  const trainingJournal = [
    {
      day: 1,
      title: "Resistors, Ohm's Law, KCL & KVL",
      faculty: "Dr. Anand — HOD ECE, IIIT Kottayam",
      topics: [
        "Passive component parameters (conductance, resistance, resistivity)",
        "Ohm's Law verification under variable voltages",
        "Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) nodal analysis"
      ],
      tags: ["Network Theory", "Embedded Systems"],
      miniProject: "Verifying current splits in parallel networks using multimeters.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 2,
      title: "Diodes & Rectifiers",
      faculty: "Dr. Anand — HOD ECE, IIIT Kottayam",
      topics: [
        "Semiconductor physics: P-N junction forward and reverse bias characteristics",
        "Half-wave and Full-wave rectifiers (bridge configurations)",
        "Applications: Clipping, clamping, voltage regulation"
      ],
      tags: ["Network Theory", "Embedded Systems"],
      miniProject: "Simulating a bridge rectifier power supply on paper.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 3,
      title: "Computer Networks & VS Code Setup",
      faculty: "IIIT Kottayam",
      topics: [
        "Ethernet standards (IEEE 802.3) and Wi-Fi networks (IEEE 802.11)",
        "Fundamentals of Data Communication: Latency, Bandwidth, Packets",
        "Configuring Visual Studio Code, workspaces, extensions, and compiling parameters"
      ],
      tags: ["Networking", "Embedded Systems"],
      miniProject: "Setting up a clean custom workspace in VS Code with C++ and serial toolchains.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 4,
      title: "IoT Fundamentals & M2M Applications",
      faculty: "Dr. Shajulin Benedict — IIIT Kottayam",
      topics: [
        "Internet of Things layers (Sensors, Edge nodes, Gateways, Database, Applications)",
        "Machine to Machine (M2M) communication frameworks vs. standard Web client-servers",
        "Research directions: low-power long-range protocols (LoRaWAN, Zigbee)"
      ],
      tags: ["Embedded Systems", "Networking"],
      miniProject: "Conducting a comparative research report on M2M protocol bandwidth constraints.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 5,
      title: "IoT Product Ideation",
      faculty: "IIIT Kottayam",
      topics: [
        "Smart Home automation parameters and power constraints",
        "Analyzing cybersecurity entry points in edge nodes",
        "IoT Product design cycles: Prototype to manufacturing"
      ],
      tags: ["Embedded Systems", "Mini Project"],
      miniProject: "Creating a technical layout diagram for a secure automated home entryway.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 6,
      title: "History of Electronics & Components",
      faculty: "Dr. Vineeth — IIIT Kottayam",
      topics: [
        "Integrated Circuit (IC) evolution (SSI, MSI, LSI, VLSI)",
        "Differentiating Passive Components (Resistors, Capacitors, Inductors) and Active Components (Transistors, Op-amps)",
        "Electronic workshop tools: Oscilloscopes, Multimeters, Soldering rigs"
      ],
      tags: ["Embedded Systems"],
      miniProject: "Drawing component symbols and measuring passive variables using a digital multimeter.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 7,
      title: "Digital Electronics",
      faculty: "IIIT Kottayam",
      topics: [
        "Boolean Algebra axioms, De Morgan's Theorems, logic expressions",
        "Basic Logic Gates (AND, OR, NOT) and Universal Gates (NAND, NOR)",
        "Number systems: Binary, Octal, Decimal, Hexadecimal radix swaps",
        "Karnaugh Maps (K-Maps) for 2, 3, and 4 variables minimization"
      ],
      tags: ["Logic Gates", "Network Theory"],
      miniProject: "Simplifying a 4-variable boolean output formula using K-Map groupings.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 8,
      title: "Combinational Circuits",
      faculty: "IIIT Kottayam",
      topics: [
        "Half Adder, Full Adder, Half Subtractor, Full Subtractor Boolean equations",
        "Multiplexers (MUX) & Demultiplexers (DEMUX) selection lines mapping",
        "Encoders & Decoders logic structures"
      ],
      tags: ["Logic Gates", "Network Theory"],
      duration: "6 Hours",
      status: "Completed",
      hasDetailedTheory: true,
      detailedTheoryType: "combinational"
    },
    {
      day: 9,
      title: "Sequential Logic",
      faculty: "IIIT Kottayam",
      topics: [
        "Asynchronous vs. Synchronous sequential circuits structure",
        "Flip-flops operations (SR, JK, D, T) and excitation formulas",
        "Registers, Counters (asynchronous ripple, synchronous ring), and finite state machines (FSM)",
        "State Assignment and State Reduction tables"
      ],
      tags: ["Logic Gates", "Network Theory"],
      duration: "6 Hours",
      status: "Completed",
      hasDetailedTheory: true,
      detailedTheoryType: "sequential"
    },
    {
      day: 10,
      title: "Microprocessors & Microcontrollers in IoT",
      faculty: "Dr. Delly Thomas — IIIT Kottayam",
      topics: [
        "8085 Microprocessor registers, ALU, and assembly code syntax",
        "Comparing microprocessors (8085) with modern microcontrollers (Atmega328, ESP32)",
        "Instruction sets, memory layout registers, and hardware interrupts"
      ],
      tags: ["Microprocessors", "Embedded Systems"],
      miniProject: "Writing an assembly script to add two hexadecimal values using register banks.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 11,
      title: "Keil, Proteus, SIM8085 Practicals",
      faculty: "Dr. Delly Thomas — IIIT Kottayam",
      topics: [
        "Writing and assembling programs in SIM8085 emulator console",
        "Keil uVision IDE workflow for assembly and embedded C compilation",
        "Proteus VSM schema design and firmware simulation linkages"
      ],
      tags: ["Microprocessors"],
      miniProject: "Simulating a virtual Atmega circuit inside Proteus driven by Keil firmware.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 12,
      title: "Embedded Systems Fundamentals",
      faculty: "Dr. S Venkitesh — IIIT Kottayam",
      topics: [
        "Embedded systems constraints: Power bounds, real-time priorities, memory",
        "Sensors transduction (voltage/current offsets) and Actuators drive systems",
        "Real-time clock configurations and watchdog timer triggers"
      ],
      tags: ["Embedded Systems"],
      miniProject: "Mapping a schematic system to read analog thermistor data with warning buzzer triggers.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 13,
      title: "Networking and Cloud Basics",
      faculty: "Dr. Koppala Guravaiah — IIIT Kottayam",
      topics: [
        "OSI Model vs. TCP/IP suite mapping",
        "Routing algorithms, IP addressing (IPv4/IPv6 subnetting)",
        "Cloud architectures: IaaS, PaaS, SaaS classifications for IoT endpoints"
      ],
      tags: ["Networking", "Cloud"],
      miniProject: "Calculating subnets and gateway ranges for a multi-room sensor system.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 14,
      title: "Cisco Packet Tracer Basics",
      faculty: "IIIT Kottayam",
      topics: [
        "Cisco Packet Tracer simulation environment overview",
        "Configuring switches, end nodes (PCs, Servers), and router connections",
        "Static routing tables and ICMP ping testing commands"
      ],
      tags: ["Cisco Packet Tracer", "Networking"],
      miniProject: "Simulating a local network with 3 subnets and validating routing with ping logs.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 15,
      title: "Advanced Packet Tracer Configurations",
      faculty: "IIIT Kottayam",
      topics: [
        "Dynamic routing protocols: Open Shortest Path First (OSPF) configurations",
        "Access Control Lists (ACL) configuration parameters for package filtering",
        "Securing router consoles with SSH access permissions"
      ],
      tags: ["Cisco Packet Tracer", "Networking"],
      miniProject: "Configuring a secure enterprise gateway denying specific subnet packets via standard ACLs.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 16,
      title: "Cloud Computing Overview",
      faculty: "IIIT Kottayam",
      topics: [
        "Cloud virtualization concepts and hypervisors",
        "Comparing AWS, Azure, and Google Cloud platform IoT features",
        "Public, Private, and Hybrid cloud deployment models"
      ],
      tags: ["Cloud", "AWS"],
      miniProject: "Drawing a multi-cloud network topology routing data through AWS IoT Core.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 17,
      title: "AWS & Container Virtualization",
      faculty: "IIIT Kottayam",
      topics: [
        "AWS EC2 virtual machines setup and SSH key creation",
        "Docker container engines, images, Dockerfiles, and runtime ports",
        "Virtualization overhead savings using container configurations"
      ],
      tags: ["AWS", "Cloud"],
      miniProject: "Building a custom Dockerfile that runs a Node.js telemetry listener on port 8080.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 18,
      title: "Cisco Packet Tracer Assignment",
      faculty: "IIIT Kottayam",
      topics: [
        "Designing networks using multi-area router hierarchies",
        "Debugging address resolution issues (ARP) and DHCP IP leases",
        "Simulating packet pathways under active link drops"
      ],
      tags: ["Cisco Packet Tracer", "Networking"],
      miniProject: "Assembling a complex campus networking hierarchy with automated DHCP services.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 19,
      title: "Arduino Programming",
      faculty: "IIIT Kottayam",
      topics: [
        "Arduino board structure (Uno/Nano), Atmega328 specs",
        "Embedded C syntax: setup(), loop(), pinMode(), digitalWrite(), analogRead()",
        "Interfacing basic components: LEDs, buttons, temperature sensors"
      ],
      tags: ["Arduino", "Embedded Systems", "Sensors"],
      miniProject: "Coding an interactive serial response protocol triggered by button pushes.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 20,
      title: "Tinkercad Circuits Simulation",
      faculty: "IIIT Kottayam",
      topics: [
        "Tinkercad virtual breadboard environment configurations",
        "Simulating resistor networks, transistors, and simple gates",
        "Linking virtual Arduino nodes with code and simulated sensors"
      ],
      tags: ["Tinkercad", "Embedded Systems"],
      miniProject: "Wiring and testing a light-sensitive LED switch on Tinkercad using LDR circuits.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 21,
      title: "Packet Tracer Assignment: OSPF, MQTT & RIP",
      faculty: "IIIT Kottayam",
      topics: [
        "OSPF and Routing Information Protocol (RIP) route table comparison",
        "MQTT broker configuration simulations inside Packet Tracer IoT nodes",
        "Wireless gateway connections: AODV and DSDV routing concepts"
      ],
      tags: ["Cisco Packet Tracer", "Networking"],
      miniProject: "Deploying a simulated MQTT smart home node publishing status messages to a virtual cloud broker.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 22,
      title: "Sensor Circuits using Tinkercad",
      faculty: "IIIT Kottayam",
      topics: [
        "DHT11 climate, PIR motion, and Ultrasonic range sensors wiring",
        "Analog measurement scaling mathematics in Arduino code",
        "Calibrating sensor threshold values in real-time simulations"
      ],
      tags: ["Tinkercad", "Sensors", "Arduino"],
      miniProject: "Prototyping an ultrasonic distance meter flashing warning lights based on obstacle proximity.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 23,
      title: "Actuator Circuits (Motors & Relays)",
      faculty: "IIIT Kottayam",
      topics: [
        "Interfacing Servo motors and H-Bridge DC motor controller drivers",
        "Switching high-voltage AC loads using isolated 5V relay shields",
        "Flyback diode placement safety rules for inductive loads"
      ],
      tags: ["Tinkercad", "Actuators", "Embedded Systems"],
      miniProject: "Prototyping a speed-controlled cooling fan module driven by PWM signals and transistor keys.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 24,
      title: "Sensors & Actuators Integration",
      faculty: "IIIT Kottayam",
      topics: [
        "Designing closed-loop feedback algorithms: Sensor input -> Logic threshold -> Actuator reaction",
        "Debugging concurrent sensor polling delays without blocking delays",
        "Managing power distribution parameters for microcontrollers and actuators"
      ],
      tags: ["Tinkercad", "Sensors", "Actuators", "Arduino"],
      miniProject: "Engineering a closed-loop smart climate cabinet switching cooling fan relays based on temperature telemetry.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 25,
      title: "Tinkercad Practical Examination",
      faculty: "IIIT Kottayam",
      topics: [
        "Time-restricted hardware layout and code design challenge",
        "Deploying multiple sensors alongside dual-motor drives",
        "Debugging logical errors and resource leaks in simulation code"
      ],
      tags: ["Tinkercad", "Embedded Systems"],
      miniProject: "Passed the comprehensive evaluation challenge: Dynamic multi-sensor node assembly within 2 hours.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 26,
      title: "Circuit Review & Code Optimization",
      faculty: "IIIT Kottayam",
      topics: [
        "Reviewing electromagnetic shielding guidelines and ground plane routing",
        "Optimizing MCU memory footprint: Replacing int values with uint8_t types",
        "Mitigating sensor debouncing logic in interrupts"
      ],
      tags: ["Embedded Systems", "Arduino"],
      miniProject: "Refactoring standard Arduino libraries to optimize RAM storage.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 27,
      title: "Mini Project Kickoff: Plant Monitoring Node",
      faculty: "IIIT Kottayam",
      topics: [
        "Product definition, bill of materials, and target telemetry parameters",
        "System flowchart design and state-machine algorithms creation",
        "Configuring local warning alarms and cloud database sync scripts"
      ],
      tags: ["Mini Project", "Embedded Systems", "Sensors"],
      miniProject: "Drawing the logical block flows and component schematics for the Plant Monitoring Node.",
      duration: "6 Hours",
      status: "Completed"
    },
    {
      day: 28,
      title: "Mini Project Build, Test & Final Demo",
      faculty: "IIIT Kottayam / Ministry Panel",
      topics: [
        "Wiring real sensors (Soil moisture, LDR, DHT) to Arduino microcontrollers",
        "Calibrating system parameters under extreme soil dryness conditions",
        "Delivering presentation, demonstration, and submitting laboratory reports"
      ],
      tags: ["Mini Project", "Embedded Systems", "Sensors", "Actuators"],
      miniProject: "Successfully built and demonstrated the smart Plant Monitoring System with warning alarms.",
      duration: "10 Hours",
      status: "Completed"
    }
  ]

  // Filter tags derived from the user request
  const filterTags = [
    "All", "Network Theory", "Arduino", "Tinkercad", "Logic Gates", 
    "Cisco Packet Tracer", "Microprocessors", "Networking", "Cloud", 
    "AWS", "Embedded Systems", "Sensors", "Actuators", "Mini Project"
  ]

  // Filtering logic
  const filteredJournal = useMemo(() => {
    return trainingJournal.filter((day) => {
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        day.title.toLowerCase().includes(query) ||
        day.faculty.toLowerCase().includes(query) ||
        (day.topics && day.topics.some(t => t.toLowerCase().includes(query))) ||
        (day.miniProject && day.miniProject.toLowerCase().includes(query)) ||
        day.tags.some(tag => tag.toLowerCase().includes(query))
      
      const matchesTag = selectedTag === "All" || day.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchQuery, selectedTag])

  const toggleDay = (dayNum) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#020612] text-gray-100 pb-20 pt-28"
    >
      {/* HEADER HERO */}
      <div className="relative h-[380px] overflow-hidden flex items-center justify-center mb-16 border-b border-cyan-500/20">
        <div className="absolute inset-0 z-0">
          <img
            src={pmvikas}
            alt="PM-VIKAS Training Program"
            className="w-full h-full object-cover opacity-15 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020612] via-[#020612]/75 to-transparent" />
        </div>

        {/* Floating grid design */}
        <div className="absolute inset-0 holo-bg opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,255,0.1)]">
            Under the Ministry of Education
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            PM-VIKAS <span className="text-cyan-400 glow-text-cyan font-mono">IoT Assistant</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            An in-depth review of my training journey, certificates, hands-on projects, and technical competencies achieved under the Prime Minister's Skill Development Initiative for Internet of Things.
          </p>

          <div className="flex justify-center gap-6 pt-4 text-xs font-mono text-cyan-400/80">
            <span>LOCATION: IIIT KOTTAYAM</span>
            <span>•</span>
            <span>DURATION: 28 TRAINING JOURNAL ENTRIES</span>
          </div>
        </div>
      </div>

      {/* THREE COLUMN GRID - DASHBOARD GRID LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: AUTONOMOUS PATHWAY TIMELINE & CREDENTIALS */}
        <div className="lg:col-span-1 space-y-10">
          
          {/* AUTONOMOUS PATHWAY */}
          <div className="glass-card rounded-[32px] p-6 border border-cyan-500/15 space-y-6">
            <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2 pb-3 border-b border-cyan-500/10 font-mono uppercase tracking-wider">
              <FaNetworkWired className="text-cyan-400" /> Autonomous Pathway
            </h3>
            
            <div className="relative pl-6 border-l border-cyan-500/20 space-y-8">
              {pathwayTimeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Point Marker */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    item.status === "Achieved" 
                      ? "bg-cyan-400 border-cyan-400 shadow-[0_0_10px_#00ffff]" 
                      : "bg-[#020612] border-cyan-500/40"
                  }`} />
                  
                  <div className="space-y-1.5">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      item.status === "Achieved" 
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30" 
                        : "bg-gray-800 text-gray-500 border border-gray-700"
                    }`}>
                      {item.status}
                    </span>
                    <h4 className="text-sm font-bold text-gray-200">{item.title}</h4>
                    <p className="text-[10px] text-cyan-500/70 font-mono">{item.date}</p>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CREDENTIALS SECTION */}
          <div className="glass-card rounded-[32px] p-6 border border-cyan-500/15 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[30px]" />
            
            <h3 className="text-xl font-bold text-cyan-300 flex items-center gap-2 pb-3 border-b border-cyan-500/10 font-mono uppercase tracking-wider">
              <FaCertificate className="text-cyan-400" /> Credentials
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-gray-100">Credentials & Accreditations</h4>
                <p className="text-xs text-gray-400 leading-relaxed mt-1">
                  Download authorized certifications issued under Ministry guidelines.
                </p>
              </div>

              <div className="p-4 bg-[#020612]/75 border border-cyan-500/15 rounded-2xl space-y-3 font-mono text-xs text-gray-300">
                <div className="flex justify-between border-b border-cyan-500/5 pb-2">
                  <span className="text-cyan-500/60 font-semibold">CERTIFICATE:</span>
                  <span className="text-cyan-300 font-bold">IoT Assistant Certificate</span>
                </div>
                <div className="flex justify-between border-b border-cyan-500/5 pb-2">
                  <span className="text-cyan-500/60 font-semibold">CREDENTIAL ID:</span>
                  <span className="text-gray-100 font-bold">PMV-IOT-2025-0941A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-500/60 font-semibold">ISSUED BY:</span>
                  <span className="text-gray-100 text-[10px] font-bold text-right">Ministry of Skill Development, GOI</span>
                </div>
              </div>

              <a
                href="/certificates/pmvikas.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:scale-[1.02]"
              >
                <FaFilePdf /> Download Certificate
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: TRAINING JOURNAL (SEARCHABLE & FILTERABLE) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SEARCH & FILTER STICKY PANEL */}
          <div className="glass-card rounded-[32px] p-6 border border-cyan-500/15 space-y-6 sticky top-24 z-20 backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-100 font-mono uppercase tracking-wider flex items-center gap-2">
                <FaBookOpen className="text-cyan-400" /> Training Journal
              </h3>
              
              {/* SEARCH BAR */}
              <div className="relative w-full md:max-w-[280px]">
                <input
                  type="text"
                  placeholder="Search journal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#020612]/70 text-gray-200 border border-cyan-500/20 focus:border-cyan-400 rounded-xl px-4 py-2.5 pl-10 text-xs outline-none transition-all font-mono"
                />
                <FaSearch className="absolute left-3.5 top-3.5 text-cyan-500/40 text-xs" />
              </div>
            </div>

            {/* FILTER CHIPS */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block flex items-center gap-1.5">
                <FaFilter className="text-cyan-500/60" /> Filter Modules
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scrollbar p-0.5">
                {filterTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wide transition-all border cursor-pointer ${
                      selectedTag === tag 
                        ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.25)]" 
                        : "bg-[#020612]/50 hover:bg-[#071120] text-gray-400 hover:text-cyan-300 border-cyan-500/10 hover:border-cyan-500/30"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* JOURNAL CARDS LIST */}
          <div className="space-y-4">
            {filteredJournal.length > 0 ? (
              filteredJournal.map((day) => {
                const isExpanded = expandedDay === day.day
                return (
                  <motion.div
                    key={day.day}
                    layout
                    className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? "border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.15)] bg-[#071120]/45" 
                        : "border-cyan-500/10 hover:border-cyan-500/30"
                    }`}
                  >
                    {/* Header trigger */}
                    <div
                      onClick={() => toggleDay(day.day)}
                      className="p-5 flex items-center justify-between cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-4 text-left">
                        {/* Day indicator */}
                        <div className="w-12 h-12 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-300 font-mono text-base font-extrabold flex items-center justify-center shrink-0">
                          {day.day < 10 ? `0${day.day}` : day.day}
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-gray-100">
                            {day.title}
                          </h4>
                          
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {day.tags.map((tag, idx) => (
                              <span key={idx} className="bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 text-[9px] font-mono px-2 py-0.5 rounded-full font-bold">
                                {tag}
                              </span>
                            ))}
                            {day.faculty && (
                              <span className="text-[10px] text-gray-400 font-mono pl-1">{day.faculty}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-cyan-400 text-base ml-4 shrink-0">
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>

                    {/* Expandable content details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-cyan-500/10 bg-[#020612]/40"
                        >
                          <div className="p-6 space-y-6 text-left text-sm leading-relaxed">
                            
                            {/* Standard Topics List */}
                            {day.topics && (
                              <div className="space-y-2">
                                <h5 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                                  <FaBookOpen className="text-xs" /> Curriculum Topics
                                </h5>
                                <ul className="space-y-2 text-gray-300 pl-5 list-disc font-sans text-xs md:text-sm">
                                  {day.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Standard Mini Project */}
                            {day.miniProject && (
                              <div className="p-4 bg-[#071120]/40 border border-cyan-500/10 rounded-xl space-y-1.5">
                                <h5 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                                  <FaMicrochip className="text-xs" /> Hands-On Activity / Mini Project
                                </h5>
                                <p className="text-gray-300 font-sans italic text-xs md:text-sm">
                                  "{day.miniProject}"
                                </p>
                              </div>
                            )}

                            {/* DETAILED EXPANDABLE THEORY: COMBINATIONAL (Day 8) */}
                            {day.hasDetailedTheory && day.detailedTheoryType === "combinational" && (
                              <div className="space-y-6 pt-2 border-t border-cyan-500/5">
                                
                                {/* Core Theory */}
                                <div className="space-y-2">
                                  <h5 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">Combinational Logic Foundations</h5>
                                  <p className="text-gray-300 text-xs md:text-sm">
                                    Combinational circuits are built from logic gates whose outputs at any time are directly determined by the present combination of inputs. Unlike sequential circuits, they contain no feedback paths or memory storage elements.
                                  </p>
                                </div>

                                {/* Equations Block */}
                                <div className="p-4 bg-[#020612] border border-cyan-500/15 rounded-xl space-y-2 font-mono text-[11px] md:text-xs">
                                  <h6 className="text-cyan-400 font-bold uppercase tracking-wider">Boolean Equations & Expressions</h6>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-gray-300">
                                    <div className="space-y-1">
                                      <span className="text-cyan-300 font-semibold block">Half Adder:</span>
                                      <div>Sum = A ⊕ B</div>
                                      <div>Carry = A · B</div>
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-cyan-300 font-semibold block">Full Adder:</span>
                                      <div>Sum = A ⊕ B ⊕ Cin</div>
                                      <div>Carry = (A · B) + (Cin · (A ⊕ B))</div>
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-cyan-300 font-semibold block">Half Subtractor:</span>
                                      <div>Difference = A ⊕ B</div>
                                      <div>Borrow = Ā · B</div>
                                    </div>
                                    <div className="space-y-1">
                                      <span className="text-cyan-300 font-semibold block">Full Subtractor:</span>
                                      <div>Difference = A ⊕ B ⊕ Bin</div>
                                      <div>Borrow = (Ā · B) + (Bin · ~(A ⊕ B))</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Truth Table Block */}
                                <div className="space-y-2">
                                  <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">Full Adder Truth Table</h6>
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-center font-mono text-[11px] border-collapse border border-cyan-500/20 text-gray-300">
                                      <thead>
                                        <tr className="bg-cyan-950/20 text-cyan-300">
                                          <th className="border border-cyan-500/20 p-2">Input A</th>
                                          <th className="border border-cyan-500/20 p-2">Input B</th>
                                          <th className="border border-cyan-500/20 p-2">Input Cin</th>
                                          <th className="border border-cyan-500/20 p-2 text-cyan-400">Sum (S)</th>
                                          <th className="border border-cyan-500/20 p-2 text-cyan-400">Carry (Cout)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">0</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td></tr>
                                        <tr><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td><td className="border border-cyan-500/20 p-1.5 text-cyan-400 font-bold">1</td></tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                {/* Recruiter friendly explanation */}
                                <div className="space-y-1.5 font-sans">
                                  <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">Recruiter Competency Review</h6>
                                  <p className="text-xs text-gray-400">
                                    Knowledge of combinational logic establishes mastery in optimizing physical digital silicon boards, minimizing logical propagation delays, and sizing addressing components (Multiplexers/Encoders) correctly inside embedded layouts.
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* DETAILED EXPANDABLE THEORY: SEQUENTIAL (Day 9) */}
                            {day.hasDetailedTheory && day.detailedTheoryType === "sequential" && (
                              <div className="space-y-6 pt-2 border-t border-cyan-500/5">
                                
                                {/* SR, JK, D, T Flip Flops */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-[#020612] border border-cyan-500/10 rounded-xl space-y-1">
                                    <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase">SR Flip-Flop (Latch Basis)</h6>
                                    <p className="text-xs text-gray-300">
                                      Simplest memory gate using NAND cross-feedback. Characteristic Equation: <code className="text-cyan-300 font-mono">Q(t+1) = S + R'Q</code>. Invalid state when S = R = 1.
                                    </p>
                                  </div>

                                  <div className="p-4 bg-[#020612] border border-cyan-500/10 rounded-xl space-y-1">
                                    <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase">JK Flip-Flop (Toggling fix)</h6>
                                    <p className="text-xs text-gray-300">
                                      Eliminates SR's invalid state by adding toggling routing when J = K = 1. Characteristic Equation: <code className="text-cyan-300 font-mono">Q(t+1) = JQ' + K'Q</code>.
                                    </p>
                                  </div>

                                  <div className="p-4 bg-[#020612] border border-cyan-500/10 rounded-xl space-y-1">
                                    <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase">D Flip-Flop (Data Delay)</h6>
                                    <p className="text-xs text-gray-300">
                                      Captures and buffers data inputs at clock transition. Characteristic Equation: <code className="text-cyan-300 font-mono">Q(t+1) = D</code>. Crucial for shift registers.
                                    </p>
                                  </div>

                                  <div className="p-4 bg-[#020612] border border-cyan-500/10 rounded-xl space-y-1">
                                    <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase">T Flip-Flop (Toggle Node)</h6>
                                    <p className="text-xs text-gray-300">
                                      Toggles state on positive edge transitions when T = 1. Characteristic Equation: <code className="text-cyan-300 font-mono">Q(t+1) = T ⊕ Q</code>. Essential for building counter chains.
                                    </p>
                                  </div>
                                </div>

                                {/* State Assignment & Reduction */}
                                <div className="space-y-2">
                                  <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">State Reduction & Assignment Methodologies</h6>
                                  <p className="text-xs text-gray-300">
                                    **State Reduction** minimizes the count of states in a sequential state machine without modifying external behavior. Implemented using **Row Elimination** (matching identical state outputs) or **Implication Charts**. 
                                    **State Assignment** applies code assignments (e.g. Binary, Gray Code, One-Hot encoding) to states, reducing flip-flop input complexity.
                                  </p>
                                </div>

                                {/* Sequential Design Steps */}
                                <div className="p-4 bg-[#020612] border border-cyan-500/15 rounded-xl space-y-2 text-xs md:text-sm">
                                  <h6 className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">Sequential Circuit Design Guidelines</h6>
                                  <ol className="space-y-1.5 text-gray-300 list-decimal pl-5 text-xs">
                                    <li>Formulate State Diagram or State Table from verbal problem specification statements.</li>
                                    <li>Apply state reduction algorithms to drop redundant states.</li>
                                    <li>Determine minimum flip-flops count ($N \ge \log_2(states)$) and assign state variables.</li>
                                    <li>Construct excitation state tables mapping current status to next status variables.</li>
                                    <li>Solve output expressions and excitation equations via Karnaugh Maps.</li>
                                    <li>Design logic schematic showing clock distribution wiring and feedback loops.</li>
                                  </ol>
                                </div>

                                {/* CircuitVerse Section */}
                                <div className="p-4 bg-cyan-950/20 border border-cyan-500/20 rounded-xl space-y-2 text-xs">
                                  <h6 className="text-cyan-300 font-mono font-bold uppercase flex items-center gap-1.5">
                                    <FaCode /> CircuitVerse Simulation Labs
                                  </h6>
                                  <p className="text-gray-300">
                                    Simulated multiple finite state machine nodes, analyzing transient clock races, setups, and hold limits directly in CircuitVerse virtual sandbox panels.
                                  </p>
                                </div>

                              </div>
                            )}

                            {/* Faculty panel */}
                            <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 pt-2 border-t border-cyan-500/5">
                              <span>INSTRUCTOR: {day.faculty || "IIIT Panel"}</span>
                              <span className="text-green-400 font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Assessment: Verified
                              </span>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                )
              })
            ) : (
              <div className="text-center py-16 text-gray-500 font-mono space-y-2">
                <FaInfoCircle className="text-3xl text-cyan-500/40 mx-auto" />
                <p>NO JOURNAL ENTRIES DETECTED.</p>
                <p className="text-xs text-cyan-500/30">Please search with tags, day title or adjust tag selection.</p>
              </div>
            )}
          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default PmVikas