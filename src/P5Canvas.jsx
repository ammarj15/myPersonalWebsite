import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';


function P5Canvas({ currentPalette, palettes, strokeWeight, numParticles}) {
  
  const canvasRef = useRef();
  let particles = [];
  //fiddle with this num
  const noiseScale = .01 * Math.random();
  

  //defualt palette
  

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(350, 450);
        //p.createCanvas(2000, 500)
        // p.createCanvas(p.windowWidth, (p.windowWidth / 3) * 4);
        // if (p.height > p.windowHeight) {
        //   p.resizeCanvas((p.windowHeight / 4) * 3, p.windowHeight);
        // }
        // p.resizeCanvas((p.windowHeight / 4) * 3, p.windowHeight);
        // p.maxCanv = (450, 550)
        for(let i = 0; i <= numParticles; i++) {
          particles.push(p.createVector(p.random(p.width), p.random(p.height)));
        }
      };


      p.draw = () => {
        p.background(1, 10);

        p.strokeWeight(strokeWeight);

        for(let i = 0; i < numParticles; i++) {
          let part = particles[i];

          applyColor(p, i);

          p.point(part.x, part.y);

          let n = p.noise(part.x * noiseScale, part.y * noiseScale);
          let a = p.TAU * n;
          part.x += p.cos(a);
          part.y += p.sin(a);

          if(!onScreen(part)) {
            part.x = p.random(p.width);
            part.y = p.random(p.height);
          }
        }
      };

      function onScreen(v) {
        return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
      }

      function applyColor(p, index) {
        if (Array.isArray(currentPalette) && currentPalette.length > 0) {
          let colorIndex = index % currentPalette.length;
          p.stroke(
            currentPalette[colorIndex][0],
            currentPalette[colorIndex][1],
            currentPalette[colorIndex][2]
          );
        } else {
          // Handle the case where currentPalette is not properly defined
          console.error('currentPalette is not a valid array');
        }
      }

      setTimeout(() => {
        p.noLoop()}, 5000);
    };

    const instance = new p5(sketch, canvasRef.current);
    // Cleanup function
    return () => {
      instance.remove();
      console.log('cleanup complete');
    };
    
  }, 
  []);
  
  return <div ref={canvasRef}></div>
}
export default P5Canvas;
