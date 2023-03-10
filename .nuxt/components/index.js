export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as CircleProgress } from '../../components/api/CircleProgress.vue'
export { default as DateDisplay } from '../../components/api/DateDisplay.vue'
export { default as LoginLink } from '../../components/api/LoginLink.vue'
export { default as Pagination } from '../../components/api/Pagination.vue'
export { default as ForumLink } from '../../components/forums/ForumLink.vue'
export { default as RecentPosts } from '../../components/forums/RecentPosts.vue'
export { default as ThreadLink } from '../../components/forums/ThreadLink.vue'
export { default as FriendsMenu } from '../../components/header/FriendsMenu.vue'
export { default as NotificationsMenu } from '../../components/header/NotificationsMenu.vue'
export { default as SearchMenu } from '../../components/header/SearchMenu.vue'
export { default as StaffMenu } from '../../components/header/StaffMenu.vue'
export { default as UserMenu } from '../../components/header/UserMenu.vue'
export { default as UserRender } from '../../components/header/UserRender.vue'
export { default as PlayerAvatar } from '../../components/player/PlayerAvatar.vue'
export { default as PlayerForumsActivity } from '../../components/player/PlayerForumsActivity.vue'
export { default as PlayerLink } from '../../components/player/PlayerLink.vue'
export { default as PlayerLookup } from '../../components/player/PlayerLookup.vue'
export { default as BattlegroundsStats } from '../../components/profile/BattlegroundsStats.vue'
export { default as BedwarsStats } from '../../components/profile/BedwarsStats.vue'
export { default as PrisonStats } from '../../components/profile/PrisonStats.vue'
export { default as QuickStats } from '../../components/profile/QuickStats.vue'
export { default as SkyblockStats } from '../../components/profile/SkyblockStats.vue'
export { default as SkywarsStats } from '../../components/profile/SkywarsStats.vue'
export { default as GameList } from '../../components/splash/GameList.vue'
export { default as PlayerSearch } from '../../components/splash/PlayerSearch.vue'
export { default as SupportTicketLink } from '../../components/support/SupportTicketLink.vue'
export { default as ChangePasswordForm } from '../../components/user/ChangePasswordForm.vue'
export { default as Reply } from '../../components/forums/thread/Reply.vue'
export { default as ReplyForm } from '../../components/forums/thread/ReplyForm.vue'
export { default as ThreadPlayerCard } from '../../components/forums/thread/ThreadPlayerCard.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazyCircleProgress = import('../../components/api/CircleProgress.vue' /* webpackChunkName: "components/circle-progress" */).then(c => c.default || c)
export const LazyDateDisplay = import('../../components/api/DateDisplay.vue' /* webpackChunkName: "components/date-display" */).then(c => c.default || c)
export const LazyLoginLink = import('../../components/api/LoginLink.vue' /* webpackChunkName: "components/login-link" */).then(c => c.default || c)
export const LazyPagination = import('../../components/api/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => c.default || c)
export const LazyForumLink = import('../../components/forums/ForumLink.vue' /* webpackChunkName: "components/forum-link" */).then(c => c.default || c)
export const LazyRecentPosts = import('../../components/forums/RecentPosts.vue' /* webpackChunkName: "components/recent-posts" */).then(c => c.default || c)
export const LazyThreadLink = import('../../components/forums/ThreadLink.vue' /* webpackChunkName: "components/thread-link" */).then(c => c.default || c)
export const LazyFriendsMenu = import('../../components/header/FriendsMenu.vue' /* webpackChunkName: "components/friends-menu" */).then(c => c.default || c)
export const LazyNotificationsMenu = import('../../components/header/NotificationsMenu.vue' /* webpackChunkName: "components/notifications-menu" */).then(c => c.default || c)
export const LazySearchMenu = import('../../components/header/SearchMenu.vue' /* webpackChunkName: "components/search-menu" */).then(c => c.default || c)
export const LazyStaffMenu = import('../../components/header/StaffMenu.vue' /* webpackChunkName: "components/staff-menu" */).then(c => c.default || c)
export const LazyUserMenu = import('../../components/header/UserMenu.vue' /* webpackChunkName: "components/user-menu" */).then(c => c.default || c)
export const LazyUserRender = import('../../components/header/UserRender.vue' /* webpackChunkName: "components/user-render" */).then(c => c.default || c)
export const LazyPlayerAvatar = import('../../components/player/PlayerAvatar.vue' /* webpackChunkName: "components/player-avatar" */).then(c => c.default || c)
export const LazyPlayerForumsActivity = import('../../components/player/PlayerForumsActivity.vue' /* webpackChunkName: "components/player-forums-activity" */).then(c => c.default || c)
export const LazyPlayerLink = import('../../components/player/PlayerLink.vue' /* webpackChunkName: "components/player-link" */).then(c => c.default || c)
export const LazyPlayerLookup = import('../../components/player/PlayerLookup.vue' /* webpackChunkName: "components/player-lookup" */).then(c => c.default || c)
export const LazyBattlegroundsStats = import('../../components/profile/BattlegroundsStats.vue' /* webpackChunkName: "components/battlegrounds-stats" */).then(c => c.default || c)
export const LazyBedwarsStats = import('../../components/profile/BedwarsStats.vue' /* webpackChunkName: "components/bedwars-stats" */).then(c => c.default || c)
export const LazyPrisonStats = import('../../components/profile/PrisonStats.vue' /* webpackChunkName: "components/prison-stats" */).then(c => c.default || c)
export const LazyQuickStats = import('../../components/profile/QuickStats.vue' /* webpackChunkName: "components/quick-stats" */).then(c => c.default || c)
export const LazySkyblockStats = import('../../components/profile/SkyblockStats.vue' /* webpackChunkName: "components/skyblock-stats" */).then(c => c.default || c)
export const LazySkywarsStats = import('../../components/profile/SkywarsStats.vue' /* webpackChunkName: "components/skywars-stats" */).then(c => c.default || c)
export const LazyGameList = import('../../components/splash/GameList.vue' /* webpackChunkName: "components/game-list" */).then(c => c.default || c)
export const LazyPlayerSearch = import('../../components/splash/PlayerSearch.vue' /* webpackChunkName: "components/player-search" */).then(c => c.default || c)
export const LazySupportTicketLink = import('../../components/support/SupportTicketLink.vue' /* webpackChunkName: "components/support-ticket-link" */).then(c => c.default || c)
export const LazyChangePasswordForm = import('../../components/user/ChangePasswordForm.vue' /* webpackChunkName: "components/change-password-form" */).then(c => c.default || c)
export const LazyReply = import('../../components/forums/thread/Reply.vue' /* webpackChunkName: "components/reply" */).then(c => c.default || c)
export const LazyReplyForm = import('../../components/forums/thread/ReplyForm.vue' /* webpackChunkName: "components/reply-form" */).then(c => c.default || c)
export const LazyThreadPlayerCard = import('../../components/forums/thread/ThreadPlayerCard.vue' /* webpackChunkName: "components/thread-player-card" */).then(c => c.default || c)
