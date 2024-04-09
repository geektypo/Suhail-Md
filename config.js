const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sychezmalik45@gmail.com"
global.location="Nairobi,kenya."


global.mongodb= process.env.MONGODB_URI || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E39qMdWBujOHGVgWBY3XW1";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254751967357" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254751967357";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254751967357,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || 254751967357 ",254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_04_09_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUg2NEhBSno4YURCMDEwNE0zUTVpOFZDRG43T1RoYTlsYzg4WXdXVm4xcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJrckMzbnQyNWJZTWdhQ3RFdlpnTkJkSkM1c0pJR2FpRllnaGhQQ1lzU009XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0x6TW9tbkJid1hjeVFqTEdDSC9LTm4zZ2ZBeHlzdTZvdjNiblloeS9Ycz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFOMFY2QUJZZnVMRnRoUENmNUNwNVVkWVlxejVQZ1dmNFJZbTV0UWh5ejA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUhlU0pkT3JYaTUrWlFZU3dHL2JYVndBMzVXbVRVY0FMYkNSdUdGUmVXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBqS3NoNXVRWlFPZllHWU0yODZDdWtwZTQwU1dqcFliTWgzL3N1enNhZ3M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLRytvSGMwVE1oNTFtTVZFL1NSUS83K3haY3pXREJLcjAvUXE5dDF3R0ZBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaTBiQjhvM3I4Z2ZtU3FHUVJNMkVQZUFiZi8rSlNmRUdSWW1Sek9CSmRHTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1TWh2L28zZ3JSOTNHWXArSUJLaHFTMjljNVp6UGJkN3VzR3piQ2JmVzVrU1BxdVhsbWRlKzBzODJOSFUwOW9TSU1lL05YSUdNYUlxRWZ6bXBXQmdpdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAzLFwiYWR2U2VjcmV0S2V5XCI6XCJXdG1EMTdGSkVlU1E2Yms1UmVFZEc3UVh1Q1phWmc3dEZySFFXWDk1QWJ3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiODUtYUwxYlNSaTZmaEJsdXZIZHVMd1wiLFwicGhvbmVJZFwiOlwiZTQxM2M2ODgtOWNiMC00N2Y1LTgwMTYtMGIyOGVjZDdmMjgxXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI5K3pSQXQxYUJlaFJiU0Z6bHJXblFFaWlYM0E9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNTLy9Fd0gwZmlnRCs2Y2lDa3U0bytYZ3hZbz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTm1CNXZjRkVNM1YxTEFHR0FVZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInZvNDlzMFc1RmY3NXpTOHNITk1ucXdsdVplbWl5bXVMZ3dYSzB3L2x6a009XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJIaU50UHdFZGI0Q0NHRmM2WWIwUnQ4TzdPSXFuekdYVitKa1huSEdoMG8xMWNmblRCbjd4eFhXOElJVisySTEwbTBDTk5LZXhYcG96REFvRUplVStCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImdVS0dnUnBveERuYjVXR285dHdFUUdJcnRzQTduL01ZMWYyaXRkWFVyYUNxQjJQR0g1ODd2UWRNODZnNGN3RjZNalIzVENDKzVxNEdQL1M2ZURMRmlnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3NTE5NjczNTc6MTNAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNjk2ODYxMjk2MzU0NzM6MTNAbGlkXCIsXCJuYW1lXCI6XCLwnZWy8J2WjvCdlpnwnZaN8J2WmiDwnZaS8J2WhvCdlpDwnZaO8J2WhvCdlpvwnZaK8J2WkfCdlo5cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3NTE5NjczNTc6MTNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYjZPUGJORnVSWCsrYzB2TEJ6VEo2c0pibVhwb3Nwcmk0TUZ5dE1QNWM1RFwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI2NjMyNDksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTDYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDYrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK1RkU1JwczNaSmhPb2dkdlNPS0t5SzdLbyswaDBQKzJhU3pPRGZ4S2srMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzExNTYzODczMzg3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDYwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTDVYWVI2OVkvVW9JMFpmNE1aV051bjFPMTA1QVRXWHJWSkMvVHJ3NXpsYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzQ1LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw2MS5qc29uIjogIntcImtleURhdGFcIjpcIm0rOE1vVHpZVWpJWWlaVVIwR2tsUkNGc0tCc1pZdkRxYVZjL2ZndkUxUXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5MzQwOTc0NSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExMzk1NDQyMzI2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDYyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnVjYWZJUDdzejJKZ3BYNjlweXVsU0VqQ2o1N3NDb2pBc0tlQWNaZ242cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzQ1LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzExMzk1NDY1OTA1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDYzLmpzb24iOiAie1wia2V5RGF0YVwiOlwieEZubFR5ZnlFZG51cXJkc2IxSGtpNkp0TlJZdlhERzAzUHgvNklKcG1tST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEzOTU3NjQ1OTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNjQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBMHV5c1NFM2JCUERJRk1oMzI2aG5rcnpDU2E1TTIxWHZ4SGVkaDRaN0ZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTM0MDk3NTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTM5NzIyMTE1NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw2NS5qc29uIjogIntcImtleURhdGFcIjpcInFsYXlxbElRQk9YUHNtV3RHRDlwODRwbkYwUFdFSWZoNGc1SkN2bjZVcGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5MzQwOTc1MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5amhsa2pxWWV6SVZBNDVrQ2cwQ2ovR2NXTTlwYko0NU9QZExEOGgrUTBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTM0MDk3NTAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzExNDg2NzU4NDY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDY3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmJ2WDFJT0xSWUpOSkc1bjdna2lkRWxodDBXYmtONFFoZmZ4ckUvV1UwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzUwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuNTdFK3hmTThqNWhTYkhXVXY0M2NiZlB0WGZGL21kMXFJenJOUDRzUEFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTM0MDk3NTAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE0ODc4MjczMDJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxWVpLWGVaM3VET0MyNDFoUFpnYUFWQzdLdmFjcHI3aVZLQXZVUnMyRUtJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTM0MDk3NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE1NjM3NjE3MDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNl9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnRremFHK2kxSUN3WVRObWJDTzE2a2IrZG9ycHo0Q0xKblZjalRyaTFyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYUmN2K0xoVUc3QklDSU41MUljejR0NHhJbVJlN1Z1bHp5d3pkUlhyZWlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTM0MDk3NDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTM5MTY2NDQzMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw3QS5qc29uIjogIntcImtleURhdGFcIjpcIkhBQTRESE0xQ082azRTdkZ0Q1I2YkszT21GYzlndzJaZWl0VTZZTEZOZkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5MzQwOTc1MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDdCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEtua00zdXRETDdOaDgrNndqL2grNHB5bUJINmZnYnJ6NndKT2tpNXNlVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkzNDA5NzUzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjY0OTQzNjU5M1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "githumakiaveli" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "githumakiaveli",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "smartgithu",
  ownername:process.env.OWNER_NAME|| "It'x githu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
