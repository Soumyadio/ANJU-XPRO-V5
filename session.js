//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVNZWhkcDRUVFp2OWpDZlBISkltUkFKbGwrN1lxUGNUWE5IMmhlV1RGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dQYzd3eHcrMzc4ZHZ0K2dYck5kUmIrTjEyaGVKR25DanNLTG5GNkFVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRzRYSnE0S2duTHF5T3lSZmN2aHF4MTFBaFRBb1RxWlBqUll1Q0Z6eTF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTzlTZThqUXVKakhuSktKczFlZDdDaFNQQXVGd0grSHQ1NG01V3A0YVVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNRUxsOTVRUSt2d2RpdUdLUHJKM1ExVFN2UUdjYkZlVnQ4akZTU2tzVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IiswTjd2Sy9NVEZtK1FlUkVnV1Z5emoxVzUzS0JQL0ZlbytFWE14YUxHVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU13bWc4bVBMeU1kbjFRSUl1b2FWU0hKQUd3NTQ1aXlKQnpSaW9aZDhHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHdWVnhrU3ZSZVhOQzArMkx0dy9QdXkzOUR0ZFNOUWVhUGg4VDQxYXZCOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNWK1ZybUpkL1dwa1hKVGlXNGtYb3g3QmhYS3hzcnl4ZkU1b1dMbm4vR3FyejFvMDZHVWZUTFJWRHVLRlRtb2FjdmpXR1d3d2xwRzF1cjZmVGlyOWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IlVmeEVWdiswMVdENkNQTFBNL0IzKzRXV1prNkJ1MGorWVFLYnVGSVMyOVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNieUtUSnpqVC1pczltUV9pYTc1eFEiLCJwaG9uZUlkIjoiOWMzNjA0YTctNDJkNC00YzdkLTljZmEtNGNlMTFiZGNiODhhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3eWs3cmVPbER5QlFLSDhJQktDemVVdHV5WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRVVCT3UwalVVaVNiZEhiNG5IbE5icGc4OUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0ZIWlg2WjkiLCJtZSI6eyJpZCI6IjkxOTM4MjQwMDc1OToxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqr7HXgdeF1pLhqLXXgdeFz4XXgdeFIOqph9eB14XdiuGorteB14XWruqrtsmR14HXhdau1arXgdeF3YrqqrHXgdeF4oSYICDqqYfXgdeF3YrJkdeB14XWruGlo9eB14XWquGlo9eB14XWquqqsdeB14Xhna/XgcaZ14HXhdaRIiwibGlkIjoiODM3ODY1NzQzNzMwOTI6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdUErYk1GRUwzRys4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZRWtpb01EQVcxeHAxVmtYd3BwQTFZOGQ0SzdaYmZReUZteVV1a1M1MlM0PSIsImFjY291bnRTaWduYXR1cmUiOiJlTFhhYUhPUXlGNlI3QzJ0MExiMEJtM3VxUkhkSVR4ajNTZkIzMHA0L0gxdzQvZjF4Q0ZVZnBVV2hPMmpOZ1F6QW1rQmRmamhVUWJkS3ZUaTJRMzFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYkF4Qmpuc1F1RXVEb0dsYmRTRVpsQnVTWUQ5eksyV2kwaXh3VmFsVVp1aXMwaXhuN2FUMG15Nnp6R2ZQcGVlSlNzazRMWEhNczlPZi9Hck1vUGk2anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkzODI0MDA3NTk6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0JKSXFEQXdGdGNhZFZaRjhLYVFOV1BIZUN1MlczME1oWnNsTHBFdWRrdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMDQ5MDM1LCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU85cCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "919382400759",
  PASSWORD: 
    process.env.PASSWORD || "919382400759",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["919382400759", "919382400759"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
