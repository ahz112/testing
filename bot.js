const { Telegraf } = require('telegraf');

const bot = new Telegraf('8024883484:AAHUjgS1EmPF_-ldJYY7r8KXSauJgSGOvnU'); // Masukkan token bot Anda

// Command untuk mengirim tombol "Open"
bot.command('start', (ctx) => {
    ctx.reply('Klik tombol di bawah untuk membuka aplikasi web:', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open My Web App',
                        web_app: { url: 'https://testing-tau-wheat.vercel.app/' } // Ganti dengan URL aplikasi Anda
                    }
                ]
            ]
        }
    });
});

bot.launch();
console.log('Bot is running...');
