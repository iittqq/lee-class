<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';

	let open = false;
	let buttonEl: HTMLButtonElement;
	let panelEl: HTMLDivElement;

	const items = [
		{ href: '/', label: 'Home' },
		{ href: '/learning', label: "What We're Learning" },
		{ href: '/calendar', label: 'Calendar' },
		{ href: '/pictures', label: 'Pictures' },
		{ href: '/resources', label: 'Resources' }
	];

	function toggle() {
		open = !open;
		// focus first link when opened
		if (open) queueMicrotask(() => panelEl?.querySelector('a')?.focus());
	}

	// close on Escape
	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			buttonEl?.focus();
		}
	}

	// click outside action
	function clickOutside(node: HTMLElement) {
		const onDocClick = (e: MouseEvent) => {
			if (!open) return;
			const t = e.target as Node;
			if (!node.contains(t) && !buttonEl.contains(t)) {
				open = false;
			}
		};
		document.addEventListener('mousedown', onDocClick);
		return { destroy: () => document.removeEventListener('mousedown', onDocClick) };
	}
</script>

<div class="popover" on:keydown={onKeydown}>
	<button
		bind:this={buttonEl}
		class="trigger"
		aria-haspopup="menu"
		aria-expanded={open}
		aria-controls="nav-popover"
		on:click={toggle}
	>
		☰ Menu
	</button>

	{#if open}
		<div
			bind:this={panelEl}
			id="nav-popover"
			role="menu"
			class="panel"
			use:clickOutside
			transition:scale={{ duration: 140, start: 0.98 }}
			tabindex="-1"
		>
			<ul class="list">
				{#each items as { href, label }, i}
					<li>
						<a role="menuitem" {href} class="link" tabindex={i === 0 ? 0 : -1}>{label}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.popover {
		position: relative;
		display: inline-block;
	}

	.trigger {
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		border: 1px solid hsl(0 0% 85%);
		background: white;
		cursor: pointer;
	}

	.panel {
		position: absolute;
		top: calc(100% + 8px);
		right: 0; /* set left:0 instead to align left */
		min-width: 200px;
		background: white;
		border: 1px solid hsl(0 0% 90%);
		border-radius: 0.75rem;
		box-shadow:
			0 10px 15px rgba(0, 0, 0, 0.1),
			0 4px 6px rgba(0, 0, 0, 0.05);
		padding: 0.5rem;
		outline: none;
		z-index: 1000;
	}

	.list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.link {
		display: block;
		padding: 0.6rem 0.75rem;
		border-radius: 0.5rem;
		text-decoration: none;
		color: #111;
	}
	.link:focus,
	.link:hover {
		background: hsl(210 100% 97%);
		outline: none;
	}
</style>
