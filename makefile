PHONY: b c d l lf t

b:
	pnpm run build

l:
	pnpm run lint

lf:
	pnpm run lint-fix

t:
	pnpm run type-check

c: t l

d:
	pnpm run dev