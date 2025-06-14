# GENERAL INTRODUCTION

As part of our participation in the **TRC25 National Competition, mechanical section**, our group was mobilized to take on a technical challenge centered on fundamental skills in **Computer-Aided Design (CAD)** using **SolidWorks**. The main aim of this trial, at a beginner level, was to assess both our ability to accurately model simple mechanical components in 3D and our capacity to create a functional assembly that meets specific geometric, material, and mechanical behavior requirements.

The test was divided into two complementary phases. The first part involved modeling single mechanical components from 2D sketches while adhering to strict technical parameters (standard dimensions, specified materials, known density). The main objective was to achieve a piece mass within a tolerance of ±5%. This required a strong mastery of volumetrics, constrained sketches, and physical properties in SolidWorks.

The second part challenged us to fully reconstruct a mechanical assembly — a clamp — from a set of provided components. This allowed us to demonstrate our skills in parametrics, particularly through the application of positional constraints (coincidence, parallelism, symmetry) and the use of a universal frame of reference. The center of mass, in relation to the range of movement of the mechanism, was an indicator of the accuracy and fairness of the final assembly.

Beyond technical aspects, this project enhanced our team spirit, our ability to collaborate effectively by optimally allocating tasks, and our ability to produce rigorous, clear, and well-structured documentation. This report traces all the steps we followed, the tools we used, the results we obtained, and the lessons we drew from this experience within the TRC25 framework.


# I. FIRST PART

## 1. General Presentation of Part 1

- **Part name:** Part 1  
- **Creation date:** 07/06/2025  
- **Scale:** 1:1  

## 2. Technical Characteristics of Part 1

- **Unit System:** MMGS (millimeter, gram, second)  
- **Decimal Precision:** 2 (all dimensions must be presented with two decimal places)  
- **Tolerance:** ± 5% (margin of error)  
- **Material and density:** AISI 1020 steel; **Density:** 0.0079 g/mm³  
- **General note:** All holes are through holes except if otherwise specified.

## 3. Graphic Representation of Part 1
<p align="center">
  <img src="./Images/150.png" alt="Image 1" width="600">
</p> 


## 4. Manufacturing Process of Part 1
Before starting the design of **Part 1**, we first conducted a preliminary study in order to complete it in less time and with the use of minimum functionality.  
Before we present our production process, we first want to introduce the software we used to successfully execute this piece.  
We chose **SolidWorks**, a 3D computer-aided design (CAD) software used to model mechanical components and assemblies. Here’s its interface:
<p align="center">
  <img src="./Images/1.png" alt="Image 1" width="600">
</p> 


## 5. Making Part 1


### 1st Step: Initial drawing configuration (units and material)

#### Unit configuration

- Look at the bottom right corner of the **SOLIDWORKS** interface.  
- A small area displays: **MMGS**, **IPS**, or another.  
- Click it → a small menu drops → select **MMGS**.  

This configures the unit system.
<p align="center">
  <img src="./Images/2.png" alt="Image 1" width="600">
</p> 
<p align="center">
  <img src="./Images/3.png" alt="Image 1" width="600">
</p> 


#### Setting material to AISI 1020 steel

- Go to the part in the feature tree on the left side of the interface.  
- Right-click the part, then select **Material**.  
- Click **Edit Material**.  
- In the opened window, scroll through the predefined materials.  
- Expand the **Steel** category.  
- Select **AISI 1020**.  
- Apply and close the window.  

This configures the material.

<p align="center">
  <img src="./Images/4.png" alt="Image 1" width="600">
</p> 
<p align="center">
  <img src="./Images/5.png" alt="Image 1" width="600">
</p> 
<p align="center">
<p align="center">
  <img src="./Images/7.png" alt="Image 1" width="600">
</p> 


### 2nd Step: Extrusion

#### Sketch to extrude

- The left side feature tree shows 3 standard planes:  
  - Front Plane  
  - Top Plane  
  - Right Plane  
- Select **Front Plane**.  
- Click **Sketch** (in toolbar or by right clicking > Sketch).  
- The view will automatically align normal (if not, press **Ctrl + 8**).

<p align="center">
  <img src="./Images/9.png" alt="Image 1" width="600">
</p>

#### Drawing circles

- Select circle tool (in the Sketch toolbar, click circle icon).  
- To draw first circle:  
  - click once to define center (at origin).  
  - move mouse and click again to set radius.  
- To dimension it:  
  - select smart dimension tool (dimensions icon).  
  - click circle, then enter **100 mm**.

<p align="center">
  <img src="./Images/10.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/11.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/12.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/13.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/14.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/15.png" alt="Image 1" width="600">
</p>
 <p align="center">
  <img src="./Images/16.png" alt="Image 1" width="600">
</p>

- Trace a 2nd circle of 50 mm in diameter, spaced 150 mm from first center.  
- Trace 2 concentric circles to previously drawn ones:
  - Circle of 150 mm concentric with first.
  - Circle of 80 mm concentric with the 50 mm.

<p align="center">
  <img src="./Images/17.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/18.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/19.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/20.png" alt="Image 1" width="600">
</p>


### 3rd Step: Connection with a 3-Point Arc

- Select **Sketch > Arc > 3-Point Arc** in the toolbar.  
- First click to define start, then click again to define endpoint, then move mouse and click a 3rd time to set curvature.  
- Dimension arc radius to **75 mm**.

#### Make arc tangents to circles

- Hold **Ctrl**, select circle and arc.  
- On left side, select **Tangent**, then **OK**.

<p align="center">
  <img src="./Images/23.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/24.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/25.png" alt="Image 1" width="600">
</p>


### Alignment correction

- Select first circle center.  
- Hold **Ctrl**, select 2nd circle center.  
- A small context menu drops.  
- Select **Horizontal** then **OK**.

<p align="center">
  <img src="./Images/26.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/27.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/28.png" alt="Image 1" width="600">
</p>


### Mirror first arc

- Select **Construction Line**, draw centerline through origin.  
- Select **Mirror**, select arc to mirror.  
- Mirror about centerline.

<p align="center">
  <img src="./Images/29.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/30.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/31.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/32.png" alt="Image 1" width="600">
</p>


### Opening on small circles

- Use **Line**, **Offset**, and **Trim** in Sketch.

#### Offset:

- Select **Offset**, set to 10 mm in both directions.

<p align="center">
  <img src="./Images/33.png" alt="Image 1" width="600">
</p>

#### Trim:

<p align="center">
  <img src="./Images/36.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/37.png" alt="Image 1" width="600">
</p>

- Use **Trim** to cut overlapping segments.

### Mirroring left side

- Mirror left side of two large concentric circles with **Mirror** in Sketch.

 <p align="center">
  <img src="./Images/39.png" alt="Image 1" width="600">
</p>


### Final adjustment of large arc

- Adjust large arc to allow extrusion in a single feature.

</p>
<p align="center">
  <img src="./Images/40.png" alt="Image 1" width="600">
</p>


### Extrude Sketch

- Select **Extrude**.  
- Set depth to 20 mm.  
- Validate.

</p>
<p align="center">
  <img src="./Images/41.png" alt="Image 1" width="600">
</p>

</p>
<p align="center">
  <img src="./Images/42.png" alt="Image 1" width="600">
</p>


### 4th Step: Material Removal

- Select face (right-click > select face)  
- Sketch a circle concentric with large circles.  
- Dimension circle to **135.6 mm**.  
- Apply **Extruded Cut** to depth 10 mm.  
- Validate.

<p align="center">
  <img src="./Images/44.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/45.png" alt="Image 1" width="600">
</p>

<p align="center">
  <img src="./Images/46.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/47.png" alt="Image 1" width="600">
</p>


### 5th Step: Mass Evaluation

- Go to **Evaluate** in toolbar.  
- Select **Mass Properties**.  
- Part 1 mass is **2850.16 g**.

## II. SECOND PART

### 1. General Presentation of Part 2

- **Part name**: Part 2  
- **Creation date**: 07/06/2025  
- **Scale**: 1/1  

---

### 2. Technical Specifications of Part 2

- **Unit system**: MMGS (millimeter, gram, second)  
- **Decimal places**: 2 (all dimensions must be expressed with two decimal places)  
- **Tolerance**: ± 5 %  
- **Material**: Aluminum Alloy 1060  
- **Density**: 0.0027 g/mm³  
- **Note**: All holes are through holes unless otherwise specified  

---

### 3. Graphical Representation of Part 2

- Views: **Front**, **right section**, and **isometric** (according to our consideration)


### 4. Manufacturing Process of Part 2

Before starting this part, a thorough study of the manufacturing process was conducted. Summary of operations:

- Bossing the main shape to a height of **10 mm**  
- Bossing the **two hollow cylinders** to a height of **30 mm**  
- Bossing the central cylindrical part to **15 mm**  
- Material removal to a depth of **5 mm**

---

#### Step 1: Creation of the first extrusion

**Sketch creation**:

- Plane used: **Front plane**  
- Draw circles with diameters **20 mm**, **38 mm**, **34 mm**, **64 mm**  
- Dimension the circles as you go  
- Dimension the distance between the centers of the large circles: **75 mm**  
- Draw two arcs connecting the **64 mm** and **38 mm** diameter circles  
- Use the **3-point arc** function  
<p align="center">
  <img src="./Images/53.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/54.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/55.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/56.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/56.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/57.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/58.png" alt="Image 1" width="600">
</p>

**Alignment and tangency**:

- Select the two centers → **Vertical relation**  
- Make the arcs **tangent** to the circles  
</p>
<p align="center">
  <img src="./Images/59.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/60.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/61.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/62.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/63.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/64.png" alt="Image 1" width="600">
</p>

**Extrusion**:

- Click on the **Extrude** function  
- Select the area between the two arcs  
- **Direction**: Mid plane  
- **Thickness**: 10 mm  
- Confirm  
</p>
<p align="center">
  <img src="./Images/65.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/66.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/67.png" alt="Image 1" width="600">
</p>

#### Step 2: Creation of the second extrusion

- Show again the sketch from the first extrusion  
- Select the **four circles** of the hollow cylinders  
- Click on **Extrude**  
- **Direction**: Mid plane  
- **Thickness**: 30 mm  
- Confirm  
</p>
<p align="center">
  <img src="./Images/68.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/69.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/70.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/71.png" alt="Image 1" width="600">
</p>

#### Step 3: Third extrusion

**Sketch preparation**:

- Select the blue face as the sketch plane  
- Draw two concentric circles (convert + offset)  
  - Convert the small circle of **34 mm**  
  - Offset it by **4.5 mm**  
</p>
<p align="center">
  <img src="./Images/71.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/72.png" alt="Image 1" width="600">
</p>

**Extrusion**:

- Select the area between the two circles  
- **Extrusion height**: 15 mm  
- Confirm  
</p>
<p align="center">
  <img src="./Images/76.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/77.png" alt="Image 1" width="600">
</p>

#### Step 4: Material removal

**Sketch creation**:

- Select the blue face of the last extrusion  
- Convert the outer contour  
- Make a **6 mm offset**  
</p>
<p align="center">
  <img src="./Images/79.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/80.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/81.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/82.png" alt="Image 1" width="600">
</p>

**Applying material removal**:

- Click on **Cut-Extrude**  
- Select the area between the two circles  
- **Depth**: 5 mm  
- Confirm  
</p>
<p align="center">
  <img src="./Images/83.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/84.png" alt="Image 1" width="600">
</p>

#### Step 5: Material definition and mass evaluation

**Material definition**:

- Right click on the part > **Edit material**  
- Choose **Aluminum Alloy 1060**  
- Go to the **Evaluate** menu > **Mass properties**  
- Result obtained:  
</p>
<p align="center">
  <img src="./Images/88.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/89.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/90.png" alt="Image 1" width="600">
</p>

**Mass evaluation**:

- Go to the **Evaluate** menu > **Mass properties**  
- Result obtained:  
</p>
<p align="center">
  <img src="./Images/86.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/87.png" alt="Image 1" width="600">
</p>
The mass obtained for part 1 is **290.80 g**.

### 2. Technical Characteristics of Part 3

- **Unit system**: MMGS (millimeter, gram, second)  
- **Decimal places**: 2 (all dimensions must be expressed with two decimal places)  
- **Tolerance**: ± 5%  
- **Material**: AISI 1020 Steel  
- **Density**: 0.0079 g/mm³  
- **Note**: All holes are through holes unless otherwise specified  

---

### 3. Graphical Representation of Part 3

According to our analysis, the part presents the following views:

- **Front view**  
- **Right view**  
- **Bottom view**  
- **Isometric view**

---

### 4. Manufacturing Process of Part 3

The objective is to manufacture this part **quickly** with a **minimal number of features** outside sketches. After analysis, we identified that **two main features** are sufficient:

- **Extrusion** of the pink base to a height of **100 mm**  
- **Material removal** to create a recess of **60 mm x 10 mm**

---

#### Step 1: Creating the Extrusion

**Sketch preparation**:

- Plane used: **Front plane**  
- Draw the contour of the sketch and **fully dimension** it  
- Apply an **offset** of the sketch by **10 mm** outward  
<p align="center">
  <img src="./Images/93.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/94.png" alt="Image 2" width="600">
</p>
<p align="center">
  <img src="./Images/95.png" alt="Image 3" width="600">
</p>
<p align="center">
  <img src="./Images/96.png" alt="Image 4" width="600">
</p>

**Extrusion**:

- Go to the **Extrusion** function  
- Apply extrusion to **100 mm**  
- Choose **Mid Plane** as direction  
- Validate the operation  
<p align="center">
  <img src="./Images/98.png" alt="Image 5" width="600">
</p>
<p align="center">
  <img src="./Images/99.png" alt="Image 6" width="600">
</p>
<p align="center">
  <img src="./Images/100.png" alt="Image 7" width="600">
</p>

#### Step 2: Material Removal

**Sketch preparation**:

- Select the **blue face** as the sketch plane  
- Draw the recess to be removed (dimensions: **60 mm x 10 mm**)  

**Apply the function**:

- Go to the **Cut-Extrude** (Material Removal) function  
- Select the previous sketch  
- Validate the operation  
<p align="center">
  <img src="./Images/101.png" alt="Image 8" width="600">
</p>
<p align="center">
  <img src="./Images/102.png" alt="Image 9" width="600">
</p>
<p align="center">
  <img src="./Images/103.png" alt="Image 10" width="600">
</p>
<p align="center">
  <img src="./Images/104.png" alt="Image 11" width="600">
</p>
<p align="center">
  <img src="./Images/105.png" alt="Image 12" width="600">
</p>

#### Step 3: Material Setup and Mass Evaluation

**Material definition**:

- Right-click on the part > **Edit Material**  
- Select **AISI 1020 Steel**  
<p align="center">
  <img src="./Images/106.png" alt="Image 13" width="600">
</p>

**Mass evaluation**:

- Go to the **Evaluate** tab > **Mass Properties**  
- **Result**: **1633.25 g**
## IV. FOURTH PART

### 1. General Presentation of Part 4

- **Part name**: Part 4  
- **Creation date**: 07/06/2025  
- **Scale**: 1/1  

---

### 2. Technical Characteristics

- **Unit system**: MMGS (millimeter, gram, second)  
- **Decimal places**: 2 (all dimensions must be expressed with two decimal places)  
- **Tolerance**: ± 5%  
- **Material**: Aluminum Alloy 1060  
- **Density**: 0.0027 g/mm³  
- **Note**: All holes are through holes unless otherwise specified  

---

### 3. Graphical Representation of Part 4

The part presents the following views:

- **Front view**  
- **Left view**  
- **Bottom view**  
- **Isometric view**

---

### 4. Manufacturing Process of Part 4

The objective is to manufacture this part in **record time** using a **minimal number of features**. We used **four main features**:

- **Boss Extrude** of the red base (50 mm)  
- **Boss Extrude** of the gray area (10 mm)  
- **Boss Extrude** of the yellow cylinder (5 mm)  
- **Fillet** with a radius of 2 mm  
- **Material removal** of the green area  

---

#### Step 1: Initial Parameters Setup

**Unit system:**

- At the bottom right of the SolidWorks interface, click the indicator (e.g., IPS, MMGS, etc.)  
- Select **MMGS**

**Material:**

- Right-click on the part in the feature tree  
- Select **Material > Edit Material**  
- Choose **Aluminum Alloys > Alloy 1060**

---

#### Step 2: First Extrusion (Red base)

- Select the **Front plane**  
- Create a **sketch** using the **line tool**  
- Apply **smart dimensioning**  
- Go to **Features > Extruded Boss/Base**  
- Set the **depth to 50 mm**  

<p align="center">
  <img src="./Images/110.png" alt="Image 1" width="600">
</p>
<p align="center">
  <img src="./Images/111.png" alt="Image 2" width="600">
</p>
<p align="center">
  <img src="./Images/112.png" alt="Image 3" width="600">
</p>

#### Step 3: Second Extrusion (Gray area)

- Select the **top face** as the sketch plane  
- Draw the **shape to extrude**  
- Go to **Features > Extruded Boss/Base**  
- Set the **depth to 10 mm**  

<p align="center">
  <img src="./Images/115.png" alt="Image 4" width="600">
</p>
<p align="center">
  <img src="./Images/116.png" alt="Image 5" width="600">
</p>
<p align="center">
  <img src="./Images/117.png" alt="Image 6" width="600">
</p>

#### Step 4: Third Extrusion (Yellow cylinder)

- Select the **top face** as the sketch plane  
- Use the **Circle tool** to draw a circle centered at the origin  
- Apply **smart dimensioning**  
- Go to **Features > Extruded Boss/Base**  
- Set the **height to 5 mm**  

<p align="center">
  <img src="./Images/118.png" alt="Image 7" width="600">
</p>
<p align="center">
  <img src="./Images/119.png" alt="Image 8" width="600">
</p>
<p align="center">
  <img src="./Images/120.png" alt="Image 9" width="600">
</p>
<p align="center">
  <img src="./Images/121.png" alt="Image 10" width="600">
</p>
<p align="center">
  <img src="./Images/122.png" alt="Image 11" width="600">
</p>

#### Step 5: Fillet

- Go to **Features > Fillet**  
- Select the **base edge of the cylinder**  
- Set the **radius to 2 mm**  
- Apply  
<p align="center">
  <img src="./Images/123.png" alt="Image 12" width="600">
</p>
<p align="center">
  <img src="./Images/124.png" alt="Image 13" width="600">
</p>

#### Step 6: Material Removal

**Sketch creation:**

- Select a **flat face** (blue area)  
- Use the **Rectangle tool > Corner Rectangle**  
- Apply **smart dimensioning**  
- If an error occurs when adding the 30 mm dimension:  
  - Access the **sketch via the feature tree**  
  - Right-click > **Edit Sketch**  
  - Fix constraints using **collinearity**

**Material removal:**

- Go to **Features > Extruded Cut**  
- Set the **depth up to the fillet surface**  

<p align="center">
  <img src="./Images/125.png" alt="Image 14" width="600">
</p>
<p align="center">
  <img src="./Images/126.png" alt="Image 15" width="600">
</p>
<p align="center">
  <img src="./Images/127.png" alt="Image 16" width="600">
</p>
<p align="center">
  <img src="./Images/128.png" alt="Image 17" width="600">
</p>
<p align="center">
  <img src="./Images/129.png" alt="Image 18" width="600">
</p>
<p align="center">
  <img src="./Images/130.png" alt="Image 19" width="600">
</p>
<p align="center">
  <img src="./Images/131.png" alt="Image 20" width="600">
</p>
<p align="center">
  <img src="./Images/132.png" alt="Image 21" width="600">
</p>
<p align="center">
  <img src="./Images/133.png" alt="Image 22" width="600">
</p>
<p align="center">
  <img src="./Images/134.png" alt="Image 23" width="600">
</p>
<p align="center">
  <img src="./Images/139.png" alt="Image 24" width="600">
</p>
<p align="center">
  <img src="./Images/140.png" alt="Image 25" width="600">
</p>
<p align="center">
  <img src="./Images/141.png" alt="Image 26" width="600">
</p>
<p align="center">
  <img src="./Images/142.png" alt="Image 27" width="600">
</p>
<p align="center">
  <img src="./Images/143.png" alt="Image 28" width="600">
</p>
<p align="center">
  <img src="./Images/144.png" alt="Image 29" width="600">
</p>
<p align="center">
  <img src="./Images/145.png" alt="Image 30" width="600">
</p>
<p align="center">
  <img src="./Images/146.png" alt="Image 31" width="600">
</p>
<p align="center">
  <img src="./Images/147.png" alt="Image 32" width="600">
</p>
<p align="center">
  <img src="./Images/148.png" alt="Image 33" width="600">
</p>
<p align="center">
  <img src="./Images/149.png" alt="Image 34" width="600">
</p>

#### Step 7: Mass Evaluation

- Go to the **Evaluate** tab  
- Click on **Mass Properties**  
- The mass is calculated automatically by SolidWorks  
- **Result**: **297.29 g**
## V. ASSEMBLAGE

### 1. Présentation générale de l’assemblage

- **Nom de l’assemblage** : Pince  
- **Date de création** : 07/06/2025  
- **Échelle** : 1/1  

---

### 2. Caractéristiques techniques

- **Système d’unité** : MMGS (millimètre, gramme, seconde)  
- **Décimale** : 2 (toutes les dimensions doivent être exprimées avec deux chiffres après la virgule)  

---

### 3. Représentation graphique

Les mises en page montrent clairement chaque pièce composant l’assemblage.  
On dispose d’une **nomenclature** indiquant le nombre de chaque pièce présente.  
Les vues disponibles sont :  
- Vue de face  
- Vue de droite  
- Vue de dessus  
- Plusieurs coupes  
- Vue isométrique  

---

### 4. Processus de réalisation

#### Étape 1 : Importation des fichiers

- Ouvrir le fichier **assemblage pince.SLDASM** depuis le dossier **TEKBOT ASSEMBLAGE 1**  
- Déposer le fichier dans la fenêtre d’assemblage SolidWorks  
- Ajouter les pièces nécessaires via **Assemblage > Insérer des composants**  
- Cliquer sur **Parcourir** et sélectionner chaque pièce pour les insérer :  
  - Axe de Biellette  
  - Axe porte mâchoire  
  <p align="center">
    <img src="./Images/z3.png" alt="Axe porte mâchoire" width="600">
  </p>
  - Circlips  
  - Biellette  
  - Mâchoire droite  
  <p align="center">
    <img src="./Images/z5.png" alt="Mâchoire droite" width="600">
  </p>
  - Mâchoire gauche  
  - Porte mâchoire  
  - Vis CHC M16*16  
  <p align="center">
    <img src="./Images/z10.png" alt="Vis CHC M16*16" width="600">
  </p>
  - Vis CHC M5*25  
  <p align="center">
    <img src="./Images/z11.png" alt="Vis CHC M5*25" width="600">
  </p>

#### Étape 2 : Contraintes d’assemblage

- Rendre coaxial le trou de la Biellette avec le trou de l’Embout de vérin  
- Rendre coïncidente la face dessus de la Biellette avec la face dessous de l’Embout de vérin  
- Appliquer les mêmes contraintes pour la deuxième Biellette  
- Rendre coaxial l’axe de Biellette avec le trou de la Biellette  
- Rendre coïncidente la face dessus de la Biellette avec la surface d’appui de l’axe  
- Répéter pour le deuxième axe de Biellette  
- Rendre coaxial le circlips avec l’axe de Biellette  
- Rendre coïncidente la face dessus du circlips avec la gorge de l’axe  
- Corriger toute erreur de contraintes (ex. : axe mal positionné) en supprimant les contraintes incorrectes  
- Multiplier les composants nécessaires (axes de Biellette, circlips, etc.) via sélection + glisser avec Ctrl  
- Appliquer contraintes similaires pour tous les composants multipliés  
- Faire la symétrie de l’ensemble (axe de Biellette, circlips, Biellette) par rapport au plan de dessus  
- Contraindre les trous et faces du porte mâchoire avec l’axe de Biellette et les autres pièces associées  
- Positionner correctement les mâchoires droite et gauche avec leurs portes mâchoires respectifs  
- Appliquer contraintes de coïncidence et coaxialité sur toutes les pièces et vis CHC  
- Corriger les positions des pièces et vis pour assurer un montage réaliste et fonctionnel  
<p align="center">
  <img src="./Images/z12.png" alt="Contraintes d’assemblage" width="600">
</p>

---

#### Étape 3 : Évaluation finale

- Vérifier l’assemblage complet dans différentes positions (maximale et minimale)  
- **Position minimale des coordonnées :**  
  - X = -29.15 mm  
  - Y = 0.16 mm  
  - Z = 19.86 mm  
- **Position maximale des coordonnées :**  
  - X = -25.78 mm  
  - Y = 0.66 mm  
  - Z = 19.86 mm  
- Utiliser l’outil **Évaluer > Propriétés de masse** pour calculer la masse totale de l’assemblage  

---

**Remarque :**  
Le montage a nécessité plusieurs corrections de contraintes et de positionnement afin d’assurer un assemblage fonctionnel et sans interférences.

---

## Conclusion

La présente documentation retrace de manière structurée l’ensemble des travaux réalisés dans le cadre de **la partie mécanique du test de présélection du Tekbot Robotics Challenge 2025**.  
Elle met en évidence les compétences mobilisées :  
- en **modélisation 3D**,  
- en **assemblage de pièces mécaniques**,  
- ainsi qu’en **vérification des propriétés physiques** à travers l’utilisation du logiciel **SolidWorks**.  

La maîtrise des outils de **CAO**, la compréhension des **contraintes géométriques et matérielles**, ainsi que la capacité à respecter les **tolérances imposées** ont été essentielles pour valider les différentes étapes du test.  

> L’assemblage final, centré sur **une pince mécanique**, a également permis d’aborder des notions importantes telles que l’**application de contraintes d’assemblage** et le **calcul du centre de gravité**.  

Ce travail marque une étape **préparatoire essentielle** à la suite du projet, qui consistera à **concevoir un robot complet destiné à la collecte des déchets en milieu urbain**.  
Il constitue non seulement une **preuve de compétence technique**, mais aussi une **base solide pour le développement futur de solutions robotiques innovantes**.
