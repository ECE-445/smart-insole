# Alyssa's Worklog
- [02/22/2024 - Insole Design](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#02222024)
- [02/26/2024 - Design Review](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#02262024---design-review)
- [02/29/2024 - Start Schematic Design](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#02292024---start-schematic-design)
- [03/01/2024 - PCB Design Review #1](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03012024---pcb-design-review-1)
- [03/05/2024 - PCB Rough Design Complete](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03052024---pcb-rough-design-complete)
- [03/19/2024 - PCB Design Completion for Second Order](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03192024---pcb-design-completion-for-second-order)
- [03/31/2024 - Testing the Velostat](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#03312024---testing-the-velostat)
- [04/03/2024 - First PCB Soldering... Disaster Ensues](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04032024---first-pcb-soldering-disaster-ensues)
- [04/07/2024 - Brief Meeting to test Velostat Connection to Breadboard](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04072024---brief-meeting-to-test-velostat-connection-to-breadboard)
- [04/09/2024 Part 1 - PCB Design 2 Roughly Complete](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04092024-part-1---pcb-design-2-roughly-complete)
- [04/09/2024 Part 2 - PCB Design 2 Sent Out!](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04092024-part-2---pcb-design-2-sent-out)
- [04/11/2024 Parts List](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04112024-parts-list)
- [04/18/2024 Test Insole](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04182024-test-insole)
- [04/22/2024 Solder PCB](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04222024-solder-pcb)
- [04/23/2024 T-1 Day Till Demo Day](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04232024-t-1-day-till-demo-day)
- [04/24/2024 Demo Day](https://github.com/ECE-445/smart-insole/edit/main/notebooks/azh4/README.md#04242024-demo-day)

# 02/22/2024 - Insole Design
Today we discussed possibilities for our insole design and what pressure sensitive sensors we could use to integrate into our insole.

The following possibilities were considered:

### 1. Thin Film Pressure Sensor

A thin film pressure sensor acts as a variable resistor that lowers its resistance as pressure increases. I was specifically researching a [thin film resistor](https://www.dfrobot.com/product-1846.html) from [dfrobot.com](http://dfrobot.com):

<img width="641" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/f0ad98bd-b1d3-4e14-8efe-b36f4c842490">

<img width="306" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/e6973e68-6e49-419e-bc1d-a3d966ba6c35">

On the website, the resistor measures from 20 grams of weight to 6000 grams (or 6 kilograms). Although this seems like very little, we remember that for any smaller piece of area on the foot, there is less weight since the weight is distributed over the whole foot.

Thus, we can calculate how much weight a piece of area the size of the thin film resistor would feel on average. According to the diagrams in the paper [“Real-time pressure mapping smart insole system based on a controllable vertical pore dielectric layer,”](https://www.nature.com/articles/s41378-020-0171-1), a human foot can exert up to 175kPa of pressure at a point on the foot. Since we know that the diameter of the pressure sensor is 19 millimeters, the following expression shows the calculation of the weight the thin-film resistor would feel:

$P_{\text{sensor}} = \frac{{175000 \text{[Pa]} \times \pi \times (0.0095 \text{[m]})^2}}{{9.81 \text{[N/kg]}}} \text{[kg]} \approx 5.05785208691 \text{[kg]}$

Since the pressure sensor will only feel a maximum of about 5.057 kg, this pressure sensor could accurately handle the weight of a human as it is under the 6 kg maximum that the sensor can measure.

However, the resistor is very expensive, costing $6.90 per resistor.

### 2. Capacitive Insole

Another way we could implement a pressure sensitive insole was through a capacitive insole. In the research paper [“A 3D-Printed Capacitive Smart Insole for Plantar Pressure Monitoring”](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9782173/), we can see that the researchers 3D print a pressure sensing insole with a conductive PLA, and also 3D printed a dielectric to form a capacitor. Since capacitors are low power consumption and the 3D printing supplies are relatively inexpensive, we would be able to print our own insole as well.

However, we weren't sure if our maker space would allow us to print using different materials. Thus, although this design allows flexibility and easy material attainment, it wouldn't be the most practical if our maker space doesn't allow us to print.

### 3. Pressure-Sensitive Conductive Sheet
Lastly, we considered using a pressure-sensitive sheet such as Velostat. Similar to the thin film resistor, Velostat decreases its resistance as pressure is applied. Since it is easy to aquire and expensive, it would be easy to experiment with, since we only needed to cut the Velostat up using scissors.

After some online research, and reading through [this website](https://andykong.org/blog/velostatlinqstat/) about testing the usage and resistance of Velostat under different pressure conditions, we thought that this would be the best way to move forward from now on.

I thought that we could buy an insole to act as our base, then using copper tape as conductive wire, we could create different pads of velostat that would be each used as their own voltage divider circuit. The pads of Velostat would be spread around the foot to measure different parts of the feet.

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

# 03/31/2024 - Testing the Velostat
Today I spend maybe 1-2 hours testing the Velostat and getting an idea on how our insole will be designed. I was able to peel the insole into two layers that we could sandwhich our sensors in between:

<img width="552" alt="IMG_9952" src="https://github.com/ECE-445/smart-insole/assets/155053885/8d48971b-2d3a-44a7-984a-ed8ced9572c6">

Next I cut out a 2cm x 2 cm piece of Velostat and secured a connection onto the insole using copper tape and normal tape:

<img width="552" alt="IMG_9954" src="https://github.com/ECE-445/smart-insole/assets/155053885/c9836b18-8c00-4bd8-a0bf-2c57a9ec0daa">

My plan was to apply 3.3V to the top plane of the Velostat, then the bottom plane would have a wire that connected to a breadboard, in series with a 1k Ohm resistor, then to ground. This is a very simple voltage divider circuit. I would then probe the same point in between the Velostat and the resistor to find the voltage drop across the 1k Ohm resistor, whose voltage drop will change depending on how much the resistance of the Velostat is.

I used scopy to apply a 3.3V voltage to the Velostat and also to measure the voltage drop across the velostat as I applied pressure. This turned out well. Before I applied pressure, the voltage drop across the Velostat stayed around a stable 2.790 V, and after pressure was applied, the voltage across the Velostat would be around 3.190 V.

<img width="400" alt="IMG_0681" src="https://github.com/ECE-445/smart-insole/assets/155053885/e7d97ec0-216f-45e6-ae8a-5192b8f054b5">
<img width="400" alt="IMG_0682" src="https://github.com/ECE-445/smart-insole/assets/155053885/32b68ad4-9590-4b7e-970c-d8e3bda340dc">

The only issue that I saw was that the Velostat was VERY sensitive to pressure. It would respond if I even lightly tapped the Velostat and would max out with the press of my hand. This would not be ideal if we wanted to measure the weight of an entire human.

Since the weight area of the Velostat was 2 cm x 2 cm, the following calculation ensues:

$P_{\text{sensor}} = \frac{{175000 \text{[Pa]} \times \pi \times (0.0095 \text{[m]})^2}}{{9.81 \text{[N/kg]}}} \text{[kg]} \approx 7.135575943 \text{[kg]}$

This means that a sensor of the size Velostat that I cut out should be able to accurately sense up to around 7.13 kg of weight without maxing out in the middle.

# 04/03/2024 - First PCB Soldering... Disaster Ensues

Today our first PCB finally came in after it was late around a whole week. We don't have a lot of time, so we immediately went in to solder.

Below is a picture of our PCB (it is a LOT larger than I would've liked):

<img width="429" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/f2619e12-0f36-463e-a39e-268de6ad292d">


However, things didn't work out at all. While soldering, we found out there were many many routing issues with our board, and we had ordered the wrong components for our footprints, and we also had missing components that we for some reason never ordered.

Some of the incorrect routing was detrimental to functionality, for example, we had accidentally occupied the D+ and D- ports on the ESP32 that would keep us from downloading any programs. So, we decided not to solder the board at all, and instead immediately create a new board and hope that it can get here in time.

Below is a comprehensive list of all of our issues and to-do's:

1. Check D+ and D- pins are right
2. Check that GPIO strapping is right
3. Fix all our resistor footprints to be 0803
4. Check that 3v3 power is correct
5. Check that all GPIO pins that we use are free pins (allowed to be used)
6. Order the correct 6 pin LDO part for the footprint
7. Move the switches off the board to save space
8. Add LED pin headers
9. Order all missing resistors/capacitors/transistors
10. Fix the debug header
11. Order a JST connector and USB connector
12. Make the PCB smaller
13. double check double check!!

Our goal is to finish the PCB by the 8th for the 5th wave order and hope that we can get everything working in time for our final demo!! In the meantime, Tony has bought supplies so we can potentially get a fully function project on our breadboard to demo in case our PCB doesn't work.

On the bright side, I was able to try solder paste and hot air soldering for the first time... I had a lot of trouble spreading the correct amount of solder paste and making sure connections didn't bridge. Hopefully it will be good practice for if/when our next PCB comes in time!

# 04/07/2024 - Brief Meeting to test Velostat Connection to Breadboard

I met up for like an hour with Tony to just very briefly pass on parts and test the Velostat connection with the breadboard ESP32. We were able to successfully connect everything and get a sensor reading from the ESP32 on the Velostat! This is good new since we know that the Velostat can now interface properly with the ESP32 and we are also able to probe the connection and read the voltage drop.

We also settled on switching from 1k Ohm resistors to 47 Ohm resistors, since we found that this helped fix the sensitivity issue that I had encountered while testing the Velostat earlier.

# 04/09/2024 Part 1 - PCB Design 2 Roughly Complete
Since the second order wave is due today, I spent 3-4 hours recreating the PCB. I had to change up the schematic and footprint sof the "old new" one that Ramsey had been working on, which scrambled a lot of connections and added a lot of new ones. So I just completely restarted the whole PCB (sorry Ramsey!)

Somethings I had to watch out for:

1. make sure GPIO pins 8 and 9 are for the MPU (we know these work since Tony has tested it on his breadboard)
2. make sure that each GPIO pin coneected to the Velostat goes to an ADC ESP32 channel

I referenced this ESP32 connection diagram:

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/c0483b7f-27b0-4f33-8213-21df8d4cbd74">

We were able to mirror the PCB connection directly as the ones on the breadboard, just so we can be sure that everything would work on the PCB.

I was able to make the PCB a lot smaller, I think around 4 cm x 6 cm which I am a lot happier with than our last iteration.

A few things that still needs to be changed that I will ask Ramsey to fix tomorrow morning (since I have a midterm tomorrow :( ... ):

1. SD card footprint still doesn't work
2. Add LED pin headers to connect to our board so we can properly make the status subsystem
3. MPU6050 and ESP32 both have copper fills under their no fill zones, that needs to be fixed!
4. Move silkscreen numbers
5. Annular errors (easy fix, hopefully)

# 04/09/2024 Part 2 - PCB Design 2 Sent Out!

Ramsey pulled through and helped finish the board on time! We've sent out our second order for wave 5.

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/827c688d-8563-4b9e-a287-0389a1ee7ee3">

# 04/11/2024 Parts List

We met up for a short hours today to get parts list down:

https://docs.google.com/document/d/1IJQFSmCG9UCgk6a4ejXhp5AoA1F4V_HrdRfeX1zRmEo/edit

# 04/16/2024 Build Insole

I spent maybe 3-4 hours building the insole!! It was a lot more difficult than I expected but it was fun to do it.

I first made a placement plan for the Velostat sensors and labeled them from 1 to 10 from the bottom to the top of the foot, left to right:

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/9b735bb2-911f-4006-a94b-af06fc1fa76e">

I picked parts of the foot that are common pressured, which includes the outside of the foot, the balls and the heels of the foot. I also added one under the arch of the foot to possibly detect flat-footed gaits.

I then created the copper pads that would be connected to the bottom of the Velostat sheet:

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/274c626b-e35b-4e00-afcc-392ffc28cbe3">

Each of the copper pads have a thin copper tape trace running to the bottom of the insole. I had to make many layers of traces and ensure that they were all insulated from each other by using electrical tape to cover the traces that needed to go on top of each other. On the bottom of the insole, I made the exposed traces go from 1 to 10 left to right, so there would be no confusion about what wire corresponded with which pad. This process took a long time, especially planning which traces went above or below others to ensure I used the least layers of tape as possible.

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/c5d0b12a-23a4-4c7f-a9be-1480a7045992">

Next I taped on the Velostat sheets (the duller black squares) with electrical tape, then covered all exposed traces on the foot so that there would be no chance of the user coming into contact with any electrical components. On the left, I created a common power plane to power each of the velostat squares in parallel. This power plane would recieve 3.3V and supply power to all of the squares.

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/87274d5e-4282-4461-ae77-b44d972e9050">

The last thing I did was solder on wires to the exposed copper pads at the bottom of the insole, so that we could plug the insole into a breadboard (or PCB, hopefully!). Special thanks to my roommate's portable soldering iron, I could solder straight in my room at 4 am!

Now to get the circuit to work, we just had to power the top plane, and connect the wires to the second resistor in the voltage divider circiut, and we would be all set!

I wasn't able to test the insole, but I will drop it off to Tony tomorrow and hopefully we can try to get something working.

# 04/18/2024 Test Insole

Today I met with Ramsey and Tony in the 445 lab to test the insole. I added extra copper to the power plane, and soldered on a wire to thetop plane, just to make sure that all contacts are full and secure!

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/9297c5f1-774f-412c-9503-ab2174adb90d">

Here is the wired up insole and the power plane on the top. We tested each of the sensor pads by connecting them to the ADC GPIO channel on the breadboard ESP32 and testing responsiveness. I was surprised to find out that all of them worked!

We also met quickly with Selva today and talked about our possible demo points with the breadboard demo and our insole. Outlook's not looking that good without our PCB.

We also were surprised to find out that our PCB actually came in today! However, a lot of our parts aren't here so we have to wait for those.

# 04/22/2024 Solder PCB

Parts came in today! We were in ECEB as soon as they came in so we could try to solder parts on.

I spent an hour laying on the parts, but thankfully I was able to lay on the solder paste pretty nicely after a few tries. Below is a failed attempt:

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/ea3a29e6-0302-4523-afe4-75a73bc5982f">

I learned tha it was because the stencil was slightly lifting up when I was scraping, so that the solder paste would get under the stencil and smear under the cut outs. I fixed this by just constantly holding it down and not allowing it to lift up while I was spreading the paste.

We also tried to lay out another board but someone came and put their hands on our solder paste so it smeared the entire set up. Good thing we had the first one still.

Also instead of using the hot air gun this time, we baked the PCBs, which was significantly better and easier and more even than the hot air.

Here's the finished product:

<img width="500" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/316665f8-bc88-4830-b6ee-87004dd762ba">

I inspected the connections, and it looks like the connections that I was most worried about (MPU, microSD, and microUSB) did not bridge at all!

Ramsey and Tony also pulled up, so we were able to test the PCB after.

We realized that there was a little miscommunication where I had named a trace "Power from Battery" and Ramsey had named it "5V," and these two weren't properly connected. So I soldered on a wire between the two pads to connect the two. After this, the microUSB was able to properly power our ESP32!

We did a little bit of testing and trying to download code onto the ESP32, but found that it was boot looping. We fixed this because we realized we had accidentally populated a DNP area with a resistor. After this issue, we were able to properly program and read data from the ESP32!!

After connecting the insole, the insole part of our connection was fully working : D I realized that I had been referring to the top plane of the insole as the power plane, when on the schematic it should've been the ground plane. This was a simple fix in the code for us.

<img width="300" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/643c1f08-96e3-4491-862e-a781aa640dcd">

<img width="300" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/3487ff68-8467-4479-bb27-3fd18e4ecd6b">

However, we found out that the MPU6050 had incorrect connections on the PCB after we were unable to connect to the MPU... We forgot to make some important connections such as grounding CLK and FSYNC:

<img width="544" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/76c5aadb-6e6e-44d1-8373-062d00b159a3">

Here's what it should've been:

<img width="544" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/b72c311d-6655-4607-bd11-66495ef5f20b">

Tomorrow we might try to use small wires to bridge connections and add the capacitors we are missing using super glue. And, our SD card reader isn't working. Unsure why.

Our demo is in two days, but we're glad we got SOMETHING working!

# 04/23/2024 T-1 Day Till Demo Day

Today all 3 of us stayed in lab till 3 AM working on our last things before demo day tomorrow...

I tried to make small connections under the microscope to make up for the missing connections for the MPU6050, but gave up after a while since it was just too small and difficult to do. Ramsey and Tony also figured out the SD card issue; it was that we mixed up the SD card and microSD card pad connections. Unfortunately that was too difficult of a fix.

In the end, we just finished our enclosure that Ramsey had 3D printed, glued on parts and soldered on the components:

<img width="471" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/775458cc-560e-4419-921e-52630f9c0d0d">

<img width="471" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/e7ce36a3-5bcc-4918-9054-5d681c261e7d">

We fixed the code for the buttons and the LEDs, which was our final touch!

<img width="700" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/63eb73da-219b-4c75-9555-289d8bead629">

We did some power draw analysis after.

<img width="800" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/545d6f0f-a9d1-4d44-b838-11f081f17652">

Here is the final PCB :' ) Our whole semester's worth of hard work. You can see the small wires I tried to solder on on the MPU6050 on the top right of the board.

Our demo day is tomorrow, so we're done working for now! Until next time !!!

# 04/24/2024 Demo Day

So turns out there is a next time. Small update, I taped up the insole so that the two planes wouldn't be separated, and that there would be no chance of electrical contact with the user.

<img width="800" alt="image" src="https://github.com/ECE-445/smart-insole/assets/155053885/05a671c2-9031-47ad-91d0-089af9cf064b">

Here is the real final product, where you can see it's fully taped up. This seemed to put some unexpected pressure on some of the sensors, so they were reading pressure even when there was no pressure being put on the insole. However, we were able to fix this by bending the insole a little bit.

This is the last update for sure. We had so much fun working through this semester and learned so much working on this project!
