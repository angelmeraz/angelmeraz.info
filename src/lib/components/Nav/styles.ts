import ClassGroup from 'classgroup';

export const tw = ClassGroup({
	nav: {
		a: 'text-base md:text-lg',
		p: 'sticky top-20'
	},
	ul: 'group relative',
	slash: {
		before: 'content-["/"] absolute -left-2.5',
		hover: 'group-hover:-translate-x-1 group-hover:opacity-40',
		t: 'transition-transform'
	}
});
