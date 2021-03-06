module.exports = {
	header: {
		title: "atronandbeyond.com",
		tagline: "Beats and Code",
		github: "https://github.com/awayawm",
		linkedin: "https://www.linkedin.com/in/aaron-myers-88b52683",
		twitter: "",
	},
	footer: {},
	tags: [
		{
			id: 1,
			name: "Chess",
			link: "/tags/chess",
			enabled: true,
			icon: "♟️",
		},
		{
			id: 2,
			name: "Beats",
			link: "/tags/beats",
			enabled: false,
			icon: "🎶",
		},
		{
			id: 3,
			name: "Code",
			link: "/tags/code",
			enabled: true,
			icon: "💻",
		},
		{
			id: 4,
			name: "Aws",
			link: "/tags/aws",
			enabled: true,
			icon: "☁️",
		},
	],
	articles: [
		{
			enabled: true,
			title: "Reading PGN from the DGT Electronic Chessboard",
			link: "reading-pgn-from-the-dgt-electronic-chessboard",
			tags: [1],
			date: "2021-06-20",
			content: `<p>The DGT Electronic Chess Board is capable of recording any games played on it into internal memory.  Each piece emits a 
faint RFID signal and the board contains a mesh sensor that detects the presence of any pieces placed on top of it.  The piece needs to be directly 
on top of a square for the move to register.  In rare cases the board can register ghost pieces and from radio interference.  The data on the board can be read 
by a chess program like Fritz or can be simply written to disk for archiving or future analysis.  DGT releases a few programs along with the board
 that are supposed to make connecting the board to your computer easy.  RabbitQueen is helpful for dumping the board memory (readonly) and configuring   
internal parameters.  RabbitConnect and RabbitPlugin allow you to connect the board to chess programs like Fritz.  
</p>
<p>
Of the programs DGT provides, LiveChess is the most interesting.  It is used capture the live games played by multiple DGT boards 
and can write them to disk or stream them on the LiveChess cloud.  The file written to disk will update as the games progresses.  It
can be read by online chess services like Lichess or by anyone who wants to parse this data.  I imagine there are folks out there who 
read the pgn as is and can reconstruct the game in their head like Beth Harmon in The Queen's Gambit.
</p>
<p>
Thanks to the number of chess libraries on Github it is easy to parse a pgn file.  Python-chess seems like the most feature rich open source project. It 
has a ton of contributors and integrates with Polyglot, Syzeyg, and Stockfish easily.  It also has methods for traversing variations of the Pgn as a tree 
which would be useful for game analysis. If you prefer javascript, chess.js a great choice too.  It has everything needed to do fun things with Pgn files 
and that's what we'll use in the code below.
</p>

`,
		},
		{
			enabled: true,
			title:
				"UnityWebRequest and Tmp_Dropdown: Making a dynamic dropdown in Unity",
			link: "unitywebrequest-and-tmp-dropdown-making-a-dynamic-dropdown-in-unity",
			tags: [3],
			date: "2021-06-20",
			content: `<p>When putting together a GUI in Unity you may need a dropdown and you don't know the value of the options 
until the menu is used.  For example if the values need to come from a web request you may not want to make that request until 
the menu is clicked.  To do this we'll need to use two classes built into Unity, UnityWebRequest and JsonUtility.   UnityWebRequest 
is used to make the network request and JsonUtility is used to serialize the response into a class that exposes the values from the response.</p> 

<ul>
<li><a href="https://docs.unity3d.com/Manual/JSONSerialization.html">https://docs.unity3d.com/Manual/JSONSerialization.html</a></li>
<li><a href="http://jsonviewer.stack.hu/#http://lichess.org/api/team/all">http://jsonviewer.stack.hu/#http://lichess.org/api/team/all</a></li>
</ul>`,
		},
		{
			enabled: true,
			title: "Building a Discord Bot with Discord.js",
			link: "building-a-discord-bot-with-discord-js",
			tags: [3],
			date: "2021-06-20",
			content: `If you've used discord you probably know there are discord bots for everything.  There are bots for playing music, gambling, managing roles and 
      about anything else that seems remotely useful.  This is probably because making a discord bot is pretty straightforward using discord.js.
      `,
		},
		{
			enabled: true,
			title: "Checking Out Mc-707 Firmware update 1.72",
			link: "checking-out-the-mc-707-fireware-update-1-72",
			tags: [2],
			date: "2021-06-20",
			content: `The MC-707 is a groovebox and one of Roland's DAWless music creation products.  I don't get this thing out nearly enough but when I do it's always 
      a good time.  Let's check out some of the updates in the newest 1.72 firmware.
      <a href="https://www.roland.com/global/support/by_product/mc-707/updates_drivers/fe3f083e-fe45-40ff-9a0d-7283771d846f/" target="_blank">UPDATE HISTORY</a>
      `,
		},
		{
			enabled: false,
			title: "Creating a Custom Toolchain for React",
			link: "creating-a-custom-toolchain-for-react",
			tags: [3],
			date: "2021-06-20",
			content: `A recent humble bundle for front end development contained the last press of O'Reilly book Learning React.  Although you can run pure React by including react from 
      the CDN, it's common to use a toolchain to bring together a full ecosystems of packages that make developing with React easier. 
      This article is heavily inspired by <a href="https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658"/>this blog post</a>.`,
		},
		{
			enabled: true,
			title: "Mounting a Snapshot to an EC2 Machine",
			link: "mounting-volume-made-from-snapshot-to-ec2",
			tags: [4],
			date: "2021-07-02",
			content: `<p>If you make snapshots from the volumes of your ec2 machine then you may find yourself needing to mount one of those volumes one day to recover
			some data.  We can never be sure when bad judgement will strike and something important will be deleted forever!  If regular snapshots are being created 
			this data we can recovery these files in a few simple steps.</p>

			<p>
			Back in 2019 I migrated from OwnCloud to NextCloud.  Fast forward to 2021 and I'm still using a NextCloud and for whatever reason the old OwnCloud install was never
			cleaned up.  As luck would have it while cleaning up what I thought were old files I discovered that the data/ directory 
			for NextCloud is unfortunately using the data/ directory inside the OwnCloud directory!  Fortunately 
			just a day ago I took a snapshop of the drive so recovery is easy.  First convert the snapshot into a volume.
			</p>

			<p>
			sudo mount -o nouuid -t xfs /dev/xdf1 /mnt/backup
			</p>
			<ul>
			<li><a href="https://forums.aws.amazon.com/thread.jspa?messageID=114594">Mounting EBS volume (mount: wrong fs type, bad option, bad superblock)</a></li>
			<li><a href="https://bbs.archlinux.org/viewtopic.php?id=218883">[Solved] Nextcloud, change Data folder location</a></li>
			<li><a href="https://docs.nextcloud.com/server/21/admin_manual//maintenance/migrating_owncloud.html">Migrating from ownCloud</a></li>
			</ul>
			`,
		},
	],
}
