import ky from "ky";

const primaryUrl = 
  "https://6613e1d32fc47b4cf27af985.mockapi.io/reactGym/"
;

const secondaryUrl = "https://657da8b73e3f5b189462e862.mockapi.io/reactGym2/";

export const primaryApi = ky.create({
  prefixUrl: primaryUrl,
  timeout: 30000,
});

export const secondaryApi = ky.create({
  prefixUrl: secondaryUrl,
  timeout: 30000,
});


