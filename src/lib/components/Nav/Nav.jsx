import { useRouter } from 'next/router';

import CONFIG from '../config';
import ClassGroup from 'classgroup/commonjs';
import Link from 'next/link';

import useWindowDimensions from '../utils/useWindowDimensions';

function Slash({ classes, index, width }) {
	const lineHeight = width < 768 ? 24 : 28;
	const style = { top: lineHeight * index };

	return (
		<span className={classes} style={style}>
			/
		</span>
	);
}

function Cursor({ check }) {
	return check ? <span className="animate-blink">_</span> : '';
}

export default function Nav({ navItems }) {
	const router = useRouter();
	const isRootRoute = router && router.asPath === '/';
	const { width } = useWindowDimensions();

	const path = router.asPath.split('/');
	path.shift();
	const is404 = path[0] === '404';

	function getActiveRoute(navItem) {
		const navItemSlug = navItem.slug.split('/');

		return path.toString() === navItemSlug.toString();
	}

	function getActiveRouteIndex(router, navItems) {
		if (!router && !navItems) return;

		if (isRootRoute) return 0;

		return navItems.findIndex((navItem) => getActiveRoute(navItem));
	}

	const activeRouteIndex = getActiveRouteIndex(router, navItems);

	const tw = ClassGroup({
		nav: {
			a: 'text-base md:text-lg',
			p: 'sticky top-[104px]'
		},
		ul: 'group',
		slash: {
			before: 'content-["/"] absolute -left-2.5',
			hover: 'group-hover:-left-3.5 group-hover:opacity-40',
			t: 'transition-all'
		}
	});

	return (
		<nav className={tw.nav}>
			<ul className={tw.ul}>
				{!is404 && <Slash classes={tw.slash} index={activeRouteIndex} width={width} />}

				<li>
					<Link href="/">
						<a>
							{CONFIG.SLUGS.HOMEPAGE}
							<Cursor check={isRootRoute} />
						</a>
					</Link>
				</li>

				{navItems &&
					navItems.map((item, i) => {
						// Skips SLUGS.HOMEPAGE
						if (item.slug === CONFIG.SLUGS.HOMEPAGE) return;

						return (
							<li key={item.slug}>
								<Link href={`/${item.slug}`}>
									<a>
										{item.title}
										<Cursor check={getActiveRoute(item)} />
									</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</nav>
	);
}
