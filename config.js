const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sychezmalik45@gmail.com"
global.location="nairobi,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254751967357,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254751967357,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_04_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpFSDhIcHQxVllpYWpRbWpXdVlVajF0M2RuNmwvNFFHdFVTMVBvd1BWNnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQ3RXBYaWRxUTdxSVpKbVRSSGlWN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjFiOTIzZTktNDRmOS00MjcyLWFjMzItZmVhYmMwZjczY2VhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDE0OCxcbiAgICAgIDEwOSxcbiAgICAgIDY4LFxuICAgICAgMTc0LFxuICAgICAgMTExLFxuICAgICAgNTQsXG4gICAgICA4MyxcbiAgICAgIDIwNixcbiAgICAgIDI1LFxuICAgICAgMTY4LFxuICAgICAgMTc1LFxuICAgICAgNzMsXG4gICAgICAxNTYsXG4gICAgICAxMTAsXG4gICAgICAxMjUsXG4gICAgICAyMjUsXG4gICAgICA2MCxcbiAgICAgIDU5LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDE2OSxcbiAgICAgIDE2MyxcbiAgICAgIDIwNixcbiAgICAgIDYwLFxuICAgICAgMTQ5LFxuICAgICAgMjUzLFxuICAgICAgMTAwLFxuICAgICAgMTQ5LFxuICAgICAgMjMxLFxuICAgICAgMTQwLFxuICAgICAgMjAsXG4gICAgICAyMzksXG4gICAgICAxMDEsXG4gICAgICAxNzcsXG4gICAgICAxNyxcbiAgICAgIDE0NSxcbiAgICAgIDg5LFxuICAgICAgMTk3LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktHUExWSkJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTE5NjczNTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWy8J2WjvCdlpnwnZaN8J2Wml/wnZaS8J2WhvCdlpDwnZaO8J2WhvCdlpvwnZaK8J2WkfCdlo5cIixcbiAgICBcImxpZFwiOiBcIjY5Njg2MTI5NjM1NDczOjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyVGlkZ0RFTytzcGJNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSDJGb1lWRUJKSEJRWHdqZk5jcnd3bEtHZ1JsZ1Jpc2c2a0N3M1l2RmJSOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaMm04elRoZURTQUk2TzQxVWxldFpYWGJWMTJUejBnS1F2QnNpNnFyY00wU0RyVlFOUjBnMStvQTRnYWtrbkFuaG9talhsZm1Wc3Ztdk0xV04vWU5BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4M2V6ZEdXM3FKRmhwUUR3TWIwWDlVb2pUVkR3NkcxblYycmpQcmxIL0JCcXFtWmtSMlk0b0xFTEdtSUl4VGRLUkVEYmZzSnJ0OVk5SkpJaHdtT2NEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTE5NjczNTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTc5NDQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQktLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCS0suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1WTNKOEhvSTNSUFhIbjMvYmNRTGhwZ09Id2xZZ0I2WUNMUmFWb2RoYXJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5MDAwNTc1NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
