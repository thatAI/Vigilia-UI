export function getColorByRange(value) {
  if (value === 0) {
    return "grey"; // theme.nist.zero
  } else if (value >= 1 && value < 70) {
    return "red"; // theme.nist.one_seventy
  } else if (value >= 70 && value < 80) {
    return "#e1ad01"; // theme.nist.seventy_eighty
  } else if (value >= 80 && value <= 100) {
    return "green"; // theme.nist.eighty_hundred
  } else {
    return "white"; // theme.nist.default
  }
}

export function pathname(value) {
  if (value === "/") {
    return { name: "Mark Wood", role: "Admin" };
  } else if (value === "/nist_csf") {
    return { name: "Lisa Audrey", role: "CISO" };
  } else if (value === "/cves") {
    return { name: "Lisa Audrey", role: "CISO" };
  } else if (value ==="/policy") {
    return { name: "Lisa Audrey", role: "CISO" };
  } else if (value === "/runbook") {
    return { name: "Ken Williams", role: "Operator" };
  }
}
