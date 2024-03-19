# Alyssa's Worklog
- [02/26/2024 - Design Review](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#02262024)
- [02/29/2024 - Start Schematic Design](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#02292024---start-schematic-design)
- [03/01/2024 - PCB Design Review #1](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03012024---pcb-design-review-1)
- [03/05/2024 - PCB Rough Design Complete](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03052024---pcb-rough-design-complete)
- [# 03/19/2024 - PCB Design Completion for Second Order](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03192024---pcb-design-completion-for-second-order)

# 02/26/2024 - Design Review
We presented our design document to Professor Gruev, our TA, and other peer review volunteers today. While our presentation was pretty successful, we got some good constructive criticism from the professor. For example, we needed to do actual numerical calculations to ensure that the power draw of our entire device would be low enough and that our device wouldn't overheat. Otherwise, it seemed our project is good to go overall and we can start working on the schematic and PCB design.

Link to our [Design Document](https://docs.google.com/document/d/1RZ4hay_KmjyNNVu77bZkisEdfptdr8XYJHoLFrnxiJo/edit?usp=drive_link).

# 02/29/2024 - Start Schematic Design
Today Ramsey started the schematic design. I worked on it a little bit by adding the the MPU6050 and wiring it to our ESP32.

# 03/01/2024 - PCB Design Review #1
Today was the PCB Design Review. While we were waiting for the TA to view our board, we were able to finish our schematic. We had a little bit of issues working on wiring the ESP32 since we were unsure which GPIO pins were reserved for other usages and which ones we could use. However, we were able to find a pin diagram online to follow.

When our board was looked at by a TA, we asked a lot of clarifying questions and also got a lot of good advice. For example, we were able to better plan out our battery management and LDO system.

# 03/05/2024 - PCB Rough Design Complete & PCB Design Review #2
In the morning, I worked on the PCB for around 4-5 hours, and was able to do the following:
- Started the PCB design and arranged all the components.
  - Made sure to stay under the design size limit of 100mmx100mm.
  - Tried to ensure that all components were fit snugly and there weren't any large empty spots on the PCB.
- Created a GND copper fill on the top plane. and a 3v3 copper fill on the bottom plane.
  - Since these two nets are accessed a lot by many different components, I decided it would be best to set these two as our two nets.  
- Imported the button footprints and schematic symbols into the schematic and the PCB
- Changed all button schematic circuitry to include a pull-up resistor so that the circuit would properly detect a button press.
- Rearranged all the ESP32 GPIO to Velostat resistor pins that were originally planned
  - I did this because after arranging the board, I found that trace lengths and complexity could be reduced by connecting the Velostat resistor to physically closer ESP32 GPIO pins.
- Ensured all silkscreen labels were facing the same direction and were at a the same relative position to each of its respective components.

However there are still many things to be fixed, which I passed off to Tony and Ramsey:
- There are a lot of clearance DRC errors.
- Some traces I made were accidenatlly sharp/90 degree traces.
  - I couldn't change these because I already pushed my design.
 
In the afternoon, Tony, Ramsey, and I met up to go to a PCB Design Review to ensure our PCB was on the right track. We were able to do the following:
- Changed all the via widths to clear the DRC errors.
- Changed some hole widths to clear DRC errors.
- We added a lot more circuitry to the ESP32 to enable different download methods and other essential functions.
  - We added strapping pins.
  - We fixed the reset circuitry of the ESP32, since it should be an active low signal.
  - We added a connection to a USB-to-UART bridge with the needed circuitry.
- We also realized that the voltage divider circuit on our schematic for the Velostat sensor was incorrect, so we changed the circuitry to work.
 
After adding the above changes, we didn't have time to finish the PCB, so we decided to go for second round orders instead.

# 03/19/2024 - PCB Design Completion for Second Order
Today, I spent 3-4 hours on the PCB after Tony and Ramsey submitted their changes. I did the following:

- I made sure all the last few unrouted connections were connected.
- There were many small unused copper fills between wires that weren't needed. I got rid of these by adding zones where the copper fill wouldn't be filled into.
- Many components on the board needed more thermal relief spokes than it had, so I had to move around a lot of wires to allow spokes to form.

At this point, I realized that the PCB wasn't fully updated from the schematic after our last changes, which included changes on the voltage divider circuit for our Velostat sensor. I took this chance to edit the schematic:

- Changed the 10 2x1 connectors into one 2x10 connector.
  - This would make everything much easier to solder and to plug in/wire.
- Also changed both connector footprints to 2.54 mm instead of 1 mm, because that’s the standard breadboard hole distance.

After these changes, I was able to finish the PCB:
- The new connector was a lot less space consuming, so I was able to save a lot of space. However, I had to completely re-wire all the voltage divider circuits.
  - This included trial and error creating and deleting a separat 3v3 plane on the back of the board.
- The new wire connections meant I had a lot of new DRC errors. I was able to fix most of these.

There are still a few things to check/change after tonight before we submit the board tomorrow for round 2:
- 1 last DRC error, one pad is missing a spoke for thermal relief, but I was unable to get kiCAD to fill in the spoke even after making a lot of space for the spoke to be there. I am unsure why.
- There is still one more isolated copper fill zone that I was unable to locate.
- Need to double check if resistor sizes are correct.
- Need to add mounting holes(?).
- Need to add some sort of way to connect the battery to our circuit.
- Need to double check all circuitry.

Below are images from the PCB:

**Front:**

<img width="552" alt="IMG_5618" src="https://github.com/ECE-445/smart-insole/assets/155053885/761fa29c-aff7-4707-9b58-ff580ff28b33">

**Back:**

<img width="540" alt="IMG_2983" src="https://github.com/ECE-445/smart-insole/assets/155053885/38ff55f9-a6bc-4f94-9c39-885a763229a5">

**3D Model:**

<img width="581" alt="IMG_7594" src="https://github.com/ECE-445/smart-insole/assets/155053885/8fb03661-70cf-4c5f-8410-245b0defc65e">

