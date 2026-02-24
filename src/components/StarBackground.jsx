import { useEffect, useState } from "react";

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration


export const StarBackground = () => {
    const [stars,setStars] = useState([]);
    const [meteors,setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }
        
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);    
    },[])

    const generateStars = (num) => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000); 
        
        const newStars = [];

        for(let i=0; i<numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }

        setStars(newStars);
    }

    const generateMeteors = (num) => {
      const isMobile = window.innerWidth < 768;
      const numberOfMeteors = isMobile ? 12 : 20;
        
        const newMeteors = [];

        for(let i=0; i<numberOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * -20 ,
                animationDuration: Math.random() * 3 + 3
            });
        }

        setMeteors(newMeteors);
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {stars.map((star) => (
      <div 
        key={star.id} 
        className="star animate-pulse-subtle" 
        style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          top: `${star.y}%`,
          left: `${star.x}%`,
          opacity: star.opacity,
          // Gunakan animationDuration hanya untuk durasi, 
          // tapi tetap sebutkan nama animasinya (pulse-subtle)
          animationDuration: `${star.animationDuration}s`,
        }}
      />
    ))}

    {meteors.map((meteor) => (
      <div 
        key={meteor.id} 
        className="meteor animate-meteor" 
        style={{
          width: `${meteor.size * 50}px`,
          height: `${meteor.size * 2 }px`, 
          top: `${meteor.y}%`,
          left: `${meteor.x}%`,
          animationDuration: `${meteor.animationDuration}s`,
          animationDelay: `${meteor.delay}s`, 
        }}
      />
    ))}
  </div>
}
