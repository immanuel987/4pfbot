//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://toxicmd:toxxicmd12@toxic1239.04ozxeb.mongodb.net/?retryWrites=true&w=majority&appName=Toxic1239";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/EBUvKfB.jpeg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "33757054414";
global.owner = process.env.OWNER_NUMBER || "33757054414";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/EBUvKfB.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lnMVA5VHRCdjRlZmZ2NW1uR0NmSVdNMWpIdUZjWTltc2VldjBMdVNFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9zQUY3MHBvNWQ5VGQ5MlRHaVc0dlBMTjlPME5jRDJURWVwSjZuZmJXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRStEQzFLMFpxaUdJWlNyNDRsWHltZ2QwYXV3aWdNTmh0NkR3N2ZXKzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZ01heW9CZk9pWVFVRVA1V2lzbThXcmpzelhOOUoyWTdRVk1Tcms0OUFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHdEFhRlpHM2oreDkwM3pHZmZpeFhEb3MxUlNqUXpyTXhBcmNIdVpGMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVybVlQYjMxV09RUkZiMzFBNUI2a3lzbGNHcUpJK1laNGU3ZDhMNkZBUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVpTzZlT042ZDhBOVRROXR3T1kxUHVQanJtdVNoRUluMTdyTWYzRjVXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemF5M1dKSlVpeTBhdklwclZqUnFUb0ZxUFF6amd5YmhYR3JvTVJWYmppcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZVbDVKWlhGRHJsVmsyUUdUMmpqY00vcm9QaHBqRUIzRlFaT0FDQW9RU0t5TVYxT04xR0ZmNldrcytmelc1ZndUREtROHFwblJKWndTbnNyMFVIZWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiI4MndwbCtLOEUrMkVVMFNZRDFDeEdjT3pnYkpwaGphaU5iMC9kOVhEL2RZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFT2g1aGpMNFRYZW9vcEo4UnRUUHVnIiwicGhvbmVJZCI6ImNkNzNhMTRmLTFjN2YtNGVkMC04NTUwLTFjNWZkZTg4MGU2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTY1NHU0pDaVljc2w4Y3NxWnkxWmRPUTluMW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3JVRGhValNKQmNXc1FITU0wb2kzU0h2RERzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJETVpDOEJEIiwibWUiOnsiaWQiOiIyMzQ3MDI1OTA0Nzc0OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8klbDi8ORw5RN4LySIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUDMwWndERUt5NTlMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1Si9yRzJBRmZ1YTg4STcrV1BySnRUbFhRTXY5MlZUcGo2Z0pZRlRkTzNnPSIsImFjY291bnRTaWduYXR1cmUiOiJ6QXNFWHF4S29tNWdmNDl1UnMwZ0tmdHcyc2NHenJoSytMRnE5enVpSVp0bFhvNWk3eVpMWlBhN1pNZHlwcVVmN01RaFFia3FSWmtWajc3elRUQjFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2xVYjhrcndEVUFoc0tvMk10Q0IydXp5WjIyVnFVR3FuTmtMamRhYzZjTWJ3VzIwUGRyTzd1b05hYVdOVThQNXh1c2NMdjc2ZEIxT0daQjB6YTJSaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI1OTA0Nzc0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVTZjZ4dGdCWDdtdlBDTy9sajZ5YlU1VjBETC9kbFU2WStvQ1dCVTNUdDQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2Njk2OTB9
  process.env.SESSION_ID eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lnMVA5VHRCdjRlZmZ2NW1uR0NmSVdNMWpIdUZjWTltc2VldjBMdVNFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9zQUY3MHBvNWQ5VGQ5MlRHaVc0dlBMTjlPME5jRDJURWVwSjZuZmJXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRStEQzFLMFpxaUdJWlNyNDRsWHltZ2QwYXV3aWdNTmh0NkR3N2ZXKzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZ01heW9CZk9pWVFVRVA1V2lzbThXcmpzelhOOUoyWTdRVk1Tcms0OUFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHdEFhRlpHM2oreDkwM3pHZmZpeFhEb3MxUlNqUXpyTXhBcmNIdVpGMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVybVlQYjMxV09RUkZiMzFBNUI2a3lzbGNHcUpJK1laNGU3ZDhMNkZBUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVpTzZlT042ZDhBOVRROXR3T1kxUHVQanJtdVNoRUluMTdyTWYzRjVXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemF5M1dKSlVpeTBhdklwclZqUnFUb0ZxUFF6amd5YmhYR3JvTVJWYmppcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZVbDVKWlhGRHJsVmsyUUdUMmpqY00vcm9QaHBqRUIzRlFaT0FDQW9RU0t5TVYxT04xR0ZmNldrcytmelc1ZndUREtROHFwblJKWndTbnNyMFVIZWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiI4MndwbCtLOEUrMkVVMFNZRDFDeEdjT3pnYkpwaGphaU5iMC9kOVhEL2RZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFT2g1aGpMNFRYZW9vcEo4UnRUUHVnIiwicGhvbmVJZCI6ImNkNzNhMTRmLTFjN2YtNGVkMC04NTUwLTFjNWZkZTg4MGU2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTY1NHU0pDaVljc2w4Y3NxWnkxWmRPUTluMW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3JVRGhValNKQmNXc1FITU0wb2kzU0h2RERzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJETVpDOEJEIiwibWUiOnsiaWQiOiIyMzQ3MDI1OTA0Nzc0OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8klbDi8ORw5RN4LySIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUDMwWndERUt5NTlMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1Si9yRzJBRmZ1YTg4STcrV1BySnRUbFhRTXY5MlZUcGo2Z0pZRlRkTzNnPSIsImFjY291bnRTaWduYXR1cmUiOiJ6QXNFWHF4S29tNWdmNDl1UnMwZ0tmdHcyc2NHenJoSytMRnE5enVpSVp0bFhvNWk3eVpMWlBhN1pNZHlwcVVmN01RaFFia3FSWmtWajc3elRUQjFDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2xVYjhrcndEVUFoc0tvMk10Q0IydXp5WjIyVnFVR3FuTmtMamRhYzZjTWJ3VzIwUGRyTzd1b05hYVdOVThQNXh1c2NMdjc2ZEIxT0daQjB6YTJSaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI1OTA0Nzc0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVTZjZ4dGdCWDdtdlBDTy9sajZ5YlU1VjBETC9kbFU2WStvQ1dCVTNUdDQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2Njk2OTB9
  "" //add session id
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.2",
  caption: process.env.CAPTION || "©ᴛᴏxxɪᴄ ᴍᴅ $",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOM",
  ownername: process.env.OWNER_NAME || "VENOM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
