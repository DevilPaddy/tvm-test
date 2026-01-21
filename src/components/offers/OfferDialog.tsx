import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LottieOffer from "./LottieOffer";

const OfferDialog = ({ open, onClose, offer, onAction }) => {
  if (!offer) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl p-6 text-center space-y-4">
        {/* Lottie */}
        <div className="mx-auto flex justify-center">
          <LottieOffer src={offer.lottieUrl} size={420} />
        </div>

        {/* Amount */}
        <h2 className="text-3xl font-bold text-tvm-blue">
          {offer.amount}
        </h2>

        {/* Offer Name */}
        <span className="max-w-auto mx-auto text-center px-3 py-1 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full">
          {offer.title}
        </span>

        {/* Extra Text */}
        <div className="text-sm text-gray-600 space-y-2">
          <p className="font-medium text-gray-800">
            On All IT Services
          </p>
          <p>
            Take advantage of our biggest discount ever on website
            development, app development, and digital marketing services.
          </p>

        </div>

        {/* Action Button */}
        <Button
          size="lg"
          className="button-animation w-full"
          onClick={onAction}
        >
          Claim Offer
        </Button>

        <p className="text-xs text-gray-400">
          *Offer valid for new clients only. Expires soon.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;
