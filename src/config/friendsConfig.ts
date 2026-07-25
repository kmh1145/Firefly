import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "宁宁云",
		imgurl:
			"https://nnyunidc.com/themes/web/nnyun-web/assets/img/favicon.ico",
		desc: "优质的idc服务商，提供高性价比的云服务器、VPS、独立服务器等产品。",
		siteurl: "https://nnyunidc.com",
		tags: ["IDC"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "mikus blog",
		imgurl: "https://image.mikus.ink/uploads/kmh12345/2026/07/25/47c3cfc4b653.webp",
		desc: "欢迎来到mikus的博客！",
		siteurl: "https://blog.mikus.ink",
		tags: ["blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "zyxblog",
		imgurl: "https://zyx-blog.top/avatar.jpg",
		desc: "arch大佬这一块",
		siteurl: "https://zyx-blog.top",
		tags: ["blog"],
		weight: 9,
		enabled: true,
	},
		{
		title: "橘贝Blog",
		imgurl: "https://blog.gbjimmy.com/assets/avatar/avatar.webp",
		desc: "一个东方、型月爱好者",
		siteurl: "https://blog.gbjimmy.com",
		tags: ["blog"],
		weight: 9,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
