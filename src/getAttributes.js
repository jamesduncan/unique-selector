/**
 * Returns the Attribute selectors of the element
 * @param  { DOM Element } element
 * @param  { Array } array of attributes to ignore
 * @param  { Array } array of attributes to accept
 * @return { Array }
 */
export function getAttributes( el, attributesList = ['id', 'class', 'length'], ignore = true )
{
  const { attributes } = el;
  const attrs = [...attributes];

  return attrs.reduce( ( sum, next ) =>
  {
    if ( ignore ) {
      if ( ! ( attributesList.indexOf( next.nodeName ) > -1 ) )
        {
        sum.push( `[${next.nodeName}="${next.value}"]` );
      }
    } else {
      if ( ( attributesList.indexOf( next.nodeName ) > -1 ) )
        {
        sum.push( `[${next.nodeName}="${next.value}"]` );
      }
    }
    return sum;
  }, [] );
}
