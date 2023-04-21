export const useSessionStorage = () => {
  const lastKnownPack = sessionStorage.getItem("lastKnownPack")
    ? JSON.parse(sessionStorage.getItem("lastKnownPack") || "")
    : null;

  return { lastKnownPack: lastKnownPack  };
};
