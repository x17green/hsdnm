import { createHmac } from "crypto"

/**
 * Institutional Security Protocol: The NIN Gate
 * Hashed server-side with high-entropy salt.
 * Original raw NIN is NEVER persisted to logs or database.
 */
export function hashNIN(rawNIN: string, salt?: string): string {
  const finalSalt = salt || process.env.NIN_HASH_SALT || "hsdnm-recovery-default-salt-2026";
  
  if (rawNIN.length !== 11) {
    throw new Error("Invalid NIN: Must be 11 digits.");
  }

  return createHmac("sha256", finalSalt)
    .update(rawNIN)
    .digest("hex");
}

/**
 * Validates if the hashed NIN matches a secondary check.
 */
export function verifyNIN(rawNIN: string, hash: string, salt: string): boolean {
  return hashNIN(rawNIN, salt) === hash;
}
