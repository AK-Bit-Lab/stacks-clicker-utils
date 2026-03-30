/**
 * Stacks Clicker Utils - Utility functions and helpers
 * @module stacks-clicker-utils
 */

const VERSION = '0.1.0';

function formatAddress(address, start = 6, end = 4) {
  if (!address || address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

function isValidStacksAddress(address) {
  return /^S[PT][0-9A-HJ-NP-Z]{27,38}$/.test(address);
}

module.exports = { formatAddress, isValidStacksAddress, VERSION };
