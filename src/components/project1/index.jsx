import { Divider, Menu, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LabelIcon from "@mui/icons-material/Label";
import ErrorIcon from "@mui/icons-material/Error";
import React, { useState } from "react";
const Project = () => {
  const [item, setItem] = useState({});
  const data = [
    {
      title: "Engine and Transmission",
      items: [
        {
          text: "Battery Capacity",
          value: "30 kWh",
          icon: "battery-capacity",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Motor Power",
          value: "95 kW",
          icon: "motor-power",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Motor Type",
          value: "Permanent Magnet Synchronous AC Motor",
          icon: "motor-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Max Power",
          value: "127.39 bhp",
          icon: "max-power",
          description:
            "The amount of work the engine can do over a period of time. It is measured in Horsepower.\u003cbr\u003e One Horsepower is equal to the energy needed to lift 550 pounds at a height of one foot for one second. 1 PS\u003d1.01387 bhp",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "Power dictates the performance of an engine. It\u0027s measured in horsepower (bhp) or metric horsepower (PS). More is better.",
        },
        {
          text: "Max Torque",
          value: "215 Nm",
          icon: "max-torque",
          description:
            "The maximum power output the engine can produce over a particular range of speed.",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The load-carrying ability of an engine, measured in Newton-metres (Nm) or pound-foot (lb-ft). More is better.",
        },
        {
          text: "Range",
          value: "325 km",
          icon: "range",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Battery Type",
          value: "Lithium Ion",
          icon: "Battery-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Charging Time ( A.C)",
          value: "4H 20 Min-7.2 kW (10-100%)",
          icon: "charging-time-(-a.c)",
          description: "",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The time taken to charge batteries from mains power or alternating current (AC) source. Mains power is typically slower than DC charging.",
        },
        {
          text: "Charging Time ( D.C)",
          value: "56 Min-50 kW (10-80%)",
          icon: "charging-time-(-d.c)",
          description: "",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The time taken to charge batteries from mains power or direct current (DC) source. Mains power is typically slower than DC charging.",
        },
        {
          text: "Charger Type",
          value: "3.3 kW AC Wall Box Charger",
          icon: "charger-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Charging Options",
          value:
            "3.3 kW AC Wall Box | 7.2 kW AC Wall Box | 50 kW DC Fast Charger",
          icon: "charger-options",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Regenerative Braking",
          value: "Yes",
          icon: "regenerative-braking",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Regenerative Braking Levels",
          value: "",
          icon: "regenerative-braking-levels",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Charging Port",
          value: "CCS-II",
          icon: "charging-port",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Transmission Type",
          value: "Automatic",
          icon: "transmission-type",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Gear Box",
          value: "1-Speed",
          icon: "gear-box",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Mild Hybrid",
          value: "Not Available",
          icon: "mild-hybrid",
          description: "",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "A mild hybrid car, also known as a micro hybrid or light hybrid, is a type of internal combustion-engined car that uses a small amount of electric energy for assist.",
        },
        {
          text: "Drive Type",
          value: "FWD",
          icon: "drive-type",
          description:
            "This refers to the wheel(s) that are driven by the entire moving part of the car Engine, clutch, transmission, driveshaft, differential, axles, etc.",
          available: true,
          isTestedValue: false,
        },
      ],
    },
    {
      title: "Fuel \u0026 Performance",
      items: [
        {
          text: "Fuel Type",
          value: "Electric",
          icon: "fuel-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Emission Norm Compliance",
          value: "ZEV",
          icon: "emission-norm-compliance",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Top Speed (Kmph)",
          value: "150",
          icon: "top-speed-(kmph)",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Acceleration 0-100 kmph",
          value: "9.2 Sec",
          icon: "acceleration",
          description: "",
          available: true,
          isTestedValue: false,
        },
      ],
    },
    {
      title: "Charging",
      items: [
        {
          text: "Charging Time",
          value: "4H 20 Min-AC-7.2 kW (10-100%)",
          icon: "charging-time",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Fast Charging",
          value: "Available",
          icon: "fast-charging",
          description: "",
          available: true,
          isTestedValue: false,
        },
      ],
    },
    {
      title: "Suspension, Steering \u0026 Brakes",
      items: [
        {
          text: "Front Suspension",
          value: "Independent MacPherson strut with coil spring",
          icon: "front-suspension",
          description:
            "The system of springs, shockers, joints, etc., that connect the vehicle to its wheels. \u003cbr\u003eThe suspension system helps absorb the shock of bumps on the road and keep the wheels in constant contact with the road,\u003cbr\u003e thereby improving control and traction.",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Rear Suspension",
          value: "Twist beam with dual path Strut",
          icon: "rear-suspension",
          description:
            "The system of springs, shockers, joints, etc., that connect the vehicle to its wheels.\u003cbr\u003e The suspension system helps absorb the shock of bumps on the road and keep the wheels in constant contact with the road, thereby improving control and traction.",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Steering Type",
          value: "Electric",
          icon: "steering-type",
          description:
            "Steering type implies how the collection of rod,levers etc. connected to the front wheels of a vehicle,\u003cbr\u003e make the vehicle turn in the direction desired by the driver. It is either manually done or power driven.",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Steering Column",
          value: "Tilt and Telescopic",
          icon: "steering-column",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Turning Radius (Metres)",
          value: "5.3 Metres",
          icon: "turning-radius-(metres)",
          description:
            "The diameter of the circle created by the outer front wheel when the vehicle takes a full turn.\u003cbr\u003e The lower the Turning Radius the lesser the space the car requires to make a turn.",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Front Brake Type",
          value: "Disc",
          icon: "front-brake-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Rear Brake Type",
          value: "Drum",
          icon: "rear-brake-type",
          description: "",
          available: true,
          isTestedValue: false,
        },
      ],
    },
    {
      title: "Dimensions \u0026 Capacity",
      items: [
        {
          text: "Length (mm)",
          value: "3994",
          icon: "length-(mm)",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The distance from a car\u0027s front tip to the farthest point in the back.",
        },
        {
          text: "Width (mm)",
          value: "1811",
          icon: "width-(mm)",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The width of a car is the horizontal distance between the two outermost points of the car, typically measured at the widest point of the car, such as the wheel wells or the rearview mirrors",
        },
        {
          text: "Height (mm)",
          value: "1616",
          icon: "height-(mm)",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "The height of a car is the vertical distance between the ground and the highest point of the car. It can decide how much space a car has along with it\u0027s body type and is also critical in determining it\u0027s ability to fit in smaller garages or parking spaces",
        },
        {
          text: "Boot Space (Litres)",
          value: "350",
          icon: "boot-space",
          description: "",
          available: false,
          isTestedValue: false,
        },
        {
          text: "Seating Capacity",
          value: "5",
          icon: "seating-capacity",
          available: true,
          isTestedValue: false,
        },
        {
          text: "Wheel Base (mm)",
          value: "2580",
          icon: "wheel-base-(mm)",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "Distance from the centre of the front wheel to the centre of the rear wheel. A longer wheelbase is better for stability and also allows more passenger space on the inside.",
        },
        {
          text: "Kerb Weight (Kg)",
          value: "",
          icon: "kerb-weight-(kg)",
          available: true,
          isTestedValue: false,
          toolTipDescription:
            "It is the weight of just a car, including fluids such as engine oil, coolant and brake fluid, combined with a fuel tank that is filled to 90 percent capacity.",
        },
        {
          text: "Ground Clearance Unladen (mm)",
          value: "205",
          icon: "ground-clearance",
          available: true,
          isTestedValue: false,
        },
        {
          text: "No. of Doors",
          value: "5",
          icon: "",
          description: "",
          available: true,
          isTestedValue: false,
        },
      ],
    },
  ];
  console.log(data);
  return (
    <>
      <div>
        <div className="p-4 font-semibold text-2xl text-pretty">
          <p>Punch EV Smart Specifications & Features</p>
        </div>
        <Divider />
        <div className="flex ">
          <div className="flex flex-col font-medium text-pretty  bg-slate-50 w-[20%] gap-3 px-4">
            <button type="submit" onClick={() => setItem(data.item)}>
              Engine & Transmission
              <Menu>
                <MenuItem>
                  {data.map((i) => (
                    <p>{i.items}</p>
                  ))}
                </MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>
              Fuels & Performance
              <Menu>
                <MenuItem>sfhjsf</MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>
              <LabelIcon />
              Charging
              <Menu>
                <MenuItem>sfhjsf</MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>
              Suspension, Steering & Bracks
              <Menu>
                <MenuItem>sfhjsf</MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>
              Dimension & Capacity
              <Menu>
                <MenuItem>sfhjsf</MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>
              Comfort & Convenience
              <Menu>
                <MenuItem>sfhjsf</MenuItem>
              </Menu>
            </button>
            <Divider />
            <button>Interior</button>
            <Divider />
            <button>Exterior</button>
            <Divider />
            <button>Safety</button>
            <Divider />
            <button>Entertainment & Communication</button>
            <Divider />
            <button>ADAS Feature</button>
            <Divider />
            <button>Advance Internet Feature</button>
            <Divider />
          </div>
          <div className="w-[70%]">
            <Divider textAlign="left" className="p-2">
              Charging
            </Divider>
            <div className="grid grid-cols-2 p-6 gap-4 ">
              <p className="px-[90px]">Charging Time</p>
              <p>56 Min-50 kW(10-80%)</p>
              <p className="px-[90px]">Fast Charging</p>
              <CheckIcon className="!text-green-700" />
            </div>
            <div>
              <p className=" flex justify-end px-[180px] p-4 text-blue-500">
                Report Incorrect Specs
              </p>
            </div>
            <div>
              <Divider textAlign="left" className="p-7">
                Suspension,Stearing & Breaks
              </Divider>
            </div>
            <div className="grid grid-cols-2">
              <div className=" grid gap-5 p-2">
                <span>
                  Front Suspension
                  <ErrorIcon />
                </span>
                <span>
                  RearSuspension
                  <ErrorIcon />
                </span>
                <span>
                  Stearing Type
                  <ErrorIcon />
                </span>
                <span>
                  Turning Radius
                  <ErrorIcon />
                </span>
                <span>
                  Front Break Type
                  <ErrorIcon />
                </span>
              </div>
              <div className="grid gap-3">
                <p>Independent MacPherson strut with coil</p>
                <p>spring</p>
                <p>Twitch beam with dual path Strut</p>
                <p>Electric</p>
                <p>4.9 Metres</p>
                <p>Disc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
