// Index for Engine modules

// load constants into main module scope
export * as Defaults from './defaults';

// load combined Control class into main module scope
// export {default as Control} from './control';

// load Vector class into main module scope
export {default as Vector} from './vector';

// load body classes as a submodule
export * as Body from './body';

// load utility functions as a submodule
export * as Utility from './utility';

// load game class
export * as Game from './game';
