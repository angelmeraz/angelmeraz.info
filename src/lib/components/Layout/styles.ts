import ClassGroup from 'classgroup';

export const tw = ClassGroup({
	main: {
		a: 'text-text text-lg font-thin',
		l: 'p-8 md:p-20'
	},
	header: {},
	themeButton: {
		a: 'text-accent hover:text-text',
		l: 'flex items-center justify-center h-8 w-8',
		p: {
			d: 'absolute top-7 right-6 z-10',
			md: 'md:fixed md:top-19.5 md:right-6'
		},
		t: '',
		i: 'transition-colors cursor-pointer'
	},
	icon: {
		a: 'stroke-text',
		l: 'h-4 w-4',
		i: 'transition-colors hover:stroke-accent'
	},
	container: 'md:flex md:gap-8',
	aside: {
		a: 'text-accent',
		l: 'mb-6 w-32'
	},
	content: {
		g: 'prose md:prose-lg text-text',
		li: 'prose-li:marker:text-accent',
		h2: 'prose-h2:text-accent prose-h2:font-thin',
		h3: 'prose-h3:text-accent prose-h3:font-thin',
		h4: 'prose-h4:text-accent prose-h4:font-thin',
		blockquote: {
			a: 'prose-blockquote:border-0 prose-blockquote:text-accent prose-blockquote:font-thin',
			l: 'prose-blockquote:pl-0 prose-blockquote:my-6'
		}
	}
});
