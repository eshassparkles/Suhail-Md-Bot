const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348164064792";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_57_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjV3BDYkNKRlQzUEl4cFdia1gzSmUrczYyN2xNWDNiTkNsRnRuTStXRzVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxUVR5TEJfUVFMdTBfNWlkVkpZSmFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExOTgzMDk1LWU5YzgtNDdlZC05YzdmLTZlMjU3OTdkYWViNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxNCxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICAyNTAsXG4gICAgICAxMDcsXG4gICAgICAyMjQsXG4gICAgICAxMzAsXG4gICAgICA3NyxcbiAgICAgIDIwOCxcbiAgICAgIDIyMSxcbiAgICAgIDI0MSxcbiAgICAgIDE1NSxcbiAgICAgIDExNixcbiAgICAgIDg2LFxuICAgICAgNTAsXG4gICAgICAxNjQsXG4gICAgICAxMDgsXG4gICAgICA1OCxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxOTMsXG4gICAgICAyMTMsXG4gICAgICAxNTUsXG4gICAgICAyNDksXG4gICAgICAyNDUsXG4gICAgICA3LFxuICAgICAgMTA3LFxuICAgICAgMTIwLFxuICAgICAgMTUzLFxuICAgICAgNjIsXG4gICAgICAzOCxcbiAgICAgIDE1NyxcbiAgICAgIDIxNCxcbiAgICAgIDE1NCxcbiAgICAgIDIwNyxcbiAgICAgIDIxOCxcbiAgICAgIDE3OSxcbiAgICAgIDM3LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldaRENUR1k5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNTM4NTkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDgxOTkwMTE1MzUwNjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2YWhNMEhFSVg0L3JjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3lrcGF1endBaFY5bVNGR0k0ejY4MTJrVXl6QUUvcWZvOTM2WnZ2ZHBEQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXY0tyUk85NFNtT3Z1QkVycTFaZ3NQK1ZlYkhPRlhyY3BPY0hjeUVuYkNTbUl6UjRPU3ArdnRFVEtBUngzeHZkMlFGK09TdGMxeXdGeGhQYjFlbWJBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmMks3VkwzSENCM3F0M09wYytIREpkK0pZMElsdFRmUkRUMkNRY2tQOURubUcrenVXRzcxVVdjTm0vZFp0TmJTNjRoTnMwSFk4d2E0N0lTR2dZWmpnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYzNTM4NTkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDM1ODQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0d6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLR3ouanNvbiI6IHt9Cn0= ",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
