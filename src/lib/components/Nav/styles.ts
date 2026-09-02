import ClassGroup from 'classgroup';

export const tw = ClassGroup({
	nav: {
		a: 'text-base md:text-lg',
		p: 'sticky top-26'
	},
	ul: 'group relative',
	slash: {
		before: 'content-["/"] absolute -left-2.5',
		hover: 'group-hover:-left-3.5 group-hover:opacity-40',
		t: 'transition-all'
	}
});
