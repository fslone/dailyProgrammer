// Description:

// An international shipping company is trying to figure out how to manufacture various types of containers. Given a volume they want to figure out the dimensions of various shapes that would all hold the same volume.
// Input:

// A volume in cubic meters.
// Output:

// Dimensions of containers of various types that would hold the volume. The following containers are possible.
// Cube
// Ball (Sphere)
// Cylinder
// Cone
// Example Input:

// 27
// Example Output:

//  Cube: 3.00m width, 3.00m, high, 3.00m tall
//  Cylinder: 3.00m tall, Diameter of 3.38m
//  Sphere: 1.86m Radius
//  Cone: 9.00m tall, 1.69m Radius
// Some Inputs to test.

// 27, 42, 1000, 2197

(function() {

  function _containerVolumes(volume) {

    var cubeSide,
        cylinderHeight,
        cylinderDiameter, 
        sphereRadius, 
        coneHeight, 
        coneRadius,
        PI = Math.PI;

    //cube volume = sideLen ^ 3
    cubeSide = Math.cbrt(volume).toFixed(5);

    //cylinder volume = Math.PI * r ^ 2 * h
    //assumes height equal to radius
    cylinderDiameter = (2 * Math.cbrt((volume/PI))).toFixed(5);
    cylinderHeight = cylinderDiameter / 2;

    //sphere volume = 4/3 * Math.PI * r ^ 3
    sphereRadius = Math.cbrt(volume/(4/3 * Math.PI)).toFixed(5);

    // cone volume = Math.PI * r ^ 2 * h/3
    // assumes height equal to radius
    coneHeight = Math.cbrt((3 * volume / PI)).toFixed(5);
    coneRadius = coneHeight;

    console.log("Cube: " + cubeSide + "m width, " + cubeSide + "m high, " + cubeSide + "m tall");
    console.log("Cylinder: " + cylinderHeight + "m tall, Diameter of " + cylinderDiameter + "m");
    console.log("Sphere: " + sphereRadius + "m Radius");
    console.log("Cone: " + coneHeight + "m tall, " + coneRadius + "m Radius");

  }

  _containerVolumes(27);

}());