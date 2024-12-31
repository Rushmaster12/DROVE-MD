const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴅʀᴏᴠᴇ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ: ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ғᴀʀʜᴀɴ ᴀʟɪ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*│  ◦* *ᴀɢᴇ➠ 18 ʏᴇᴀʀs*
*│  ◦* *ғʀᴏᴍ: ᴘᴀᴋɪsᴛᴀɴ *
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ-ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • DROVE-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢☞Owner:ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*│  ◦* *▢☞ᴛᴀʟᴋᴅʀᴏᴠᴇ(ʜᴀᴍᴢᴀ)*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
