exports.playSlot = (req, res) => {
  // Lógica da roleta/slot simples
  const result = Math.random() < 0.5 ? "WIN" : "LOSE";
  res.json({ result });
};
