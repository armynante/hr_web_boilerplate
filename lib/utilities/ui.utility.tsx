

/**
 * @description This if used to conditionaly render css classes by
 * using a list of css strings. This is useful for tailwindcss.
 * 
 * @example
 * const classes = classNames(
 *  'text-small',
 *  isSomeState ? 'bg-green-500' : 'bg-blue-500', 
 *  'font-bold' 
 * );
 * @param classes A list of classes to join together
 * @returns A string of classes
 */
export function classNames( ...classes:string[] ) {
  return classes.filter( Boolean ).join( ' ' );
}