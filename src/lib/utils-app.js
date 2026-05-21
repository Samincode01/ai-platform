export function uid(prefix = "ID") {
  return `${prefix}-${Math.random().toString(36).slice(2, 7).toUpperCase()}${Date.now().toString().slice(-4)}`;
}
export function initials(name = "User") {
  return (
    String(name)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((x) => x[0])
      .join("")
      .toUpperCase() || "U"
  );
}
export function normalizeTrack(track = "Computer Vision") {
  const map = {
    "Computer Vision": "CV",
    NLP: "NLP",
    Robotics: "Robotics",
    "Predictive ML": "ML",
    "Generative AI": "GenAI",
    "Audio & Speech": "Audio",
  };
  return map[track] || track;
}
export function trackBadgeColor(track) {
  if (track === "NLP") return "indigo";
  if (track === "Robotics") return "orange";
  if (track === "Generative AI") return "gold";
  if (track === "Predictive ML") return "indigo";
  if (track === "Audio & Speech") return "cyan";
  return "cyan";
}
export function statusBadgeType(status) {
  const s = String(status || "").toLowerCase();
  if (s.includes("accepted") || s.includes("completed") || s.includes("paid") || s.includes("auto")) return "green";
  if (s.includes("pending") || s.includes("running") || s.includes("manual")) return "orange";
  if (s.includes("failed") || s.includes("reject") || s.includes("banned")) return "red";
  if (s.includes("admin")) return "red";
  if (s.includes("judge")) return "indigo";
  return "gray";
}
export function scoreText(score) {
  return typeof score === "number" ? `${score.toFixed(1)}%` : "N/A";
}
export function pointsText(n) {
  return Number(n || 0).toLocaleString("en-US");
}
export function lastSubmitTextForDate(date) {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.max(1, Math.floor(diff / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}
