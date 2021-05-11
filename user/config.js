/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '-',
	name: 'Daily Tickets',
	presences: [
		{
			activity: '%snew',
			type: 'PLAYING'
		},
		{
			activity: 'with tickets',
			type: 'PLAYING'
		},
		{
			activity: 'for new tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | %shelp',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,
	guild: '821273054075289610', // ID of your guild (REQUIRED)
	staff_role: '827836824093327411', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '827836908566216714', // ID of your tickets category (REQUIRED)
		send_img: true,
		ping: 'here',
		text: `Hello there, {{ tag }}!
		A member of staff will assist you shortly.
		In the mean time, please describe your issue in as much detail as possible! :)`,
		pin: false,
		max: 1,
		default_topic: {
			command: 'Daily Drops Support',
			panel: 'Daily Drops Support'
		}
	},

	commands: {
		close: {
			confirmation: true,
			send_transcripts: true
		},
		delete: {
			confirmation: true
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '827836964681154570' // ID of your archives channel
	},

	panel: {
		title: 'Support Tickets',
		description: 'React to this panel to create a new ticket.\n\n**Creating ticket without reason = BAN**',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: false,
			keep_for: 7
		},
		discord: {
			enabled: true,
			channel: '827836964681154570' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
