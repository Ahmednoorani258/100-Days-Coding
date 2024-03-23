// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
    VehicleType[VehicleType["Rickshaw"] = 3] = "Rickshaw";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
console.log(VehicleType.Rickshaw);
