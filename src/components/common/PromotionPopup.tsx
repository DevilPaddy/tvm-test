
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PromotionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if the popup has been dismissed before
      const popupDismissed = localStorage.getItem("promotionPopupDismissed");
      if (!popupDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user closed the popup
    localStorage.setItem("promotionPopupDismissed", "true");
  };

  const handleClaimOffer = () => {
    toast({
      title: "Offer claimed!",
      description: "Your 60% discount code has been sent to your email.",
    });
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="relative w-11/12 max-w-md p-6 bg-white rounded-lg shadow-xl animate-scale-in">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
              Limited Time Offer
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            SPECIAL PROMOTION
          </h3>
          
          <div className="mb-4">
            <span className="text-5xl font-extrabold text-tvm-blue">60% OFF</span>
            <p className="text-sm text-gray-600 mt-1">On All IT Services</p>
          </div>
          
          <p className="text-gray-600 mb-6">
            Take advantage of our biggest discount ever on website development, app development, 
            and digital marketing services.
          </p>
          
          <button
            onClick={handleClaimOffer}
            className="w-full py-3 px-4 bg-tvm-blue text-white font-medium rounded-md hover:bg-tvm-darkBlue transition-colors"
          >
            Claim Your 60% Discount Now
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            *Offer valid for new clients only. Expires soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;
