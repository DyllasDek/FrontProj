// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string;
				role: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<unknown>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	declare module '@fortawesome/pro-solid-svg-icons/index.es' {
		export * from '@fortawesome/pro-solid-svg-icons';
	}
	//interface Session {}

	//interface Stuff {}
}
export {};
