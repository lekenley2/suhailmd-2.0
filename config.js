const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "525995987";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "525995987";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_20_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICAyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxuS1pGY1JPdWd3SFM4Mjd2TENZbFJETGEyeDZybEp1MHJlYWlTV1JaaDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc3elFTbnFHU2VtSFlyOURjWWVNSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZmYmM0ZGItYzkzZS00OWQ3LWIwNmQtNDk0ZjVkNDA1ZmI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTM5LFxuICAgICAgMTA0LFxuICAgICAgMjA4LFxuICAgICAgMjIyLFxuICAgICAgMTA5LFxuICAgICAgNTAsXG4gICAgICAzOSxcbiAgICAgIDk5LFxuICAgICAgNDgsXG4gICAgICAzMSxcbiAgICAgIDc0LFxuICAgICAgMTA2LFxuICAgICAgMjM2LFxuICAgICAgMjI2LFxuICAgICAgMjAyLFxuICAgICAgOSxcbiAgICAgIDExMCxcbiAgICAgIDYzLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTAwLFxuICAgICAgMjAwLFxuICAgICAgNzUsXG4gICAgICA2MixcbiAgICAgIDU4LFxuICAgICAgMTc5LFxuICAgICAgMTEyLFxuICAgICAgMjEsXG4gICAgICAxODksXG4gICAgICAyMDQsXG4gICAgICAxMzEsXG4gICAgICAxODUsXG4gICAgICAyNTAsXG4gICAgICAzNSxcbiAgICAgIDE5MyxcbiAgICAgIDI0MCxcbiAgICAgIDE5LFxuICAgICAgMjI5LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM2M1NKTkxOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MjgzNDMyNToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yIFdvb3NhcnRcIixcbiAgICBcImxpZFwiOiBcIjI1MjgwMTkwOTI2MDQ2MjoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR3h6Y1VKRU92dGdib0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRad2FaUGUzUFZXeXA3aGpweUpUREM1SnR3MmJLVXpmWDR3UFlER0VjVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnZXV3R4M0pJYmMwTGp2SjMydFZaeWxHMGlGWVYwM3Y1azZVcWRRNi92S3V3Q2liNVQvQy9tUzFTNVhzcXVwRlB0cjNiaCtFM1dmZGU1UDVhang1QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSGdudGhYSVVrR0gxZDBlTDAzOU55OFViZFd5N0tGdEdiK2Zsc0ZuN1hRdzZyL3pmQlZ6Y0lGcDR4bzdKaDNWUXZlUkRhVW9LZFc0cXRjMVpwOFkzQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDI4MzQzMjU6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjc3OTk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDJOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMMk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFcFBxdHBOV1ZBY3ZveHhwODFySlB3NXBLd29XZUphQUdVcWxLdU0rdFpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1NjE4OTA0MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTUyNDgxMjQ4M1wifSIKfQ=="  //


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Mr Woosart",
  ownername:process.env.OWNER_NAME|| "𓄂⍣⃝𝙂𝙊𝘿𝄟✮͢≛⃝𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
