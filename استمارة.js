let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*✿إجرائات الاستقبال❥*
*~╯•❉╊━━━•▸⊰⚜️⊱◂•━━━╉❉•╭~*

*↫اللقب🧧↬┋『』┋❥*

*↫اسم انمي/المانغا/المانها🎞️↬┋『』┋❥*

*↫من طرف مين🖇️↬┋『』┋❥*

*↫صبي ولا بنت🎎↬┋『』┋❥*

*[الرجاء ارفاق صورة لللقب✨]*

*~╯•❉╊━━━•▸⊰⚜️⊱◂•━━━╉❉•╭~*

*〘¹ممنوع ولد ياخذ لقب بنت ولعكس صحيح❗〙*

*〘²ممنوع تبقا في الاستقبال اكثر من 8ساعات❗〙*

*〘³سوالف او نشر =طرد❗〙*

*~╯•❉╊━━━•▸⊰⚜️⊱◂•━━━╉❉•╭~*

*نقابه*
「⊰ HEROS ⚜️ ⊱」`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/4f77484c5b91567e2b1fa.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(الاستمارة|استمارة)$/i;
handler.command = new RegExp;

export default handler;
