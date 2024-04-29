# LAB NOTEBOOK

## Notebook Entry: January 24th 2024

### Objectives:

- Write a web post for project so scope out what projects I can do
- Brainstorm ideas on what a project could entail with the project constraints

### Work Session Record:

Wrote the following web post for our chosen project

Create an insole to track where as you hike you experience the most pounding. I'd use the same sort of idea as existing ski boot tackers but adjust it to hiking. Would use a conductive sheet to measure where there is most pressure. Also could integrate an accelerometer and other sensors to summarize a hike.

## 1/26

approved for RFA

## Notebook Entry: January 29th 2024

### Objectives:

1. To formulate a comprehensive project proposal outlining the development of an insertable insole with integrated sensors for hikers.
2. Identify the key components, objectives, and criteria for success of the project.
3. Discuss and define the technical specifications and functionalities of the proposed solution.

### Work Session Record:

During today's work session, the focus was on drafting sections of the project proposal for a specialized product aimed at enhancing hiking safety through real-time foot stress monitoring. We delved into the problem statement, acknowledging the necessity for a solution that can mitigate injury risks by tracking various factors affecting foot dynamics during hikes, such as gait, terrain, and fitness levels.

Our proposed solution centers around the development of an insertable insole equipped with an array of sensors including accelerometers, gyroscopes, and pressure sensors. These sensors are crucial for monitoring foot movements and pressures, providing valuable data for injury prevention. We emphasized the importance of selecting durable, comfortable materials for the insole and ensuring seamless wireless connectivity for real-time feedback.

In detailing the solution components, we discussed integrating status LEDs for visual indicators, a user-friendly smartphone interface, and physical controls on the insole for convenient data management. Additionally, we outlined plans for powering the device using a lithium-ion battery with sufficient capacity to support extended hikes.

To measure the success of our project, we established key metrics including sensor accuracy, insole comfort and durability, efficient data communication, battery life, and user interface usability. Furthermore, we highlighted the potential for data analytics and stressed the significance of professional interpretation of the collected data for actionable insights.

This work session laid the groundwork for a comprehensive project proposal, addressing both the technical aspects of the solution and the criteria for its success, while also considering potential future developments and the broader implications of the project.

#### Diagrams and Figures:

![voltage divider velostat](./Voltage_divider_verlostat.png)

#### Conclusion:

This session focused on drafting a detailed project proposal for a sensor-integrated hiking insole. The team outlined the problem, proposed a solution with specific components, and defined the success criteria for the project. The proposal includes considerations for sensor accuracy, user comfort, data communication, and power management, aiming to enhance the hiking experience and reduce injury risks.

## Notebook Entry: January 30th 2024

### Objectives:

- To update the project proposal by incorporating feedback and new ideas.
- Add details on data storage on the device and the process for offloading data after a hike.
- Introduce considerations for filtering noise through Digital Signal Processing (DSP).
- Clarify the scope of advice and recommendations provided by the project in relation to medical expertise.

### Work Session Record:

#### New Sections on Design Doc:

- **On-Device Data Storage and Offloading:** Added a new section to the proposal detailing the functionality for storing data directly on the device during hikes. This would allow users to save battery on their smartphones and offload data to a smartphone or computer after the hike. Discussed potential memory requirements and data compression techniques to maximize storage efficiency.
- **Noise Filtering through DSP:** Outlined the challenges of filtering out noise from sensor data, such as irregular impacts or external pressures that do not contribute to meaningful analysis. Included a brief overview of DSP techniques that could be employed to clean the data, such as filtering algorithms and thresholding.

#### Revisions to Existing Sections:

- Revised the **Solution Components** and **Criterion for Success** sections to reflect the new focus on data storage and noise filtering.
- Enhanced the **User Interface** section to emphasize the importance of visualizing data in an accessible manner for users, with the option for exporting data for professional analysis by a podiatrist.

#### Clarification on Medical Advice:

- Added a disclaimer clarifying that while the project aims to provide useful feedback on foot stress and hiking technique, it does not offer medical advice. Stressed the importance of consulting with a professional for a thorough analysis of the data.
- Suggested including references to existing studies on foot pressure and hiking injuries as a basis for any general recommendations made by the app.

### Conclusion:

In this session, the project proposal was significantly enhanced to address feedback and incorporate new ideas. The addition of on-device data storage and offloading mechanisms, along with considerations for noise filtering, strengthens the proposal. By clarifying the project's stance on medical advice, we ensure that the project remains focused on providing value to hikers through data analysis and visualization, while respecting the boundaries of our expertise. This revised proposal lays a solid foundation for developing a tool that enhances hiking safety and enjoyment.

## Notebook Entry: January 31st 2024

Project Approved

## Notebook Entry: February 2, 2024

### Objectives:

- Initialize lab notebooks
- Look into design ideas for the insole system
- Look into how to make the ESP 32 PCB

### Work Session Record:

Created GitHub to contain lab notebooks, PCB design files, Web application, and any miscellaneous resources needed for our project. I followed the guide listed on the course wiki to format our file structure. Additionally, I looked at a few online resources for existing components that we could consider using on our final design.

### works cited

- https://www.amazon.com/Pressure-Sensing-Intelligent-Accessory-Pressure-Sensitive/dp/B09RWYRV5T
- https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf

## Notebook Entry: February 15, 2024

### Objectives:

- add to design doc
- flush out sections to add more detail to the devices inner workings

### Work Session Record:

### Software Design Section for Smart Insole Project:

- Detailed aspects of "Data Collection, Aggregation, and Transmission" and "Web Interface".

### Data Collection, Aggregation, and Transmission:

- Described the software flow, starting from Bluetooth pairing mode and transitioning into main operational phases.
- The software records sensor data during hikes and writes this information to storage.
- It sends data packets to a connected device via a web interface for real-time tracking or backup.

### Web Interface:

- Outlined the development of a web interface for offloading data from the ESP32 device.
- Detailed the use of BLEServer, BLEService, and BLECharacteristic modules for Bluetooth services.
- The interface will utilize the Web Bluetooth API for connecting to the ESP32, enabling data transfer and interaction with device services and characteristics.
- Plans include displaying hiking statistics through charts and graphs using Next.js and various NPM modules.

## Diagrams and Figures:
![software](2/15/software_flow_chart.png)
![web](2/15/web_interface_prototype.png)

## Conclusion:

- Successfully documented the software design aspects of the Smart Insole project, focusing on efficient data handling and user interaction through a web interface.

## Notebook Entry - February 17th

### Objectives:

- Illustrate the wiring diagram and the physical design for clarity and implementation guidance.
- Outline the electronic principle of the voltage divider applied to the pressure sensors.
- Create diagrams for physical design of smart insole system
- Create a blow up of the Controller device and label what function it will perform
- Update the design document with the new diagrams and technical explanations.

### Work Session Record:

1. **Diagrams Created and Integrated:**

- Completed a wiring diagram for the pressure sensors within the insole, highlighting the use of a voltage divider circuit to measure variations in pressure .
- Developed a visual representation of the physical design of the smart insole, detailing the placement of pressure sensors, wiring, and connectivity to the external sensor box.
- Illustrated a detailed view of the external sensor box, indicating the functions of various buttons, LEDs, and the USB-C charging port.

2. **Technical Concept Elaborated:**

- Explained the electrical concept of a voltage divider in the context of pressure sensors. As the resistance of a pressure sensor increases with applied pressure, the voltage across it changes. This change in voltage is used as an analog signal representing pressure levels.
- Elaborated on how this principle is key to the function of our smart insoles, allowing for accurate pressure readings which are then transmitted to a web interface via Bluetooth.

3. **Design Document Update:**

- Added the new diagrams to our design document
- Included annotations in the diagrams for better understanding and implementation.

#### Diagrams and Figures:

- **Pressure Sensor Wiring Diagram:** A schematic showing the arrangement of resistors and connections to the microcontroller to form a voltage divider network.
![Pressure_sensor_wiring](2/17/Pressure_sensor_wiring.png)
- **Physical Design Illustration:** A graphical layout of the insole, displaying sensor positions, wiring paths, and connectivity to external components.
![Physical_design](2/17/Physical_design.png)
- **External Sensor Box Design:** A blow-up view of the external sensor box with labeled buttons and ports.
![Device_blow_up](2/17/Device_blow_up.png)


#### Equations:

- Voltage Divider Equation: V_out = V_in \* (R2 / (R1 + R2))
- Where V_out is the voltage across the pressure sensor (R2), V_in is the input voltage, R1 is the fixed resistor, and R2 is the variable resistor (pressure sensor).

## Notebook Entry: February 19, 2024

### Objectives:

- Integrate the microcontroller into the sensing subsystem.
- Add control buttons to the status subsystem.
- Make the wire legend distinct for each subsystem.
- Update the requirements and verifications table.
- Calculate storage needs for data collection and finalize storage solutions.

### Work Session Record:

- Edited the block diagram to include the ESP32 microcontroller within the sensing subsystem for enhanced data processing and control.
- Incorporated control buttons (start/end hike, Bluetooth connectivity) into the status subsystem, allowing user interaction directly from the device.
- Revised the wire legend to ensure clear distinction among the subsystems, facilitating easier debugging and maintenance.
- Updated the requirements and verification table to reflect the changes made to the system design and functionality.
- Performed a crucial calculation for storage requirements based on sensor data collection rates:
- 4 bytes per float × ~54 sensors × 5 Hz × 60 sec/min × 60 min/hour × 6 hours × 4 hikes = 93.312 Megabytes. This calculation underscored the need for an SD card due to the ESP32 having only 512 KB of onboard memory.

## Equations, Diagrams, and Figures:

- Updated block diagrams now feature the microcontroller as part of the sensing subsystem and illustrate the new connections for the control buttons within the status subsystem.
![block](2/19/block_diagram.png)



## Conclusion:

The session successfully integrated essential components and updated the design documentation to reflect these changes. The calculated storage requirements led to the decision to use an SD card, ensuring sufficient data storage capacity for the project's needs.

**Date:** February 26, 2024

### Objectives:

- Present our Smart Insole design document to the project group.
- Gather feedback for further refinement and improvement.

### Work Session Record:

Today, we presented our Smart Insole design document, covering the concept, physical and software design, power requirements, and safety considerations. The device, aimed at hikers to monitor foot pressure and movement, integrates pressure sensors, accelerometers, and gyroscopes for data collection, which is then transmitted to a smartphone app for analysis and feedback.

## Feedback Received:

- Incorporate thermal calculations to ensure device components operate within safe temperature limits.
- Perform power draw calculations to accurately predict device longevity during use, considering the power consumption of sensors, microcontroller, and other components.

### Work Session Record:

- Reviewed the design document's sections on hardware design, focusing on the microcontroller, sensors, and power subsystem to identify areas lacking thermal and power draw considerations.
- Discussed strategies for thermal analysis, including modeling component heat generation and dissipation.
- Outlined a plan to calculate power consumption based on the operating voltage and current of each component, aiming to estimate battery life accurately.

## Next Steps:

1. Conduct thermal analysis for each critical component to ensure temperature remains within operational limits.
2. Calculate total power consumption under typical usage scenarios to estimate battery life and identify potential improvements for energy efficiency.
3. Revise the design document to include these calculations and any necessary design adjustments identified through this analysis.

## Notebook Entry - February 29, 2024

### Objectives:

- Advance understanding and skills in PCB design for ESP32 using KiCad software.
- Learn how to incorporate various components into the PCB design.
- Understand the use of LDOs for board protection.
- Adapt an existing design to fit the requirements of the smart insole project.

### Work Session Record:

During this session, I embarked on a comprehensive tutorial that spanned approximately 4 hours, dedicated to creating a custom PCB for an ESP32 S3 chip. This tutorial was instrumental in guiding me through the process of reading humidity levels using an ENS210 module and subsequently activating an RGB light based on the humidity readings. Given that the humidity sensor's functionality was not pertinent to our smart insole project, I modified the design to exclude this component.

Throughout the tutorial, I acquired valuable skills and knowledge in several key areas:


### figures
- **Importing Footprints and Components:** schematic for the innital PCB
![PCB_Schematic](2/29/PCB_Schematic.png)
- **Understanding and Implementing LDOs:** A significant portion of the tutorial was dedicated to Low Dropout Regulators (LDOs). I learned how LDOs are crucial for protecting the PCB by stabilizing voltage levels. Moreover, I gained insights into calculating thermal limits for LDOs, ensuring that the board operates within safe temperature ranges.
![ldo](2/29/ldo.png)

### resources
- https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf


### Equations:
The equation used for calculating the thermal limit was:
ΔT = Pdiss x Rθja
where Pdiss is the power dissipation and RθJA is the junction-to-ambient thermal resistance.

## Conclusion:

Today's session was highly productive, significantly advancing my proficiency in PCB design for the ESP32 chip using KiCad. By following the detailed tutorial, I not only adapted an existing design for our project's needs but also deepened my understanding of crucial components and calculations needed for a successful PCB design. Moving forward, I will continue to refine the design and explore additional functionalities that could enhance the smart insole project.

## Notebook Entry: March 1st

### Objectives:

- Address missing footprints for buttons, resistors, capacitors, and pin headers in the PCB design from February 29.
- Ensure the ability to work asynchronously on individual devices without issues related to KiCad's library imports and paths.

### Work Session Record:

During this session, our primary goal was to rectify an oversight from the initial PCB design created on February 29. We discovered that the design was lacking essential footprints. This was relatively straightforward and we just had to use a large enough SMD component.

However, we encountered significant challenges related to KiCad's library management system, which hampered our ability to work efficiently across different devices. As we attempted to work asynchronously, moving the project files from one device to another led to multiple instances of library import errors and path misconfigurations. This resulted in the unlinking of previously linked footprints, causing a critical issue where updating the PCB from the schematic would fail due to these broken links. We were able to relink footprints every time we opened the project after an update had been pushed to our GitHub, but this was a very hacky solution.

## Diagrams and Figures:

- Image: errors
![errors](3/1/errors.png)
- Image: Update Footprint
![footprint](3/1/footprint.png)

In the future, we will need to come up with a more permanent solution to migrating from device to device.

## Notebook Entry: March 4th

### Objectives:

- Implement debouncing for buttons in the PCB design, following the guidelines from the CAD assignment on the course wiki.
- Collaborate with the team to finalize the initial PCB schematic design.
- Attend a PCB design review session for expert advice on voltage regulation and battery considerations.

### Work Session Record:

This session's agenda was primarily focused on refining our PCB design, with specific attention to debouncing the buttons, a critical step as outlined in our CAD assignment available on the course wiki. The process involved the integration of hardware debouncing mechanisms into our design to ensure reliable button operation, preventing the erroneous signals that can result from mechanical switch bounce.

Simultaneously, we worked as a team to put the finishing touches on our initial PCB schematic design. This involved a comprehensive review of all components and connections to ensure that our design was robust and free of errors. The collaborative effort was crucial in identifying and rectifying minor issues that had previously gone unnoticed, thereby strengthening the overall design.

A significant portion of the session was also dedicated to a PCB design review session, where we received guidance from a TA. One of the insights gained was the necessity of regulating voltage with our Low Dropout Regulator (LDO). The TA highlighted a potential issue with our power supply strategy, particularly concerning the use of a lithium-ion battery with a voltage range of 3.7 to 3.0 volts and an LDO with a low cutoff voltage of 3.43 volts when outputting 3.3 volts. This advice prompted us to reevaluate our power management approach to ensure that our device could operate reliably across the full range of the battery's voltage without encountering power instability due to the LDO's cutoff threshold.

## Diagrams and Figures:

- Button Debouncing Circuit Diagram
![button](3/4/button.png)


This session was pivotal in advancing our PCB design project, bringing us closer to a finalized schematic that meets both our functional requirements and the technical specifications outlined in our course. The insights from the PCB design review session were particularly helpful, underscoring the importance of power management and component selection in ensuring the reliability and longevity of our design. Future sessions will be dedicated to adjusting our power supply strategy and continuing to refine our schematic based on the feedback received.

## Notebook Entry: March 5

### Objectives:

- Conduct routing and placement of SMD components.
- Address and correct DRC violation errors.

### Work Session Record:

In previous work sessions, I followed an online tutorial intended for an ESP32 mini chip. However, this approach proved to be somewhat problematic as the tutorial's specifications did not align with the ESP32 microcontroller models we had access to in our lab. This discrepancy required significant modifications to the circuitry, particularly in the method through which we’d be interfacing with the board, along with a few minor adjustments to ensure compatibility with our hardware.

In hindsight, a more thorough preliminary research phase could have saved considerable time and effort. I later discovered that our course website offers example PCB files specifically tailored to the lab's hardware, which would have been an ideal starting point for our project. This realization underscored the value of consulting available resources and seeking guidance from teaching assistants before delving into design work.

The bulk of the session was consumed by the routing and placement of Surface-Mount Device (SMD) components on our PCB. The goal was to optimize the layout to prevent overlapping connections among components, a task that required careful planning and spatial awareness.

## Figures:

- Figure: Completed Routing of PCB
![pcb](3/5/pcb.png)


Through the design and debugging process, I have developed a solid understanding of basic CAD mechanics, which I anticipate applying to future projects.

## Notebook Entry: March 6

### Objectives:

- Conduct routing and placement of Surface-Mount Device (SMD) components on our PCB.
- Optimize component layout to prevent overlap and ensure efficient use of space.
- Address and resolve Design Rule Check (DRC) violation errors, specifically focusing on the min angular width violation.

### Work Session Record:

The focus of this session was on the placement and routing of SMD components for our PCB project. The challenge lay in strategically organizing the components to avoid any overlap of connections, which required a careful consideration of each component's footprint and the available board space. This task was critical in ensuring that our design was not only functional but also adhered to best practices in PCB layout design.

Upon completing what we initially believed to be the final design, I took the lead in addressing the DRC violation errors that emerged. DRC is a crucial step in PCB design, as it helps identify and rectify issues that could lead to manufacturing defects or functional failures.

One of the most prevalent issues we encountered was the min angular width violation. This particular error proved to be a significant obstacle due to the small size of the pins on the components we had chosen. The violation was primarily because the pin dimensions fell below the minimum width allowed by our design rules, which could potentially lead to problems in the manufacturing process.

To mitigate this issue, we decided to increase the diameter of the ground pads associated with the problematic components. This adjustment was carefully calculated to ensure that it would not introduce new layout challenges, while also resolving the min angular width violation. The process involved detailed analysis and modification of the PCB design to accommodate the larger pad sizes without compromising the overall layout or the functionality of the board.

## Figures:

- **Figure 1: DRC Violation Errors** - Highlighting the most common issue we encountered, the minimum angular width violation. This error was particularly challenging due to the small pin sizes of the components we selected, necessitating an increase in the diameter of the ground pads for resolution.
![angw](3/6/angw.png)
- **Figure 2: Ground Pins for the ESP32 Chip** - Demonstrates the adjustments made to ground pad sizes to accommodate the ESP32 chip, ensuring proper fit and connectivity.
![repaw](3/6/repaw.png)

This session was geared towards advancing our PCB design towards finalization. By addressing the DRC violation errors, specifically the challenging min angular width violation, we moved closer to ensuring that our design would be manufacturable and function as intended. In this session, we ended up reducing our total DRC violation errors from ~200 to 43 errors.

## Notebook Entry: March 18

### Objectives:

- Correct programming and boot issues on PCB identified by Jason at office hours

### Work Session Record:

In previous work sessions, I followed an online tutorial intended for an ESP32 mini chip. However, this approach proved to be somewhat problematic as the tutorial's specifications did not align with the ESP32 microcontroller models we had access to in our lab. This discrepancy required significant modifications to the circuitry, particularly in the method through which we’d be programming the board, along with a few minor adjustments to ensure compatibility with our hardware. I had thought previously to just use the USB connection we had to program and interface with the ESP 32 chip. However Jason brought it to our attention in office hours that this would be a very finicky method and we should instead use UART headers in order to program and test our PCB design.

In hindsight, a more thorough preliminary research phase could have saved considerable time and effort. I later discovered that our course website offers example PCB files specifically tailored to the lab's hardware, which would have been an ideal starting point for our project. This realization underscored the value of consulting available resources and seeking guidance from teaching assistants before delving into design work.

The bulk of the session was consumed by the reworking of our schematic to include the required ESP 32 programming circuitry.

## Figures:

- Figure: Completed Routing of PCB
![new_sch](3/18/new_sch.png)

Through the design and debugging process, I have developed a solid understanding of basic CAD mechanics, which I anticipate applying to future projects.

## Notebook Entry: March 19 2024

### Objectives:

- Conduct routing and placement of Surface-Mount Device (SMD) components on our PCB.
- Optimize component layout to prevent overlap and ensure efficient use of space.
- Address and resolve Design Rule Check (DRC) violation errors, specifically focusing on the min angular width violation.

### Work Session Record:

The focus of this session was on the placement and routing of SMD components for our PCB project. The challenge lay in strategically organizing the components to avoid any overlap of connections, which required a careful consideration of each component's footprint and the available board space. This task was critical in ensuring that our design was not only functional but also adhered to best practices in PCB layout design. These changes were needed as we updated our PCB to reflect changes to the programming header.

I took the lead in addressing the DRC violation errors that emerged. DRC is a crucial step in PCB design, as it helps identify and rectify issues that could lead to manufacturing defects or functional failures.

One of the most prevalent issues we encountered was the min angular width violation. This particular error proved to be a significant obstacle due to the small size of the pins on the components we had chosen. The violation was primarily because the pin dimensions fell below the minimum width allowed by our design rules, which could potentially lead to problems in the manufacturing process. This problem was similar to that of March 6th but we were needing to complete and fix these errors in order to place our PCB order by 4:45 Tuesday

Upon finishing our DRC checks I took the lead in working to generate the Gerber files and uploading them to PCB for a final DRC check. This ultimately was error free which was super nice as we didn't have to fix anything last minute. However it did take a lot longer than expected to get the gerber files reviewed on PCB. ~1 hour vs the estimated 15 minutes.

## Figures:

- **Figure 1: DRC Violation Errors** - Highlighting the most common issue we encountered, the minimum angular width violation. This error was particularly challenging due to the small pin sizes of the components we selected, necessitating an increase in the diameter of the ground pads for resolution.
![angw](3/6/angw.png)
- **Figure 2: Ground Pins for the ESP32 Chip** - Demonstrates the adjustments made to ground pad sizes to accommodate the ESP32 chip, ensuring proper fit and connectivity.
![repaw](3/6/repaw.png)

This session was geared towards advancing our PCB design towards finalization. By addressing the DRC violation errors, specifically the challenging min angular width violation, we moved closer to ensuring that our design would be manufacturable and function as intended. In this session, we ended up reducing our total DRC violation errors from ~200 to 43 errors.

## Notebook Entry: March 25 2024

### Objectives:

- create web app
- test out data display
- learn how to manipulate data within web app

### Work Session Record:

looked into several web development frameworks for our Smart Insole project and determined that plain HTML lacked the advanced features needed for Bluetooth connectivity and dynamic data visualization, while Next.js was more complex than required due to us not needing a backend. React emerged as the best choice due to its balance of functionality and ease of use, along with its support for NPM modules. I then initialized a new React application, removing unneeded boilerplate to tailor it to our project's requirements. Additionally, I explored the Chart.js module, finding it versatile for our needs to display data from the Smart Insole, making it the selected tool for our data visualization efforts.

### Figures:

![chart js examples](./chartjs_example.png)

## Notebook Entry: March 31 2024

### Objectives:

- work on adding chart.js to react app
- allow it to ingest data in list format that we would send it
- for now display random data

### Work Session Record:

Worked with react to install and integrate the chart.js NPM module. This module allows us to use charts like line, pie, bar, bubble, scatter, radar, and more. We will use this to display user data in an easily understandable way. I installed the module using `npm install chart.js react-chartjs-2`. This was a point of contention as I spent a lot of time trying to use chart.js which doesn't integrate with react well. After which I googled how to add this in react and there were some helpful links. From here it was easy to integrate the module and display random data on a line chart which will be most useful in displaying user data. This will be used for elevation gain charts, distance charts, step charts, average speed charts, and many more.

### Figures:

![chart js in react](./chartjs_react.png)

### Works Cited:

- https://blog.logrocket.com/using-chart-js-react/

## Notebook Entry: April 2 2024

### Objectives:

- work with dev board to transfer data from esp32 to web interface
- transmit multiple types of data
- transmit data to the dev board to control it
- send acknowledge packets to device to indicate successful data transfer

### Work Session Record:

Worked with Tony to write arduino code to set up a bluetooth server that our web interface could connect to and communicate with. I was in charge of the react side while Tony worked on setting up his drivers to program the ESP 32 dev board with the Arduino IDE. We stumbled upon a super helpful resource which detailed arduino and html code which would allow up to receive an incrementing number upon connection of a device to the ESP 32. This was done with HTMl and needed to be highly adapted to our React interface. For example the tag selection doesn't work with React and instead we use onclick={} properties. Another thing we needed to correct was the dynamic updates and to do this we had to use the UseState react hook. This eventually worked and was able to connect with the programmed esp32 from Tony. I then edited the code to accept more than just integer values.

### Code

- `const [variable, setVariable] = useState("")`
- `onclick={function}`

### Figures:

![bluetooth connection in chrome](./Bluetooth_connection_chrome.png)

![react bluetooth interface](./react_interface.png)

### Works Cited:

- https://randomnerdtutorials.com/esp32-web-bluetooth/

## Notebook Entry: April 4 2024

### Objectives:

- work building the ESP 32 PCB
- _test the ESP32 with programming and our web interface_

### Work Session Record:

Worked with Alyssa to solder on our SMD components with the help of solder paste and a solder mask. This was a learning process as we first used too much solder and it bridged the pads. However next we used too little and the component didn't connect to the pads. After which we used a tad too much making some pads bridged and some not. At this point we looked into programming and realized that the pins supposed to connect to the programming pins were not mapped right. D+ was supposed to be mapped to GPIO 19 and D- was supposed to be on GPIO20. After further analysis into our board connections we realized that most of the GPIO had special functions and couldn't be used for general purpose. Other areas we messed up were our strapping.

- Chip boot mode – GPIO and GPIO46
- VDD_SPI voltage – GPIO45
- ROM messages printing – GPIO46
- JTAG signal source – GPIO3

We mapped these pins willy nilly or just didn't have them and didn't realize that they couldn't be remapped. As such we decided to not continue with the PCB creation. Instead we moved on to redoing our PCB to account for the mismapped pins. Another thing we realized was wrong was that we had to map out the voltage divider to the Analog to Digital compatible pins in order to read our voltage outputs reliably. As such we took this time to redo our PCB and get an initial version to look over and adjust after.

### Figures:

![innital PCB](./April4PCB.png)

## Notebook Entry: April 5 2024

### Objectives:

- Correct DRC errors on Initial PCB from yesterday
- Work on making sure connections are right on our PCB
- Work with Alyssa to prune board of unnecessary components

### Work Session Record:

Worked to fix DRC errors when making the board. These included the ones detailed earlier where we were having min angular width errors on footprints of some of our components including the Micro USB connector, the SD card holder, and a few other such components. Throughout this process we worked to add in vias for circuit protection. Additionally we had to connect isolated islands or reconnect components such that we didn't end up with these islands. This process was quite long but can be summed up by saying googled and corrected errors on our PCB in Kicad.

After I worked on correcting the DRC errors Alyssa wanted to make the PCB smaller. As such we discussed components to remove and decided on removing mounting holes and buttons on the board to reduce board size so it is easier to mount to a shoe. This reduced the size quite a bit but caused Alyssa to take over on correcting the new DRC errors.

### Figures:

![Error corrected PCB](./April5PCB.png)

## Notebook Entry: April 9 2024

### Objectives:

- Get a PCB made and correct connection errors
- Get TA help to look over and verify our PCB board
- send PCB gerber files out for PCBWay printing

### Work Session Record:

We needed to remake a bunch of connections again as we realized that we needed to remap channel 2 of our analog to digital pins to channel 1. This was because when the bluetooth module is active we couldn't read from these pins as the bluetooth module would be using them. Additionally I had to conduct thermal analysis knowing the bluetooth module would use 300 mA of power which our LDO would drop 1.7 V of power. This means that .51 Watts of power would be dissipated by the LDO. This seems to be ok but may need a heatsink on top to reduce this power draw.

We realized that the bluetooth module when on would deactivate channel 2 for Analog to Digital compatible pins and as such had to account for that by remapping pins. However we were unable to remap all pins and as such had to think of a different solution. I thought to add another button to activate bluetooth pairing or deactivate it while a hiker wanted to offload data. This would shut off the data recording and would allow for us to validate that we wouldn't use channel 2.

Alongside this I fixed many DRC errors and also remapped wires. Additionally I placed an updated SD card footprint on the board as our original one was throwing an error which neither the TA, Google nor I could figure out. Jason at his office hour looked over our board and realized we needed to move our micro usb to the edge which I did.

Some errors I fixed in office hours were:

- foot print expected though hole got SMD
- Same error on example ESP 32 board and Jason confirmed this was expected
- min spoke count expected 2 got 1 when copper ground sheets only connect by one direction to ground pins.
- Same error on example ESP 32 board and Jason confirmed this was expected
- min angular width of default footprints for micro USB
- Same error on example ESP 32 board and Jason confirmed this was expected
- rear solder mask bridges items with different widths on the solder jumper for the strapping pins
- Same error on example ESP 32 board and Jason confirmed this was expected

### Figures:

![Error corrected PCB](./April5errors.png)
![apurture](4/9/apurture.png)
![final_pcb](4/9/final_pcb.png)
![pins](4/9/pins.png)

## Notebook Entry: April 10 2024

### Objectives:

- work on finding parts to order for final PCB
- take part numbers on Kicad and find parts from verified vendors

### Work Session Record:

This work session I worked with Alyssa to match parts found on our schematic in Kicad with parts I could find on DigiKey, Mouser, Amazon, and the ECE supply shop. This process gave me a chance to introspect on the needs we had and give our connections a last once over in terms of making sure things were connected to the right ESP 32 pins. Additionally this process was needed as some vendors were out of some of the parts and we had to find alternatives from other vendors. This wasn't too hard as most parts were available on other sites.

### Figures:

## Notebook Entry: April 13 2024

### Objectives:

- work on micro SD card read
- solder pin headers
- find pin connections for SPI

### Work Session Record:

I wanted to prototype the file read/write/edit operations on the SD card with the ESP 32 S3 dev board. The first step was to get the SD module in a state which would allow us to read. I chose the SD card module as it used the least components between the pins and the pinouts. To get the board working I had to solder on a pin header to attach wires to and from the ESP 32 dev board. I found a few tutorials online on how to hook up the SD card module to the ESP32. However it was a different version of the chip/board and the pinouts had different protocols. This forced me to try and remap the pins to the different ones. After browsing I found a reddit post with the following pinout "MOSI (FSPID) aligns to GPIO11, MISO (FSPIQ) aligns with GPIO13, and SCK (FSPICKLER) aligns with GPIO12''. This all online code I tried ended up working with the Arduino DS card and SPI modules.

### Figures:

### Sources:

- https://www.reddit.com/r/esp32/comments/w2e2gl/help_regarding_the_esp32s3_pins_for_spi/
- https://forum.arduino.cc/t/esp32-s2-sd-card-interfacing/969091/7
- https://www.programmingelectronics.com/esp-32-sd-card-test-and-hardware-setup/#:~:text=The%20micro%20SD%20card%20reader,can%20talk%20to%20each%20other.
- https://www.lucadentella.it/en/2021/01/13/esp32-arduino-sd-card-con-pin-custom/

## Notebook Entry: April 14 2024

### Objectives:

- work to adjust code to work with non-default pins

### Work Session Record:

Our PCB design on Kicad mapped the pins to different places than the pins I had used yesterday. As such I physically changed the pin to the pin out found on the Kicad. This caused the operations to break and I had to find a custom way to assign pins for SPI communication. This caused a lot of frustration as no matter what I tried I was not able to get it to work.

### Figures:

## Notebook Entry: April 16 2024

### Objectives:

- finalize part order
- order components

### Work Session Record:

I worked this morning on going through the part order process. This was a long process that took a while to add everything to the cart. I also had to order from each vendor separately and take into account if things were in stock or not as the lead time would not allow for us to get these parts in time. Additionally, I had to compile a list of parts needed from the electronics services shop.

### Figures:

![PCB part order](./AApril16_purchasing.png)

## Notebook Entry: April 17 2024

### Objectives:

- work to correct part orders

### Work Session Record:

The NPN transistors I had ordered on Mouser sadly went out of stock overnight and now had a lead time of ~2 months. This was unacceptable as we wouldn't get our parts on time and would not be able to build our PCB. As such we canceled this order and made a new order on digi Key which did have the part in stock. I kept in constant communication with the purchasing office to make sure the parts were able to arrive on time.

### Figures:

![canceled](April23_canceled.png)

## Notebook Entry: April 18 2024

### Objectives:

- Demo
- print enclosure

### Work Session Record:

This day we demoed our bread boarded smart insole device to our TA and got feedback on what we should prioritize and what our estimated point total would be. This was a lot lower than we wanted and caused us to redouble our efforts towards creating a working PCB. I also worked to create a printed enclosure for our PCB which could be mounted with velcro or with a clip to the inside of the shoe. I worked to design the part in Fusion 360 where I was somewhat comfortable with 3D modeling. I used the dimensions on Kicad to create an enclosure that would fit our PCB. This was an important process as one of our high level requirements was to make a modular design which would not impede a hiker. I tried to design this enclosure to be as compact as possible while still maintaining functionality. This required holes for LEDs, buttons, and wires to get through. Additionally I consulted the relevant footprint datasheets for the dimensions of the components which would allow us to fit in the pcb and the components.

### Figures:

![placement](pcb_images/placement.jpeg)
![measure1](pcb_images/measure1.jpeg)
![measure2](pcb_images/measure2.jpeg)
![kicad](pcb_images/kicad.png)
![3dprinting](pcb_images/3dprinting.jpeg)
![worn](pcb_images/worn.jpeg)
![no](pcb_images/no_usb_and_sd.jpeg)

### Sources:

- https://www.sparkfun.com/datasheets/Components/LED/COM-09590-YSL-R531R3D-D2.pdf
- https://omronfs.omron.com/en_US/ecb/products/pdf/en-b3s.pdf

## Notebook Entry: April 19 2024

### Objectives:

- make adjustments to tolerances
- add holes for SD card and Micro USB
- print updated enclosure

### Work Session Record:

Worked with fusion360 to again remake the 3D printed enclosure which would fit on a user's shoe. We realized once inserting the PCB into the enclosure that the IO would not be able to be accessed. This would not be ideal as users would need to be able to access the SD card and be able to charge our device. As such I worked to add these in again using the kicad measurements. Additionally I consulted the relevant footprint datasheets for the dimensions of the components which would allow us to fit in the pcb and the components. Additionally the PCB barely fit into the enclosure and as such I scaled up the model by factor 1.01 to account for the expansion and tolerances which may occur when printing with FDM. These I thought would be a final print so I tried using resin as it would be much higher quality and allow for more accurate parts. This mentality and thought process however was a hindrance as it forced me to wait a while for the resin printers to print. Effectively 3x my print time on parts. I also had to use labs which were only open from 4-10pm and 5-11pm. This truly limited the time I'd be allowed to work and as such slowed down development. The resin printing process required a custom slicer for each lab. After the print I'd have to take care not to get resin on me as it is toxic. Additionally I would have to do a 15 minute wash cycle preceded by a 20 minute cure cycle so the resin can harden. However there was an issue with the resin printer as there was a massive hole in one of the enclosures.

### Figures:

![resinlayout](pcb_images/resin_layout.jpeg)
![resin_printing](pcb_images/resin_printing.jpeg)
![Resin_curing](pcb_images/Resin_curing.jpeg)
![Resin_print](pcb_images/Resin_print.jpeg)
![resin_print_back](pcb_images/resin_print_back.jpeg)
![resin_print_top](pcb_images/resin_print_top.jpeg)

### Sources:

- https://au.mouser.com/datasheet/2/448/Yamaichi_Electronics_08162018_PJS008U-3000-0_RevD-1391577.pdf
- https://cdn.amphenol-cs.com/media/wysiwyg/files/documentation/datasheet/inputoutput/io_usb_micro.pdf

## Notebook Entry: April 22 2024

### Objectives:

- make adjustments to cad since PCB has thickness

### Work Session Record:

Worked to adjust the 3D fusion model to account for the PCB and its ~2 millimeters of physical thickness. This I forgot about when designing the holes through which the SD card and the micro USB would fit though when placed in the housing. As such I moved all holes on the side up by 2 millimeters. I then reprinted on a resin printer and went through the whole curing and wash cycle process again. As shown in the figure the print turned out well. I then brought this to the lab where Alyssa and I worked on SMD soldering parts to our PCB. This process was long as we not only had to find each component and place it on really small solder pads but bake it in the oven as when we tried the heat gun it was a little inaccurate and too hard to use precisely. I could not imaging using anything smaller than a 805 component as even these were extremely tiny and hard to work with. Overall we got the PCB soldered. We then moved on to try programming it. However we were unable to get it to show up on any COM port on our laptop. We then examined our connections and realized that our board was not getting power. This we realized was since USB did not feed into our LDO which supplies the regulated 3.3v power to our ESP32 board. As such we were forced to solder on a wire connecting the USB 5v power (which also joins with the 3.7-3.3v Battery) to the input on our LDO. This is depicted in the component_markup figure at label P. where we connected these 2 pads. Next we tried connecting over COM with the ESP32 and it showed up. However we were unable to program it and got an error message. We thought it wasn't in the right mode and were proved correct when examining the strippain pin out requirements of the ESP32. We realized that we were supposed to leave IO46 floating and to do so not populate a resistor. As such we unsoldered resistor R9 shown in component_markup. After this we were able to program it successfully. However in order to get serial data to show up we used ESP32S3 BOX instead of ESP32S2 Dev Board to program our board. We don't know why this was the case but we rolled with it. We then tested SD card operations and it didn't work. We tested pressure sensing and it worked. We tested gyro functionality and it worked. After this we called it a night.

### Figures:

![resin_print_new](pcb_images/Resin_print_new.jpeg)
![up_2_mm](pcb_images/up_2_mm.jpeg)
![component_markup](pcb_images/component_markup.jpeg)
![USB+LDO](USB+LDO.png)
![strappign](strappign.png)

### sources:

- https://www.pololu.com/blog/403/new-product-breakout-board-for-microsd-card
- https://gct.co/files/drawings/mem2052.pdf
- https://courses.engr.illinois.edu/ece445/wiki/#/esp32_example/index

## Notebook Entry: April 22 2024

### Objectives:

- DAY
  - make adjustments to cad since PCB now is a bit bigger due to connecting wire
  - identify why SD card operations aren't working
- NIGHT
  - work on PCB
  - make esp 32 chip work
  - debug circuit
  - check connections
  - program esp 32
  - test all components
  - test sd card
  - test IMU
  - test pressure

### Work Session Record:
Since we now routed a wire arround the PCB we had to reprint the model a bit bigger. I also adjusted it so that there would be space for a battery to in the top of the enclosure. Additionally I added moved down the wire hole so it didn't overlap with the PCB. I also redesigned the closing system to have a little less perciseness. I then started a resin print in seible. After we met up in lab to try and debug our PCB. 

### Figures:

![Fdm_print](pcb_images/Fdm_print.jpeg)
![component_markup](component_markup.jpeg)

### Resources:
- https://electronics.stackexchange.com/questions/278852/sd-card-detect-in-spi-mode
- https://forum.arduino.cc/t/how-can-i-connect-an-sd-card-to-arduino-directly/902446/15
- https://goughlui.com/2014/01/03/project-read-collect-decode-sd-card-csd-register-data/
- https://www.reddit.com/r/arduino/comments/15w4ctf/how_to_connect_an_sd_card_to_esp32_s3/

## Notebook Entry: April 23 2024

### Objectives:

- fix sd
- fix IMU (help alyssa)
- add buttons
- fix capacitors causing long discharge time of capacitor
- add LED
- create presentation

### Work Session Record:

Found out that SD card pins weren't mappeed right which caused the problem where it wouldn't mount. This was caused as we mapped the pins for SPI protocol according to the pin mappings for an SD card. This should have been easy to fix as we could have changed these pin mappings in software. However since on of the main pins was connected to ground it would have been a lot more challegning. One approach we tried was to splice off a section of the ground plane connected to this ground pin and solder a wire from this large pad to the right place. However this was a little to delicate of a process for us as there were a bunch of wires all arrounf this plane which caused us to have to work a lot more carefully. As such we gave up on pursuing this endevor. If we were to do another PCB order we would deffinitly be able to have resolved this connection error on our PCB. I also helped Alyssa to try and fix the IMU by soldering on floating components to connect to the pins which were needed to be powered.Ultimatly this took too long and as such we had given up on this process as well. Something we did accomplish was the integration of the LED and the buttons which would show if bluetooth was working, if the sensors were recording and a combination. Some issues we had here was that there was a 100k ohm resisotr in serise with our LED which caused it to not turn on. We then soldered on a 1k ohm which allowed it to turn of but it was super dim. One change we didn't get to was to convert this 1k ohm to a 47k ohm allowing the LED to be a lot brighter. In terms of the button we had an issue where the button when pressed would discharge and then on the charging our capatitor resitor combination would have a supper high RC circuit charge time. This would cause our software to think the button was constantly pressed. We testeed this by console logging the values read by our annolog to digital pin reading the voltage of the button press. As such we replaced these compoented to have a much shorted RC. Finlly in this work session we created our final demo presentation slides which helped to guide our audiece during our demo. 

### Figures:
![sd_card](sd_card.png)
![sd_card_map](sd_card_map.png)
![sd_card_fix](sd_card_fix.png)
![MPU6050](MPU6050.png)


### Resources:
- https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf

## Notebook Entry: April 24 2024

### Objectives:

- create presentation demo
- polish up long discharge of button
- move PCB to casing

### Work Session Record:
We got the discharge figured out but it was still a bit finiky. As such we added a delay in software by about 5 seconds where we wouldn't read if the button was pressed so that we wouldn't get any false readings. We also worked to polish up the demo presentaion as I atteneded a peer review demo where the group was asked a bunch of hard questions like tempurature, power delivery, and to show the output of their power ciurcuit. As such we had to modify our presetaion to include these calculations and readings. However when we did go into the demo we never got asked this. I guess it was asked to try and allow the group that I watched to earn back points. We then did our demo in from of 2 TA's and 1 proffessor. This was fun to showcase what we had been working really hard on all semester. Overall I think it went really well as our demo went without hickup expept for our insole being a little bent causing the insole to have 1 sesor be perpetually high. 

### equations
Calculation for max ambient temperature our device can be in
- TA(MAX) = 125°C – 80.3°C/W × (5 V – 3.3 V) × (0.25 A) = 90.87°C 
- TA(MAX) = 125°C – 80.3°C/W × (5 V – 3.3 V) × (0.5 A) = 56.74°C 
- TA(MAX) = 125°C – 80.3°C/W × (5 V – 3.3 V) × (0.6 A) = 43.09°C

Calculation for max time on battery power with 2000 mAh battery as Gyro + SD not measured with PCB but with breadboard
- Gyro: 1.73v over 1k ohm - .0017 A
- SD : 0.159v over 1k ohm - 0.000159 A

- **PCB Power Draw - 400mA → 2000mAh / 400mA = ~5 hours**


### Figures:

### Resources:
- https://courses.engr.illinois.edu/ece445/wiki/#/esp32_example/index

## Notebook Entry: April 25 2024

### Objectives:

- create mock demo presentation

### Work Session Record:
We wanted to get feedback on a presentation for our final as we wanted to be as prepaired as possible. As such we created a mock presentaion where we showcased what we had done in a susince presentation. Slides we included were Overall, Recommendations for further work, What We Learned, SD Card Read PCB Error, MPU PCB Error, PCB Capabilities/Errors, Ethics, Max Time On Battery Power, Max Ambient Temperature, Wearable/Modular Design, Web Interface, Insole design, Block Diagram, High Level Requirements, and Background.

### Figures:

### Resources:

## Notebook Entry: April 26 2024

### Objectives:

- Do mock presentaion
- Get feedback on mock presentaion

### Work Session Record:
 We went though our mock presentation where we showcased what we had done in presentaion form. Some feedback we got was that we needed a demo, to focus on positioning, reduce wordyness of slides, and focus on removing filler words. 


### Figures:
![feeback](feedback.png)

### Resources:

## Notebook Entry: April 28 2024

### Objectives:

- create final demo presentation
- create final paper
- add equations to final paper
- add images to final paper

### Work Session Record:
Created the final demo presntiation and made the following adjustments to our mock presentation:
- less words on ethic slide
- switched to ECE template like dictated in assignment details
- Added demo video slide 
- split up real time and upload slides for web interface 
- added design changes slides

### Figures:

### Resources:
