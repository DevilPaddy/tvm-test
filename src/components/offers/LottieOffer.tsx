import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieOffer = ({ src, size = 220 }) => {
  return (
    <div style={{ width: size }}>
      <DotLottieReact src={src} loop autoplay />
    </div>
  );
};

export default LottieOffer;
