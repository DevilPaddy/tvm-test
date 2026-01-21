export const shouldShowOffer = (offer) => {
    const key = `offer_seen_${offer.id}`;
    const lastSeen = localStorage.getItem(key);
  
    if (!lastSeen) return true;
  
    const diff =
      (Date.now() - Number(lastSeen)) / (1000 * 60 * 60);
  
    return diff >= offer.durationHours;
  };
  
  export const markOfferSeen = (offer) => {
    const key = `offer_seen_${offer.id}`;
    localStorage.setItem(key, Date.now().toString());
  };
  