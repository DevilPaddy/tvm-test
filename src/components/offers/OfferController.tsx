import { useEffect, useState } from "react";
import OfferDialog from "./OfferDialog";
import { shouldShowOffer, markOfferSeen } from "../../../utils/useOfferVisibility.ts";

const OfferController = () => {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await fetch("/api/offers");
        const json = await res.json();

        // ✅ Use 'isActive' to match your API
        if (json.success && json.data && json.data.isActive) {
          if (shouldShowOffer(json.data)) {
            setOffer(json.data);
            setOpen(true);
            markOfferSeen(json.data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch offer:", error);
      }
    };

    fetchOffer();
  }, []);

  return (
    <OfferDialog
      open={open}
      onClose={() => setOpen(false)}
      onAction={() => setOpen(false)}
      offer={offer}
    />
  );
};

export default OfferController;
