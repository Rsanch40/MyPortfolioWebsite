import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },

        particles: {
          color: { value: "79adf6" },
          links: {
            color: "79adf6",
            distance: 50,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",

          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
