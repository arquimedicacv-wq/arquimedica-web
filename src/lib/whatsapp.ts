const WA_NUMBER = "5215519074304";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
