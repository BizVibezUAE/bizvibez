import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertIddToCode(idd: any) {
  if (
    !idd.root || !idd.suffixes || !Array.isArray(idd.suffixes) ||
    idd.suffixes.length === 0
  ) {
    return null;
  }
  return idd.root + idd.suffixes.join("");
}

export function getNativeName(nameObj: any) {
  if (!nameObj.nativeName || typeof nameObj.nativeName !== "object") {
    return null;
  }

  const nativeNames = Object.values(nameObj.nativeName);

  if (nativeNames.length < 2) {
    return nativeNames[0];
  }

  // @ts-ignore
  return nativeNames[1].official;
}

export function setDemoUser() {
  return {
    _id: "demo",
    name: "Demo User",
    email: "demo@gmail.com",
    phone: "+1234567890",
    role: "user",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
  };
}
